import type { Metadata } from 'next'
import UuidGenerator from '@/components/UuidGenerator'

export const metadata: Metadata = {
  title: 'UUID Generator Online - DevToolsBox',
  description: 'Generate unique UUIDs (Universally Unique Identifiers) instantly. Free online UUID generator tool.',
  keywords: ['uuid generator', 'uuid generator online', 'generate uuid', 'unique id generator', 'guid generator'],
  openGraph: {
    title: 'UUID Generator Online - DevToolsBox',
    description: 'Generate unique UUIDs (Universally Unique Identifiers) instantly.',
    type: 'website',
  },
}

export default function UuidGeneratorPage() {
  return <UuidGenerator />
}
