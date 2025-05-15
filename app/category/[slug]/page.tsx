"use client"
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
    <div>{slug}</div>
  )
}

export default Category