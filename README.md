# PromptGuard

A simple browser extension that tries to help protect your personal data while chatting with ChatGPT and other AI platforms.

## What it does

When you type a message in ChatGPT, PromptGuard attempts to detect sensitive information like email addresses, phone numbers, and names, and replaces them with placeholders before your message is sent. The original values are restored visually in the chat so you can still read your conversation naturally.

## Features

- Detects common PII types: emails, phone numbers, credit cards, SSNs, IP addresses, names, locations, and organizations
- Replaces detected values with placeholders (e.g., `[EMAIL_1]`, `[NAME_1]`)
- Shows original values as green badges in the chat
- Allows excluding specific values from detection
- Scoped per chat session

## How it works

**Before sending:**
```
Your message: "My name is John Smith, email me at john@example.com"
Sent to ChatGPT: "My name is [NAME_1], email me at [EMAIL_1]"
```

**In responses:**
Placeholders appear as clickable green badges showing the original value.

## Installation

1. Clone this repository
2. Run `npm install`
3. Run `npm run build`
4. Load `dist/chrome` or `dist/firefox` as an unpacked extension in your browser

## Development

```bash
npm install
npm run dev          # Watch mode
npm run build        # Production build
npm test             # Run tests
npm run prettify     # Check formatting
npm run prettify:fix # Fix formatting
npm run lint         # Lint code
npm run lint:fix     # Fix lint errors
```

## Acknowledgments

This project relies heavily on [Compromise.js](https://github.com/spencermountain/compromise) for natural language processing. A big thank you to Spencer Kelly and all the contributors for building such an accessible and powerful NLP library that made this extension possible.

## License

MIT
