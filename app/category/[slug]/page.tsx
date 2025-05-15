"use client"
import Footer from '@/app/components/Footer';
import Hero from '@/app/components/Hero';
import { SlugProps } from '@/interfaces'
import React, { useEffect, useState } from 'react'

const Category = ({ params }: SlugProps) => {
    const [slug, setSlug] = useState("");
    useEffect(() => {
        const getSlug = async () => {
            const _slug = (await params).slug;
            setSlug(_slug);
        }
        getSlug();
    }, [params])

  return (
    <>
    <Hero />
    <div className="p-4 md:p-20 content">
        This is slug {slug}
    </div>
    <Footer />
    </>
  )
}

export default Category