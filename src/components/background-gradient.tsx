"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function BackgroundGradientCards({ id, title, description, url } : { id:string, title: string, description: string, url: string }) {
  const router = useRouter();

  return (
    <>
      <BackgroundGradient className="h-full rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <div className="h-full flex flex-col justify-between" >
          <div>
            <Image
              src={url}
              alt={`${title}`}
              height="400"
              width="400"
              className="object-contain"
            />
          </div>
          <div>
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              {title}
            </p>

            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {description}
            </p>
            <button className="rounded-full px-4 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800 hover:scale-110"
              onClick={() => {
                router.push(`/category/${id}`);
              }}
            >
              <span>Explore now </span>
            </button>
          </div>
        </div>
      </BackgroundGradient>
    </>
  );
}

export function CardSkeleton() {
  return (
    <div className="h-full">
      <BackgroundGradient className="h-full rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <div className="h-full flex flex-col justify-between" >
          <div>
            <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-40 w-40 rounded-[22px]"></div>
          </div>
          <div>
            <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-4 w-20 rounded-md mt-4"></div>
            <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-4 w-40 rounded-md mt-2"></div>
            <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-4 w-20 rounded-md mt-2"></div>
            <div className="animate-pulse bg-gray-300 dark:bg-gray-700 h-8 w-20 rounded-md mt-4"></div>
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
}
