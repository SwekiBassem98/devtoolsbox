'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'

export default function LoremIpsum() {
  const [paragraphs, setParagraphs] = useState(3)
  const [output, setOutput] = useState('')
  const [copied, setCopied] = useState(false)

  const loremWords = [
    'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit',
    'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore',
    'magna', 'aliqua', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud',
    'exercitation', 'ullamco', 'laboris', 'nisi', 'aliquip', 'ex', 'ea', 'commodo',
    'consequat', 'duis', 'aute', 'irure', 'in', 'reprehenderit', 'voluptate',
    'velit', 'esse', 'cillum', 'fugiat', 'nulla', 'pariatur', 'excepteur', 'sint',
    'occaecat', 'cupidatat', 'non', 'proident', 'sunt', 'culpa', 'qui', 'officia',
    'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum'
  ]

  const generateLoremIpsum = () => {
    const result: string[] = []
    
    for (let p = 0; p < paragraphs; p++) {
      const paragraphLength = Math.floor(Math.random() * 5) + 3
      const words: string[] = []
      
      for (let i = 0; i < paragraphLength * 8; i++) {
        words.push(loremWords[Math.floor(Math.random() * loremWords.length)])
      }
      
      // Capitalize first word
      words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1)
      
      result.push(words.join(' ') + '.')
    }
    
    setOutput(result.join('\n\n'))
  }

  const copyToClipboard = async () => {
    if (output) {
      await navigator.clipboard.writeText(output)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <ToolLayout
      title="Lorem Ipsum Generator"
      description="Generate placeholder text for design and prototyping."
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of paragraphs:
          </label>
          <input
            type="number"
            min="1"
            max="20"
            value={paragraphs}
            onChange={(e) => setParagraphs(parseInt(e.target.value) || 1)}
            className="w-32 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <button
          onClick={generateLoremIpsum}
          className="px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
        >
          Generate Lorem Ipsum
        </button>

        {output && (
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Generated Text
              </label>
              <button
                onClick={copyToClipboard}
                className="px-3 py-1 text-sm bg-gray-100 text-gray-700 font-medium rounded hover:bg-gray-200 transition-colors"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <div className="p-4 bg-gray-50 border border-gray-300 rounded-lg max-h-96 overflow-y-auto whitespace-pre-wrap">
              {output}
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  )
}
