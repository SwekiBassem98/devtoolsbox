'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'

export default function UuidGenerator() {
  const [count, setCount] = useState(1)
  const [uuids, setUuids] = useState<string[]>([])
  const [copied, setCopied] = useState(false)

  const generateUuid = (): string => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0
      const v = c === 'x' ? r : (r & 0x3 | 0x8)
      return v.toString(16)
    })
  }

  const generateUuids = () => {
    const newUuids: string[] = []
    for (let i = 0; i < count; i++) {
      newUuids.push(generateUuid())
    }
    setUuids(newUuids)
  }

  const copyToClipboard = async () => {
    if (uuids.length > 0) {
      await navigator.clipboard.writeText(uuids.join('\n'))
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <ToolLayout
      title="UUID Generator"
      description="Generate unique UUIDs (Universally Unique Identifiers) instantly."
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Number of UUIDs to generate:
          </label>
          <input
            type="number"
            min="1"
            max="100"
            value={count}
            onChange={(e) => setCount(parseInt(e.target.value) || 1)}
            className="w-32 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <button
          onClick={generateUuids}
          className="px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
        >
          Generate UUID{count > 1 ? 's' : ''}
        </button>

        {uuids.length > 0 && (
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Generated UUID{uuids.length > 1 ? 's' : ''}
              </label>
              <button
                onClick={copyToClipboard}
                className="px-3 py-1 text-sm bg-gray-100 text-gray-700 font-medium rounded hover:bg-gray-200 transition-colors"
              >
                {copied ? 'Copied!' : 'Copy All'}
              </button>
            </div>
            <div className="p-4 bg-gray-50 border border-gray-300 rounded-lg max-h-64 overflow-y-auto">
              {uuids.map((uuid, index) => (
                <code key={index} className="block font-mono text-sm mb-1">{uuid}</code>
              ))}
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  )
}
