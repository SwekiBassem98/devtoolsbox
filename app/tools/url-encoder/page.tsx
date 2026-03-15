import type { Metadata } from 'next'
import UrlEncoder from '@/components/UrlEncoder'

export const metadata: Metadata = {
  title: 'URL Encoder Online - DevToolsBox',
  description: 'Encode and decode URL strings for safe web usage. Free online URL encoder and decoder tool.',
  keywords: ['url encoder', 'url decoder', 'url encode', 'url decode', 'encode url', 'online url encoder'],
  openGraph: {
    title: 'URL Encoder Online - DevToolsBox',
    description: 'Encode and decode URL strings for safe web usage.',
    type: 'website',
  },
}

export default function UrlEncoderPage() {
  return <UrlEncoder />
}
