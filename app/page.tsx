'use client'

import { useState, useMemo } from 'react'
import { tools } from '@/lib/tools'
import ToolCard from '@/components/ToolCard'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')

  // Use useMemo to prevent unnecessary re-renders
  const filteredTools = useMemo(() => {
    if (!searchQuery) return tools
    const query = searchQuery.toLowerCase()
    return tools.filter(
      tool =>
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query)
    )
  }, [searchQuery])

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Free Developer Tools
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          A collection of powerful developer tools to boost your productivity. 
          All tools run entirely in your browser - no server required.
        </p>
        
        {/* Search */}
        <div className="max-w-xl mx-auto">
          <div className="relative">
            <input
              type="search"
              aria-label="Search tools"
              placeholder="Search tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-4 pl-14 text-lg border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 transition-all shadow-sm"
            />
            <svg
              className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section aria-labelledby="tools-heading">
        <h2 id="tools-heading" className="text-2xl font-bold text-gray-900 mb-6">
          {searchQuery ? `Search Results (${filteredTools.length})` : 'All Tools'}
        </h2>
        
        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-2xl">
            <p className="text-gray-500 text-lg">
              No tools found matching "{searchQuery}"
            </p>
          </div>
        )}
      </section>
    </div>
  )
}
