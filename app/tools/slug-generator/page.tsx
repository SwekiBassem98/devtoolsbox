import type { Metadata } from 'next'
import SlugGenerator from '@/components/SlugGenerator'

export const metadata: Metadata = {
  title: 'Slug Generator Online - DevToolsBox',
  description: 'Convert text into URL-friendly slugs for better SEO. Free online slug generator tool.',
  keywords: ['slug generator', 'url slug', 'seo slug', 'slug maker', 'create slug', 'url friendly'],
  openGraph: {
    title: 'Slug Generator Online - DevToolsBox',
    description: 'Convert text into URL-friendly slugs for better SEO.',
    type: 'website',
  },
}

export default function SlugGeneratorPage() {
  return <SlugGenerator />
}
