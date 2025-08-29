import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { Metadata } from 'next';

export const metadata: Metadata = {
title: {
template:
"%s | irisui - Free UI Components to build beautiful websites",
default: "irisui - Free UI Components to build beautiful websites",
},
};
export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout tree={source.pageTree} {...baseOptions()} sidebar={{
defaultOpenLevel: 1,

}}>
      {children}
    </DocsLayout>
  );
}