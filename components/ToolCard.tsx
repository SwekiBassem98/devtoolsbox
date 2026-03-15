import Link from 'next/link'
import { Tool } from '@/lib/tools'

interface ToolCardProps {
  tool: Tool
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="block p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-primary-300 transition-all duration-200"
    >
      <div className="flex items-start gap-4">
        {tool.icon && (
          <span className="text-3xl" role="img" aria-label={tool.name}>
            {tool.icon}
          </span>
        )}
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-gray-900 mb-1">
            {tool.name}
          </h2>
          <p className="text-sm text-gray-600">
            {tool.description}
          </p>
        </div>
      </div>
    </Link>
  )
}
