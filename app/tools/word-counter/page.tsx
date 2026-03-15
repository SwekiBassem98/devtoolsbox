import type { Metadata } from 'next'
import WordCounter from '@/components/WordCounter'

export const metadata: Metadata = {
  title: 'Word Counter Online - DevToolsBox',
  description: 'Count words, characters, sentences, and paragraphs in your text. Free online word counter tool.',
  keywords: ['word counter', 'character counter', 'count words', 'word count', 'text counter', 'word counter online'],
  openGraph: {
    title: 'Word Counter Online - DevToolsBox',
    description: 'Count words, characters, sentences, and paragraphs in your text.',
    type: 'website',
  },
}

export default function WordCounterPage() {
  return <WordCounter />
}
