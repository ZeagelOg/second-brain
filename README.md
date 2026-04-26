# Second Brain App

Built semantic knowledge graph with AI-powered recall across 1000+ linked notes

## About

Built personal knowledge management with bi-directional links, Zettelkasten support and AI semantic search

Implemented vector embedding-based recall surfacing non-obvious note connections with sub-200ms response

Syncs with Obsidian vault via local file watcher and exports to Anki flashcards for spaced repetition review

## Tech Stack

- Next.js
- TypeScript
- OpenAI
- Supabase

## Features

- Production-ready implementation with error handling and logging
- Comprehensive documentation and code comments
- Modular architecture following clean code principles
- CI/CD ready with GitHub Actions workflow included
- Environment-based configuration for dev/staging/prod

## Getting Started

### Prerequisites

- Next.js
- TypeScript
- OpenAI
- Supabase

### Installation

```bash
# Clone the repository
git clone https://github.com/ZeagelOg/second-brain.git
cd second-brain

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with your configuration

# Run the application
npm run dev
```

## Project Structure

```
second-brain/
├── src/                    # Source code
│   ├── components/         # Reusable components
│   ├── utils/              # Utility functions
│   └── config/             # Configuration files
├── tests/                  # Test suite
├── docs/                   # Documentation
├── .env.example            # Environment variable template
├── .github/                # GitHub Actions workflows
│   └── workflows/
│       └── ci.yml
└── README.md
```

## Key Implementation Highlights

1. Built personal knowledge management with bi-directional links, Zettelkasten support and AI semantic search
2. Implemented vector embedding-based recall surfacing non-obvious note connections with sub-200ms response
3. Syncs with Obsidian vault via local file watcher and exports to Anki flashcards for spaced repetition review

## Performance Metrics

- **Accuracy / Quality**: See benchmark results in `docs/benchmarks.md`
- **Latency**: Optimized for production workloads
- **Scalability**: Tested under concurrent load

## Deployment

This project is configured for deployment on **Vercel**.

Detailed deployment instructions are available in `docs/deployment.md`.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License

MIT License — see `LICENSE` for details.

---

*Built with Next.js, TypeScript, OpenAI and 1 more*
