import type { Metadata } from 'next'
import ColorConverter from '@/components/ColorConverter'

export const metadata: Metadata = {
  title: 'Color Converter Online - DevToolsBox',
  description: 'Convert colors between HEX, RGB, HSL, and other formats. Free online color converter tool.',
  keywords: ['color converter', 'hex to rgb', 'color format', 'rgb to hex', 'hsl converter', 'color picker'],
  openGraph: {
    title: 'Color Converter Online - DevToolsBox',
    description: 'Convert colors between HEX, RGB, HSL, and other formats.',
    type: 'website',
  },
}

export default function ColorConverterPage() {
  return <ColorConverter />
}
