'use client';

import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import StyledComponentsRegistry from './lib/registry';
import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
   <main>
    <p>Home works</p>
   </main>
  )
}