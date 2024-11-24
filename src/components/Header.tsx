"use client";
import React from 'react'
import Link from 'next/link';
import { LuShoppingCart } from "react-icons/lu";

export default function Header() {
  return (
    <header className='header'>
    <h1 className='logo'>Fashion Collection  <LuShoppingCart /></h1>
    <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/collection">Collection</Link>
        <Link href="/contact">Contact</Link>
        
    </nav>
    </header>
  )
}
