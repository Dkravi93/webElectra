'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { signInSchema, type SignInSchema } from '@/lib/schemas'
import { AuthLayout } from '@/components/AuthLayout'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { FcGoogle } from 'react-icons/fc'
import { signIn } from 'next-auth/react'
import { useToast } from '@/hooks/use-toast'
import { Toaster } from '@/components/ui/toaster'
import { useRouter } from 'next/navigation'

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
  })
  const { toast } = useToast();
  const router = useRouter()

  const onSubmit = async (data: SignInSchema) => {
    setIsLoading(true)
    // Handle sign-in logic here
    const response = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    setIsLoading(false);

    if (response?.error) {
      // Handle sign-in failure
      toast({
        title: 'Sign-in failed',
        description: 'Invalid credentials. Please try again.',
        variant: 'destructive',
      });
    } else {
      // Handle successful sign-in
      toast({
        title: 'Signed in successfully!',
        description: 'You have been successfully signed in.',
      });
      
      // Redirect to dashboard or desired page after successful sign-in
      router.push('/');
    }
  }

  return (
    <>
      <AuthLayout title="Sign In">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" {...register('email')} />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" {...register('password')} />
          {errors.password && (
            <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
          )}
        </div>
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? 'Signing In...' : 'Sign In'}
        </Button>
      </form>
      <div className="mt-4 text-center">
        <p className="text-sm text-muted-foreground">
          Don&apos;t have an account?
          <Link href="/signup" className="mr-2 text-primary hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6"
        >
          <Button variant="outline" className="w-full" onClick={() => {signIn("google")}}>
            <FcGoogle className="mr-2 h-4 w-4" /> Google
          </Button>
        </motion.div>
      </div>
    </AuthLayout>
    <Toaster />
    </>
  )
}

