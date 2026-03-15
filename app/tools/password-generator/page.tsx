import type { Metadata } from 'next'
import PasswordGenerator from '@/components/PasswordGenerator'

export const metadata: Metadata = {
  title: 'Password Generator Free - DevToolsBox',
  description: 'Generate secure, random passwords with customizable length and complexity. Free online password generator tool.',
  keywords: ['password generator', 'password generator free', 'random password', 'secure password', 'password maker'],
  openGraph: {
    title: 'Password Generator Free - DevToolsBox',
    description: 'Generate secure, random passwords with customizable length and complexity.',
    type: 'website',
  },
}

export default function PasswordGeneratorPage() {
  return <PasswordGenerator />
}
