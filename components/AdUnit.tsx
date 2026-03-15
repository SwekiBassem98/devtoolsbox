'use client'

import { useEffect, useState } from 'react'

interface AdUnitProps {
  /** AdSense ad slot ID - Replace with your actual ad slot ID */
  slotId?: string
  /** Ad format: 'auto', 'horizontal', 'vertical', 'rectangle' */
  format?: 'auto' | 'horizontal' | 'vertical' | 'rectangle'
  /** Ad position: 'top', 'middle', 'bottom' */
  position?: 'top' | 'middle' | 'bottom'
  /** Additional className for styling */
  className?: string
}

/**
 * AdUnit Component - Automatically inserts AdSense ad units
 * 
 * Usage:
 * - Place in any page or layout to display ads
 * - Replace slotId with your AdSense ad slot ID
 * - Supports multiple ad formats and positions
 * 
 * Note: This component requires the AdSense script to be loaded in layout.tsx
 */
export default function AdUnit({
  slotId = 'YOUR_AD_SLOT_ID', // Replace with your actual ad slot ID
  format = 'auto',
  position = 'bottom',
  className = '',
}: AdUnitProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    // Load AdSense script if not already loaded
    if (typeof window !== 'undefined') {
      const adsbygoogle = (window as unknown as { adsbygoogle?: unknown[] }).adsbygoogle
      if (adsbygoogle) {
        try {
          // Push empty array to trigger ad load
          adsbygoogle.push({})
        } catch (e) {
          console.error('AdSense error:', e)
        }
      }
    }
  }, [])

  // Don't render during SSR
  if (!isMounted) {
    return (
      <div className={`ad-container ${className}`}>
        <div className="adsbygoogle-placeholder bg-gray-100 rounded-lg animate-pulse min-h-[90px] flex items-center justify-center">
          <span className="text-gray-400 text-sm">Advertisement</span>
        </div>
      </div>
    )
  }

  return (
    <div className={`ad-container my-6 ${className}`}>
      <ins
        className="adsbygoogle block mx-auto"
        style={{
          display: 'block',
          minHeight: format === 'horizontal' ? '90px' : format === 'vertical' ? '600px' : '280px',
        }}
        data-ad-client="ca-pub-7414268235116585"
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  )
}

/**
 * AdUnit Top - Banner ad at top of content
 */
export function AdUnitTop({ slotId = 'YOUR_AD_SLOT_ID' }: { slotId?: string }) {
  return (
    <AdUnit
      slotId={slotId}
      format="horizontal"
      position="top"
      className="my-4"
    />
  )
}

/**
 * AdUnit Bottom - Banner ad at bottom of content
 */
export function AdUnitBottom({ slotId = 'YOUR_AD_SLOT_ID' }: { slotId?: string }) {
  return (
    <AdUnit
      slotId={slotId}
      format="horizontal"
      position="bottom"
      className="my-4"
    />
  )
}

/**
 * AdUnit Sidebar - Vertical ad for sidebar placement
 */
export function AdUnitSidebar({ slotId = 'YOUR_AD_SLOT_ID' }: { slotId?: string }) {
  return (
    <AdUnit
      slotId={slotId}
      format="vertical"
      position="middle"
      className="my-4"
    />
  )
}

/**
 * AdUnit InArticle - Rectangle ad for in-article placement
 */
export function AdUnitInArticle({ slotId = 'YOUR_AD_SLOT_ID' }: { slotId?: string }) {
  return (
    <AdUnit
      slotId={slotId}
      format="rectangle"
      position="middle"
      className="my-4"
    />
  )
}
