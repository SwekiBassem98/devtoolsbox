'use client';

import { useState, useEffect } from 'react';
import ToolLayout from '@/components/ToolLayout';

export default function JsonFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const formatJson = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError('');
    } catch (e) {
      setError('Invalid JSON. Please check your input.');
      setOutput('');
    }
  };

  const minifyJson = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError('');
    } catch (e) {
      setError('Invalid JSON. Please check your input.');
      setOutput('');
    }
  };

  const copyToClipboard = async () => {
    if (output) {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    if (input) {
      formatJson();
    } else {
      setOutput('');
      setError('');
    }
  }, [input]);

  return (
    <ToolLayout
      title="JSON Formatter"
      description="Format, validate, and beautify your JSON data with just one click."
    >
      <div className="space-y-4">
        <div>
          <label htmlFor="json-input" className="block text-sm font-medium text-gray-700 mb-2">
            Input JSON
          </label>
          <textarea
            id="json-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='{"name": "John", "age": 30}'
            className="w-full h-48 px-4 py-3 font-mono text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-y"
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={formatJson}
            className="px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
          >
            Format
          </button>
          <button
            onClick={minifyJson}
            className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
          >
            Minify
          </button>
          <button
            onClick={() => { setInput(''); setOutput(''); setError(''); }}
            className="px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
          >
            Clear
          </button>
        </div>

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        {output && (
          <div>
            <div className="flex justify-between items-center mb-2">
              <label htmlFor="json-output" className="block text-sm font-medium text-gray-700">
                Output
              </label>
              <button
                onClick={copyToClipboard}
                className="px-3 py-1 text-sm bg-gray-100 text-gray-700 font-medium rounded hover:bg-gray-200 transition-colors"
              >
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <textarea
              id="json-output"
              value={output}
              readOnly
              className="w-full h-48 px-4 py-3 font-mono text-sm bg-gray-50 border border-gray-300 rounded-lg resize-y"
            />
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
