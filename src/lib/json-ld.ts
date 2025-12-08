import type { Article, Organization, SoftwareApplication, WebSite } from 'schema-dts'

export const organizationSchema: Organization = {
  '@type': 'Organization',
  '@id': 'https://docs.glyphrun.com/#organization',
  name: 'Glyphrun',
  url: 'https://glyphrun.com',
  logo: 'https://glyphrun.com/logo-full.png',
  sameAs: [
    'https://github.com/glyphrun',
    'https://twitter.com/glyphrun',
    'https://discord.gg/glyphrun'
  ],
  description: 'The App Store for AI Agents - A marketplace for Runnable Digital Assets (RDAs) called Glyphs',
  foundingDate: '2024',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    url: 'https://discord.gg/glyphrun'
  }
}

export const websiteSchema: WebSite = {
  '@type': 'WebSite',
  '@id': 'https://docs.glyphrun.com/#website',
  url: 'https://docs.glyphrun.com',
  name: 'Glyphrun Documentation',
  description: 'Developer documentation for Glyphrun - The App Store for AI Agents',
  publisher: {
    '@id': 'https://docs.glyphrun.com/#organization'
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://docs.glyphrun.com/search?q={search_term_string}'
    },
    query: 'required name=search_term_string'
  }
}

export const softwareApplicationSchema: SoftwareApplication = {
  '@type': 'SoftwareApplication',
  '@id': 'https://docs.glyphrun.com/#software',
  name: 'Glyphrun',
  description: 'Marketplace for AI agent capabilities - Run, create, and monetize Prompts, Agents, and Tools with USDC micropayments',
  url: 'https://glyphrun.com',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web Browser',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    description: 'Pay-per-use pricing starting at $0.02'
  },
  creator: {
    '@id': 'https://docs.glyphrun.com/#organization'
  },
  featureList: [
    'Prompts - LLM-based text generation with model selection',
    'Agents - Workflow orchestration via webhooks',
    'Tools - API proxies with authentication',
    'USDC micropayments on Base',
    'Non-custodial wallet integration',
    'Creator monetization'
  ]
}

export function createTechArticleSchema({
  title,
  description,
  url,
  publishedDate,
  modifiedDate,
  section
}: {
  title: string
  description: string
  url: string
  publishedDate?: string
  modifiedDate?: string
  section?: string
}): Article {
  return {
    '@type': 'TechArticle',
    '@id': `${url}#article`,
    headline: title,
    description,
    url,
    author: {
      '@id': 'https://docs.glyphrun.com/#organization'
    },
    publisher: {
      '@id': 'https://docs.glyphrun.com/#organization'
    },
    datePublished: publishedDate || new Date().toISOString(),
    dateModified: modifiedDate || new Date().toISOString(),
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://docs.glyphrun.com/#website'
    },
    about: {
      '@type': 'Thing',
      name: section || 'Glyphrun Documentation'
    },
    genre: ['Technical Documentation', 'API Documentation', 'Developer Guide'],
    keywords: [
      'glyphrun',
      'AI agents',
      'prompts',
      'agents',
      'tools',
      'USDC payments',
      'micropayments',
      'Base network',
      'RDA',
      'runnable digital assets'
    ]
  }
}

export function generateStructuredData(schemas: any[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas
  }
}
