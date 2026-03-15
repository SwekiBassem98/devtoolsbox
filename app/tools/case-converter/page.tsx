import type { Metadata } from 'next'
import CaseConverter from '@/components/CaseConverter'

export const metadata: Metadata = {
  title: 'Case Converter Online - DevToolsBox',
  description: 'Convert text to uppercase, lowercase, title case, and more. Free online case converter tool.',
  keywords: ['case converter', 'text case', 'uppercase', 'lowercase', 'title case', 'camel case', 'snake case'],
  openGraph: {
    title: 'Case Converter Online - DevToolsBox',
    description: 'Convert text to uppercase, lowercase, title case, and more.',
    type: 'website',
  },
}

export default function CaseConverterPage() {
  return <CaseConverter />
}
