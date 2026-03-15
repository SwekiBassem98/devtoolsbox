'use client'

import { useState, useEffect } from 'react'
import ToolLayout from '@/components/ToolLayout'

export default function ColorConverter() {
  const [input, setInput] = useState('#3498db')
  const [hex, setHex] = useState('#3498db')
  const [rgb, setRgb] = useState('rgb(52, 152, 219)')
  const [hsl, setHsl] = useState('hsl(204, 70%, 53%)')
  const [error, setError] = useState('')
  const [copied, setCopied] = useState('')

  const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null
  }

  const rgbToHsl = (r: number, g: number, b: number): { h: number; s: number; l: number } => {
    r /= 255
    g /= 255
    b /= 255
    const max = Math.max(r, g, b), min = Math.min(r, g, b)
    let h = 0, s = 0
    const l = (max + min) / 2

    if (max !== min) {
      const d = max - min
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
      switch (max) {
        case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break
        case g: h = ((b - r) / d + 2) / 6; break
        case b: h = ((r - g) / d + 4) / 6; break
      }
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100)
    }
  }

  const convertColor = (value: string) => {
    setInput(value)
    setError('')

    let hexValue = value.trim()
    
    // Add # if missing
    if (hexValue && !hexValue.startsWith('#')) {
      hexValue = '#' + hexValue
    }

    const rgbValue = hexToRgb(hexValue)
    
    if (rgbValue) {
      const { r, g, b } = rgbValue
      setHex(hexValue.toLowerCase())
      setRgb(`rgb(${r}, ${g}, ${b})`)
      
      const hslValue = rgbToHsl(r, g, b)
      setHsl(`hsl(${hslValue.h}, ${hslValue.s}%, ${hslValue.l}%)`)
    } else {
      setError('Invalid HEX color format')
    }
  }

  const copyToClipboard = async (text: string, type: string) => {
    await navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(''), 2000)
  }

  useEffect(() => {
    convertColor(input)
  }, [])

  return (
    <ToolLayout
      title="Color Converter"
      description="Convert colors between HEX, RGB, HSL, and other formats."
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter HEX color:
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => convertColor(e.target.value)}
              placeholder="#3498db"
              className="flex-1 px-4 py-2 font-mono text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
            <input
              type="color"
              value={hex}
              onChange={(e) => convertColor(e.target.value)}
              className="w-12 h-10 border border-gray-300 rounded-lg cursor-pointer"
            />
          </div>
        </div>

        {error && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        <div className="grid gap-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <div className="text-sm text-gray-500 mb-1">HEX</div>
              <code className="text-lg font-mono">{hex}</code>
            </div>
            <button
              onClick={() => copyToClipboard(hex, 'hex')}
              className="px-3 py-1 text-sm bg-gray-100 text-gray-700 font-medium rounded hover:bg-gray-200 transition-colors"
            >
              {copied === 'hex' ? 'Copied!' : 'Copy'}
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <div className="text-sm text-gray-500 mb-1">RGB</div>
              <code className="text-lg font-mono">{rgb}</code>
            </div>
            <button
              onClick={() => copyToClipboard(rgb, 'rgb')}
              className="px-3 py-1 text-sm bg-gray-100 text-gray-700 font-medium rounded hover:bg-gray-200 transition-colors"
            >
              {copied === 'rgb' ? 'Copied!' : 'Copy'}
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <div className="text-sm text-gray-500 mb-1">HSL</div>
              <code className="text-lg font-mono">{hsl}</code>
            </div>
            <button
              onClick={() => copyToClipboard(hsl, 'hsl')}
              className="px-3 py-1 text-sm bg-gray-100 text-gray-700 font-medium rounded hover:bg-gray-200 transition-colors"
            >
              {copied === 'hsl' ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>

        <div
          className="h-24 rounded-lg border border-gray-300"
          style={{ backgroundColor: hex }}
        />
      </div>
    </ToolLayout>
  )
}
