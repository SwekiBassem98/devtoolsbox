import type { Metadata } from 'next'
import { tools } from '@/lib/tools'
import ToolCard from '@/components/ToolCard'

export const metadata: Metadata = {
  title: 'All Tools - DevToolsBox',
  description: 'Browse all free developer tools available in DevToolsBox.',
}

export default function ToolsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          All Developer Tools
        </h1>
        <p className="text-xl text-gray-600">
          Explore our collection of {tools.length} free developer tools.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </div>
  )
}
