export interface Tool {
  name: string
  slug: string
  description: string
  icon?: string
}

export const tools: Tool[] = [
  {
    name: 'JSON Formatter',
    slug: 'json-formatter',
    description: 'Format, validate, and beautify your JSON data with just one click.',
    icon: '🔧',
  },
  {
    name: 'Password Generator',
    slug: 'password-generator',
    description: 'Generate secure, random passwords with customizable length and complexity.',
    icon: '🔐',
  },
  {
    name: 'Base64 Encoder/Decoder',
    slug: 'base64-encoder',
    description: 'Encode and decode Base64 strings easily in your browser.',
    icon: '🔢',
  },
  {
    name: 'URL Encoder/Decoder',
    slug: 'url-encoder',
    description: 'Encode and decode URL strings for safe web usage.',
    icon: '🔗',
  },
  {
    name: 'UUID Generator',
    slug: 'uuid-generator',
    description: 'Generate unique UUIDs (Universally Unique Identifiers) instantly.',
    icon: '🆔',
  },
  {
    name: 'Lorem Ipsum Generator',
    slug: 'lorem-ipsum',
    description: 'Generate placeholder text for design and prototyping.',
    icon: '📄',
  },
  {
    name: 'Slug Generator',
    slug: 'slug-generator',
    description: 'Convert text into URL-friendly slugs for better SEO.',
    icon: '🔗',
  },
  {
    name: 'Markdown Preview',
    slug: 'markdown-preview',
    description: 'Write and preview Markdown in real-time with live rendering.',
    icon: '📝',
  },
  {
    name: 'Word Counter',
    slug: 'word-counter',
    description: 'Count words, characters, sentences, and paragraphs in your text.',
    icon: '📊',
  },
  {
    name: 'Case Converter',
    slug: 'case-converter',
    description: 'Convert text to uppercase, lowercase, title case, and more.',
    icon: 'Aa',
  },
  {
    name: 'Color Converter',
    slug: 'color-converter',
    description: 'Convert colors between HEX, RGB, HSL, and other formats.',
    icon: '🎨',
  },
]

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find(tool => tool.slug === slug)
}
