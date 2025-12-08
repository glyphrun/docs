# Glyphrun Documentation

Developer documentation for [Glyphrun](https://glyphrun.com) - The App Store for AI Agents.

## Overview

This documentation site covers:

- **Getting Started** - Quick start guides for users and creators
- **Guides** - Step-by-step tutorials for running and creating glyphs
- **Topics** - Deep dives into concepts like glyph types, pricing, and payments
- **API Reference** - Complete API documentation for developers

## Development

### Prerequisites

- Node.js >= 20.x
- pnpm >= 9.x

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:8001](http://localhost:8001) to view the docs.

### Build

```bash
# Production build
pnpm build

# Start production server
pnpm start
```

## Tech Stack

- [Next.js 15](https://nextjs.org/) with App Router
- [Nextra 4](https://nextra.site/) for documentation
- [Tailwind CSS 4](https://tailwindcss.com/)
- [TypeScript 5](https://www.typescriptlang.org/)

## Project Structure

```
glyphrun-docs/
├── src/
│   ├── app/              # Next.js App Router
│   ├── content/          # Documentation content (MDX)
│   │   ├── en/           # English content
│   │   └── zh/           # Chinese content
│   ├── components/       # React components
│   ├── hooks/            # Custom React hooks
│   ├── i18n/             # Internationalization
│   └── lib/              # Utilities
├── public/               # Static assets
└── package.json
```

## Content Structure

Documentation follows a 4-tier hierarchy:

1. **Get Started** - Quick start guides
2. **Guides** - Task-oriented tutorials (Users & Creators)
3. **Topics** - Conceptual deep dives
4. **Reference** - API documentation

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Links

- [Glyphrun Platform](https://glyphrun.com)
- [xPay](https://xpay.sh) - Payment infrastructure
- [Discord](https://discord.gg/glyphrun)
- [Twitter](https://x.com/glyphrun)

## License

MIT License - see [LICENSE](./LICENSE) for details.
