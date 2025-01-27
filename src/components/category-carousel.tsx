"use client"

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { BackgroundGradientCards, CardSkeleton } from '@/components/background-gradient'
import { Button } from './ui/button'

interface Product {
  _id: string
  name: string
  image: string
  description: string
}

interface ProductCarouselProps {
  products: Product[]
}

export function CategoryCarousel({ products }: ProductCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' })


  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  if(products?.length === 0) {
    return <Skeleton />
  }

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {products?.length && products.map((product) => (
            <div key={product._id} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] px-4">
              <BackgroundGradientCards
                id={product._id}
                title={product.name}
                description={`${product.description}`}
                url={product.image}
              />
            </div>
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary/80 backdrop-blur-sm"
        onClick={scrollNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

// skeleton for the category carousel

function Skeleton() {
  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <div key={i} className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.33%] lg:flex-[0_0_25%] px-4">
              <CardSkeleton />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}



