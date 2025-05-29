"use client";
import Hero from '@/app/components/Hero'
import Footer from '@/app/components/Footer'
import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Add = () => {
  const router = useRouter();
  const { data: session } = useSession();
  useEffect(() => {
    if (!session) {
      router.replace('/');
    }
    console.log(session);
  }, [session, router]);
  return (
    <>
      <Hero />
      <div className="p-4 md:p-20 content">
        This is it
      </div>
      <Footer />
    </>
  )
}

export default Add