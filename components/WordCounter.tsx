'use client'

import { useState, useEffect } from 'react'
import ToolLayout from '@/components/ToolLayout'

export default function WordCounter() {
  const [input, setInput] = useState('')
  const [stats, setStats] = useState({
    characters: 0,
    charactersNoSpaces: 0,
    words: 0,
    sentences: 0,
    paragraphs: 0,
    lines: 0
  })

  useEffect(() => {
    const text = input
    const characters = text.length
    const charactersNoSpaces = text.replace(/\s/g, '').length
    const words = text.trim() ? text.trim().split(/\s+/).length : 0
    const sentences = text.split(/[.!?]+/).filter(s => s.trim()).length || 0
    const paragraphs = text.split(/\n\n+/).filter(p => p.trim()).length || (text.trim() ? 1 : 0)
    const lines = text.split('\n').length || 0

    setStats({
      characters,
      charactersNoSpaces,
      words,
      sentences,
      paragraphs,
      lines
    })
  }, [input])

  return (
    <ToolLayout
      title="Word Counter"
      description="Count words, characters, sentences, and paragraphs in your text."
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter your text:
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter or paste your text here..."
            className="w-full h-64 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-y"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg text-center">
            <div className="text-2xl font-bold text-primary-600">{stats.words}</div>
            <div className="text-sm text-gray-600">Words</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg text-center">
            <div className="text-2xl font-bold text-primary-600">{stats.characters}</div>
            <div className="text-sm text-gray-600">Characters</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg text-center">
            <div className="text-2xl font-bold text-primary-600">{stats.charactersNoSpaces}</div>
            <div className="text-sm text-gray-600">Characters (no spaces)</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg text-center">
            <div className="text-2xl font-bold text-primary-600">{stats.sentences}</div>
            <div className="text-sm text-gray-600">Sentences</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg text-center">
            <div className="text-2xl font-bold text-primary-600">{stats.paragraphs}</div>
            <div className="text-sm text-gray-600">Paragraphs</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg text-center">
            <div className="text-2xl font-bold text-primary-600">{stats.lines}</div>
            <div className="text-sm text-gray-600">Lines</div>
          </div>
        </div>
      </div>
    </ToolLayout>
  )
}
