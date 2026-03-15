'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'

export default function UrlEncoder() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [mode, setMode] = useState<'encode' | 'decode'>('encode')
  const [error, setError] = useState('')
  const [copied, setCopied] = useState(false)

  const processInput = (value: string) => {
    setInput(value)
    setError('')

    if (!value) {
      setOutput('')
      return
    }

    try {
      if (mode === 'encode') {
        setOutput(encodeURIComponent(value))
      } else {
        setOutput(decodeURIComponent(value))
      }
    } catch (e) {
      setError('Invalid input for URL decoding.')
      setOutput('')
    }
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
      title="URL Encoder/Decoder"
      description="Encode and decode URL strings for safe web usage."
    >
      <div className="space-y-4">
        <div className="flex gap-3 mb-4">
          <button
            onClick={() => { setMode('encode'); setInput(''); setOutput(''); setError(''); }}
            className={`px-4 py-2 font-medium rounded-lg transition-colors ${
              mode === 'encode'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Encode
          </button>
          <button
            onClick={() => { setMode('decode'); setInput(''); setOutput(''); setError(''); }}
            className={`px-4 py-2 font-medium rounded-lg transition-colors ${
              mode === 'decode'
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Decode
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {mode === 'encode' ? 'Text to Encode' : 'URL to Decode'}
          </label>
          <textarea
            value={input}
            onChange={(e) => processInput(e.target.value)}
            placeholder={mode === 'encode' ? 'Enter text to encode...' : 'Enter URL to decode...'}
            className="w-full h-32 px-4 py-3 font-mono text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-y"
          />
        </div>

        <button
          onClick={() => { setInput(''); setOutput(''); setError(''); }}
          className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
        >
          Clear
        </button>

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        {output && (
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-gray-700">
                {mode === 'encode' ? 'Encoded URL' : 'Decoded Text'}
              </label>
              <button
                onClick={copyToClipboard}
                className="px-3 py-1 text-sm bg-gray-100 text-gray-700 font-medium rounded hover:bg-gray-200 transition-colors"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <textarea
              value={output}
              readOnly
              className="w-full h-32 px-4 py-3 font-mono text-sm bg-gray-50 border border-gray-300 rounded-lg resize-y"
            />
          </div>
        )}
      </div>
    </ToolLayout>
  )
}
