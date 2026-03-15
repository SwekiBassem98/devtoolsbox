import type { Metadata } from 'next'
import Base64Encoder from '@/components/Base64Encoder'

export const metadata: Metadata = {
  title: 'Base64 Encoder Online - DevToolsBox',
  description: 'Encode and decode Base64 strings easily in your browser. Free online Base64 encoder and decoder tool.',
  keywords: ['base64 encoder', 'base64 decoder', 'base64 online', 'encode base64', 'decode base64'],
  openGraph: {
    title: 'Base64 Encoder Online - DevToolsBox',
    description: 'Encode and decode Base64 strings easily in your browser.',
    type: 'website',
  },
}

export default function Base64EncoderPage() {
  return <Base64Encoder />
}
