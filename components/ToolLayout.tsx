import { ReactNode } from 'react';
import AdUnit, { AdUnitTop, AdUnitBottom } from './AdUnit';

interface ToolLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
}

export default function ToolLayout({ children, title, description }: ToolLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {title}
          </h1>
          <p className="text-gray-600 text-lg">
            {description}
          </p>
        </header>
        
        {/* Ad Unit - Top of Tool */}
        <AdUnitTop />
        
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
          {children}
        </div>
        
        {/* Ad Unit - Bottom of Tool */}
        <AdUnitBottom />
      </div>
    </div>
  );
}
