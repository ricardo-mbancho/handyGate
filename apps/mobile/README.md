# HandyGate Mobile

The mobile application for **HandyGate**, a handyman marketplace connecting customers with skilled professionals for home repairs, maintenance, and other services.

Built with [React Native](https://reactnative.dev/), [Expo](https://expo.dev/), and TypeScript.

## Getting Started

### Prerequisites

- Node.js
- pnpm
- Expo Go for testing on a physical device
- Android Studio for Android emulator development

### 1. Install Dependencies

From the root of the HandyGate monorepo, run:

```bash
pnpm install
```

### 2. Start the Mobile App

From the monorepo root:

```bash
pnpm --filter @handyman/mobile start
```

Alternatively, navigate to the mobile app directory:

```bash
cd apps/mobile
pnpm exec expo start
```

### 3. Run the App

After starting Expo, you can run the app on:

- **Expo Go:** Scan the QR code using Expo Go on your phone.
- **Android Emulator:** Start an Android Virtual Device and press `a` in the Expo terminal.
- **iOS Simulator:** Press `i` on macOS with Xcode installed.

If your phone cannot connect over your local network, try tunnel mode:

```bash
pnpm --filter @handyman/mobile exec expo start --tunnel
```

## Development

The mobile app uses Expo Router for file-based navigation.

You can start building features by editing files inside the `app` directory.

Typical marketplace features include:

- Customer registration and authentication
- Handyman profiles and service listings
- Job creation and job discovery
- Offers and bookings
- Messaging and notifications
- Reviews and ratings

## Monorepo Structure

```text
handyGate/
├── apps/
│   ├── web/          # React web application
│   ├── mobile/       # React Native mobile application
│   └── backend/      # Express REST API
├── packages/         # Shared code and utilities
├── package.json
└── pnpm-workspace.yaml
```

## Useful Commands

Run these commands from the monorepo root.

| Command                                                   | Description                    |
| --------------------------------------------------------- | ------------------------------ |
| `pnpm install`                                            | Install workspace dependencies |
| `pnpm --filter @handyman/mobile start`                    | Start Expo                     |
| `pnpm --filter @handyman/mobile exec expo start --tunnel` | Start Expo using a tunnel      |
| `pnpm --filter @handyman/mobile android`                  | Open on Android                |
| `pnpm --filter @handyman/mobile lint`                     | Run linting, if configured     |

## Backend API

The mobile app communicates with the HandyGate backend through REST API endpoints.

During local development, configure the API base URL according to your environment:

- Android emulator: `http://10.0.2.2:3001`
- Physical device: `http://YOUR_COMPUTER_LAN_IP:3001`
- Web development: `http://localhost:3001`

The backend must be running and reachable from the device. Use HTTPS and appropriate environment configuration for production.

## Learn More

- [Expo documentation](https://docs.expo.dev/)
- [Expo Router documentation](https://docs.expo.dev/router/introduction/)
- [React Native documentation](https://reactnative.dev/docs/getting-started)
- [TypeScript documentation](https://www.typescriptlang.org/docs/)

## License

Private project. All rights reserved.
