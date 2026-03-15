'use client'

import { useState } from 'react'
import ToolLayout from '@/components/ToolLayout'

export default function CaseConverter() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [copied, setCopied] = useState(false)

  const convertToUppercase = () => setOutput(input.toUpperCase())
  const convertToLowercase = () => setOutput(input.toLowerCase())
  const convertToTitleCase = () => {
    setOutput(input.replace(/\w\S*/g, (txt) => 
      txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    ))
  }
  const convertToSentenceCase = () => {
    setOutput(input.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase()))
  }
  const convertToCamelCase = () => {
    setOutput(input.replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : ''))
  }
  const convertToSnakeCase = () => {
    setOutput(input.replace(/([a-z])([A-Z])/g, '$1_$2').replace(/[\s-]+/g, '_').toLowerCase())
  }
  const convertToKebabCase = () => {
    setOutput(input.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/[\s_]+/g, '-').toLowerCase())
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
      title="Case Converter"
      description="Convert text to uppercase, lowercase, title case, and more."
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter your text:
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text to convert..."
            className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-y"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={convertToUppercase}
            className="px-3 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors text-sm"
          >
            UPPERCASE
          </button>
          <button
            onClick={convertToLowercase}
            className="px-3 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors text-sm"
          >
            lowercase
          </button>
          <button
            onClick={convertToTitleCase}
            className="px-3 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors text-sm"
          >
            Title Case
          </button>
          <button
            onClick={convertToSentenceCase}
            className="px-3 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors text-sm"
          >
            Sentence case
          </button>
          <button
            onClick={convertToCamelCase}
            className="px-3 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors text-sm"
          >
            camelCase
          </button>
          <button
            onClick={convertToSnakeCase}
            className="px-3 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors text-sm"
          >
            snake_case
          </button>
          <button
            onClick={convertToKebabCase}
            className="px-3 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors text-sm"
          >
            kebab-case
          </button>
        </div>

        {output && (
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Converted Text
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
