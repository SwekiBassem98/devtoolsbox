import type { Metadata } from 'next'
import LoremIpsum from '@/components/LoremIpsum'

export const metadata: Metadata = {
  title: 'Lorem Ipsum Generator Online - DevToolsBox',
  description: 'Generate placeholder text for design and prototyping. Free Lorem Ipsum generator tool.',
  keywords: ['lorem ipsum generator', 'lorem ipsum', 'placeholder text', 'dummy text generator', 'lorem ipsum online'],
  openGraph: {
    title: 'Lorem Ipsum Generator Online - DevToolsBox',
    description: 'Generate placeholder text for design and prototyping.',
    type: 'website',
  },
}

export default function LoremIpsumPage() {
  return <LoremIpsum />
}
