import { HeaderPro } from '@/components/landing/header-pro';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Flame } from 'lucide-react';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
         <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 64 64" fill="none">

  <rect x="12" y="12" width="16" height="16" rx="3" fill="url(#grad)"/>
  <rect x="36" y="12" width="16" height="16" rx="3" fill="url(#grad)"/>
  <rect x="12" y="36" width="16" height="16" rx="3" fill="url(#grad)"/>
  <rect x="36" y="36" width="16" height="16" rx="3" fill="url(#grad)"/>
  
  <defs>
    <linearGradient id="grad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
      <stop stopColor="#F43F5E"/> 
      <stop offset="1" stopColor="#E11D48"/> 
    </linearGradient>
  </defs>
</svg>
        <span className="hidden md:inline-flex items-center text-lg font-bold tracking-tight text-black dark:text-white">
          IrisUI
        </span>
      </div>
      )
    },
     links: [
    {
      text: "Pricing",
      url: "/pricing",
    },

    {
      type: "custom",
      children: <HeaderPro />,
    },
  ],
  };
}