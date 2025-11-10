# First Flag

First Flag is a beginner-oriented Capture The Flag (CTF) learning platform with guided challenges, tool suggestions, hints, study rooms, live leaderboards, and curated cybersecurity resources—helping newcomers confidently learn ethical hacking from their first flag onward.

Languages: TypeScript (71.8%) · HTML (28.2%)

---

## Table of Contents

- Why First Flag
- Features
- Demo / Screenshots
- Getting Started
  - Prerequisites
  - Install
  - Run (development)
  - Build & Run (production)
- Project structure
- Configuration
- Contributing
- Roadmap
- Security
- License & Acknowledgements
- Contact

---

## Why First Flag

Learning cybersecurity can be intimidating. First Flag focuses on the earliest learning steps by providing:

- Guided, bite-sized challenges that teach fundamental concepts.
- Hints and progressive disclosures so learners can choose how much help they need.
- Tool recommendations and short walkthroughs for common techniques.
- Study rooms and curated resources to deepen learning.
- Live leaderboards to motivate learners through friendly competition.

---

## Features

- Challenge catalog with difficulty tags and categories.
- Guided walkthroughs and optional hints for each challenge.
- Study rooms: topic-based resource collections.
- Leaderboard with scoring and achievements.
- Admin interface for adding and curating challenges (role-based).
- Lightweight, front-end-first implementation in TypeScript + HTML.

---

## Demo / Screenshots

(Replace these placeholders with actual screenshots or a link to a hosted demo.)

- Screenshot: /assets/screenshots/home.png
- Demo: https://your-demo-url.example.com

---

## Getting Started

These instructions will get you a local copy of the project up and running for development and testing purposes.

### Prerequisites

- Node.js (LTS, >= 16 recommended)
- npm or yarn
- (Optional) Docker if you prefer containerized development

### Install

Clone the repository and install dependencies:

```bash
git clone https://github.com/Rolexx90/First-Flag.git
cd First-Flag
npm install
# OR
# yarn
```

### Run (development)

Start the dev server (adjust the command if your project uses a specific toolchain such as Vite, Next, or a custom server):

```bash
npm run dev
# OR
# yarn dev
```

Open http://localhost:3000 (or the port printed in your terminal).

### Build & Run (production)

```bash
npm run build
npm run start
```

If this repository includes a backend service, ensure the backend is running and that environment variables are set (see the [Configuration](#configuration) section).

---

## Project structure

A typical layout (adjust to match the actual repository):

- src/                — TypeScript source code (frontend / shared)
- public/             — Static assets and HTML entry points
- challenges/         — Challenge definitions and assets
- scripts/            — Build and utility scripts
- docs/               — Design notes, contributor docs, and guides
- tests/              — Automated tests
- .env.example        — Example environment variables

---

## Configuration

Copy `.env.example` to `.env` and update values as needed:

```bash
cp .env.example .env
```

Common settings:

- PORT — server port for development/production
- DATABASE_URL — if challenges/leaderboards persist to a DB
- JWT_SECRET or SESSION_SECRET — for auth if applicable

---

## Contributing

Contributions are very welcome! A simple workflow:

1. Fork the repo.
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Implement and test your changes.
4. Open a Pull Request describing your changes.

Guidelines:
- Keep changes focused and small.
- Follow existing TypeScript linting and formatting rules.
- Add or update tests for new behaviors.
- Document public-facing changes in README or docs/.

If you'd like help picking a first issue, look for issues labeled `good first issue` or `help wanted`.

---

## Roadmap

Planned improvements and ideas:

- More beginner-friendly challenge types (web, crypto, forensics).
- Interactive in-browser sandboxes for safe experimentation.
- Guided learning paths and badges.
- Team/room multiplayer modes for instructors.
- Improved analytics to track learner progress.

Contributions and suggestions are welcome — see Issues.

---

## Security

If you discover a security vulnerability, please report it privately by opening an issue with the `security` label or contact the maintainers directly. Do not disclose vulnerabilities publicly until they are fixed.

Be mindful: challenges intentionally include vulnerable code or services. Never expose sensitive production data in challenge materials.

---

## License & Acknowledgements

This project is open source. Add a LICENSE file to set the project license (MIT is common for open-source projects).

Big thanks to the open-source community and the many CTF players and platforms that inspired First Flag.

---

## Contact

Owner / Maintainer: Rolexx90
Repository: https://github.com/Rolexx90/First-Flag

If you need help getting started or want to collaborate, open an issue or reach out through GitHub.
