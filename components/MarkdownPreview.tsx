'use client';

import { useState, useEffect } from 'react';
import { marked } from 'marked';
import ToolLayout from '@/components/ToolLayout';

export default function MarkdownPreview() {
  const [input, setInput] = useState('# Hello World\n\nThis is a **markdown** preview tool.\n\n## Features\n\n- Real-time preview\n- Supports GitHub Flavored Markdown\n- Easy to use');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const renderMarkdown = async () => {
      try {
        const html = await marked.parse(input);
        setOutput(html as string);
      } catch (e) {
        setOutput('<p class="text-red-500">Error rendering markdown</p>');
      }
    };

    renderMarkdown();
  }, [input]);

  const copyHtml = async () => {
    if (output) {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <ToolLayout
      title="Markdown Preview"
      description="Write and preview Markdown in real-time with live rendering."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="markdown-input" className="block text-sm font-medium text-gray-700">
              Markdown Input
            </label>
          </div>
          <textarea
            id="markdown-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your markdown here..."
            className="w-full h-96 px-4 py-3 font-mono text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-y"
          />
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="markdown-output" className="block text-sm font-medium text-gray-700">
              Preview
            </label>
            <button
              onClick={copyHtml}
              className="px-3 py-1 text-sm bg-gray-100 text-gray-700 font-medium rounded hover:bg-gray-200 transition-colors"
            >
              {copied ? 'Copied!' : 'Copy HTML'}
            </button>
          </div>
          <div
            id="markdown-output"
            className="w-full h-96 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg overflow-y-auto prose prose-sm max-w-none"
            dangerouslySetInnerHTML={{ __html: output }}
          />
        </div>
      </div>
    </ToolLayout>
  );
}
