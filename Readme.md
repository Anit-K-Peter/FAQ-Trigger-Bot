# SA-MP Server FAQ Bot

## Introduction

This Discord bot provides instant answers to frequently asked questions (FAQs) related to joining and playing on an SA-MP (San Andreas Multiplayer) server. It listens for specific keywords in designated channels and responds with pre-defined answers stored in a `faq.json` file.

## Features

- **Instant Answers**: Responds quickly to FAQs without needing human intervention.
- **Dynamic Command Handling**: Supports dynamic loading of commands stored in the `commands` folder.
- **Customizable FAQ**: Easily add, modify, or remove FAQs by editing the `faq.json` file.
- **Monitor Channel**: Monitors a specified channel for user queries to provide relevant responses.

## Getting Started

To use the bot in your Discord server, follow these steps:

### Prerequisites

- Node.js installed on your system ([Download Node.js](https://nodejs.org/))

### Configuration

1. Create a `config.js` file in the root directory based on `config.example.js`.

2. Add your Discord bot token and monitor channel ID to `config.js`.

### Usage

1. Interact with the bot in your Discord server:

   - Use the `!quest [question] [answer]` command to add new FAQ entries.
   - The bot will monitor the specified channel for questions and respond with pre-defined answers from `faq.json`.

### Example

To add a new FAQ entry, use the following command in your Discord server:

```
!quest How do I connect to the server? Use the IP address and port provided in the server information.
```

## Contributing

Contributions are welcome! If you have suggestions, improvements, or new features to propose, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---