import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

export const metadata: Metadata = {
  title: 'Markdown Preview Online - DevToolsBox',
  description: 'Write and preview Markdown in real-time with live rendering. Free online Markdown preview tool.',
  keywords: ['markdown preview', 'markdown editor', 'markdown renderer', 'markdown to html', 'markdown online'],
  openGraph: {
    title: 'Markdown Preview Online - DevToolsBox',
    description: 'Write and preview Markdown in real-time with live rendering.',
    type: 'website',
  },
}

// Lazy load the Markdown component to reduce initial bundle size
const MarkdownPreview = dynamic(() => import('@/components/MarkdownPreview'), {
  loading: () => <div className="animate-pulse h-96 bg-gray-100 rounded-lg" />,
  ssr: false,
})

export default function MarkdownPreviewPage() {
  return <MarkdownPreview />
}
