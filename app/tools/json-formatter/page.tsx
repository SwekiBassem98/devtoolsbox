import type { Metadata } from 'next'
import JsonFormatter from '@/components/JsonFormatter'

export const metadata: Metadata = {
  title: 'JSON Formatter Online - DevToolsBox',
  description: 'Format, validate, and beautify your JSON data with just one click. Free online JSON formatter tool for developers.',
  keywords: ['json formatter', 'json formatter online', 'json beautifier', 'json validator', 'format json', 'json tools'],
  openGraph: {
    title: 'JSON Formatter Online - DevToolsBox',
    description: 'Format, validate, and beautify your JSON data with just one click.',
    type: 'website',
  },
}

export default function JsonFormatterPage() {
  return <JsonFormatter />
}
