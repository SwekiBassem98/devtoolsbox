'use client';

import { useState, useEffect } from 'react';
import ToolLayout from '@/components/ToolLayout';

export default function SlugGenerator() {
  const [input, setInput] = useState('Hello World! This is a test');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  useEffect(() => {
    setOutput(generateSlug(input));
  }, [input]);

  const copyToClipboard = async () => {
    if (output) {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <ToolLayout
      title="Slug Generator"
      description="Convert text into URL-friendly slugs for better SEO."
    >
      <div className="space-y-4">
        <div>
          <label htmlFor="slug-input" className="block text-sm font-medium text-gray-700 mb-2">
            Text to Convert
          </label>
          <textarea
            id="slug-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter text to convert to slug..."
            className="w-full h-32 px-4 py-3 font-mono text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-y"
          />
        </div>

        <button
          onClick={() => setInput('')}
          className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
        >
          Clear
        </button>

        {output && (
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="slug-output" className="block text-sm font-medium text-gray-700">
                Generated Slug
              </label>
              <button
                onClick={copyToClipboard}
                className="px-3 py-1 text-sm bg-gray-100 text-gray-700 font-medium rounded hover:bg-gray-200 transition-colors"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <div className="p-4 bg-gray-50 border border-gray-300 rounded-lg">
              <code className="text-lg font-mono break-all">{output}</code>
            </div>
          </div>
        )}

        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-medium text-blue-900 mb-2">Tips for SEO-friendly URLs:</h3>
          <ul className="list-disc list-inside text-sm text-blue-800 space-y-1">
            <li>Use hyphens (-) to separate words</li>
            <li>Keep URLs short and descriptive</li>
            <li>Include relevant keywords</li>
            <li>Avoid special characters and spaces</li>
          </ul>
        </div>
      </div>
    </ToolLayout>
  );
}
