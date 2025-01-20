# DeCleanup Network Litepaper

## Introduction

DeCleanup Network is a global initiative dedicated to fostering environmental cleanups through community-driven efforts and innovative blockchain technology. The network incentivizes real-world impact by tokenizing cleanup activities and providing measurable rewards. Our mission is to expand global participation in environmental actions while creating a transparent, scalable, and eco-conscious community.

## Purpose

The purpose of the DeCleanup Network is to:

- Create a scalable and transparent system that encourages consistent environmental cleanup action.
- Leverage blockchain technology to verify, tokenize, and incentivize real-world impact.

## Concepts

- **Proof of Impact (PoI)**: Verified evidence of cleanup activities through geotagged photos or videos + decentralized community validation.
- **Dynamic Impact Products (dIPs)**: Tokenized RWI in the form of on-chain commodities utilizing NFT technology with traits that evolve based on user contributions and milestones.
- **$DCU Utility Token**: Utility token used for rewards, staking, and incentivized actions.
- **Impact Circles**: Collaborative group cleanups that boost coordination and amplify collective environmental impact.

## Web3 Pillars Supporting the Solution

- **Security**:
  - Protects cleanup data and transactions with cryptographic proofs, ensuring users' submissions and rewards remain tamper-proof.

- **Trustless Operations**:
  - Allows participants to submit and validate cleanup proof without intermediaries, fostering transparency and efficiency.

- **Transparency**:
  - Immutable blockchain records provide public visibility into the cleanup activities and their impact.

- **Scalability**:
  - Modular architecture ensures seamless support for a growing user base and expanding initiatives.

- **Interoperability**:
  - Enables the platform to connect with various blockchain ecosystems, ensuring global accessibility and usability.

- **Decentralization**:
  - Empowers communities by removing single points of failure, ensuring continuous availability, and supporting multiple languages.

## Features

### Dynamic Rewards:

- **DCU Token**: ERC20 token minted as a reward for confirmed cleanups.
- **Dynamic Impact Products (dIPs)**: NFTs with evolving traits and levels.
- **POAP**: Optional participation rewards for cleanups and Impact Circles.

#### Data type for dIP extends basic NFT schema:

- **Constant traits**:
  - Type: "dynamic impact product"
  - Impact: "environmental"
  - Category: "tokenized cleanups"
- **Dynamic traits**:
  - dcuSum: number # amount of DCU tokens earned by user
  - Impact: number # represent the impact lever by number
  - Title : string # label for impact: newbie, pro, hero

Each confirmed submission updates the dIP's dynamic traits. Visual traits such as images evolve across 10 levels, with a planned system for expanding beyond these levels to accommodate more milestones.

## User Capabilities

- Submit proof of cleanup.
- View leaderboard and track progress.
- Create and manage Impact Circles.
- Invite others to join Impact Circles.
- Refer new users to the DCU ecosystem.
- Confirm DCU submissions (for users with access).

## System Capabilities

- Accept user DCU submissions in NFT mint format.
- Index on-chain data to build and maintain leaderboard metrics.

## General Process in DCU

1. **Connect Wallet**: Users must connect their blockchain wallet to the platform to track their activities and rewards on the dashboard.
2. **Submit Proof of Impact (PoI)**: Click the "Tokenize Your Cleanup Impact" button and upload before and after photos showing the cleanup area and waste collected. Ensure geotags and timestamps are embedded in the image metadata.
3. **Verification**: Submitted proof is sent to the Verification Page, where verifiers evaluate the submission for authenticity and impact. It takes three votes initially to approve or reject a submission. As the platform scales, this may increase to up to ten votes.
4. **Get Dynamic Impact Product (dIP)**: Once verified, users receive a dIP of a certain level with specific Impact Value (IV) and DCU Points. These grow with each cleanup submission and level gained.

## Impact Circles

Collaborative cleanup campaigns where multiple users contribute to a shared initiative. Impact Circles are managed by a leader and allow for larger-scale environmental impact.

### Features

- Leaders organize and manage Impact Circles.
- Participants contribute cleanup efforts and share rewards proportionally.
- Amplifies the scale and visibility of environmental impact.

## Requirements

### Functional Requirements

**Contracts**

- **Token for DCU Submission Reward**: ERC20 compatible, allowing use across other dApps. Unlimited total supply, minted on demand during reward transactions. Total minted supply can later determine the capped total supply for future $DCU tokens.
- **NFT Dynamic Impact Product (DIP)**: Soulbound NFT with dynamic traits to reflect user impact. Stores data using the NFT standard schema. Transfer can be initiated upon request (e.g., account migration).
- **NFT Cleanup Contract**: Factory contract to manage cleanups. Deploys contracts for solo and group cleanups (Impact Circles). Metadata includes before/after photos, geotags, timestamps, and extended schemas (e.g., name, description).
- **DCU Rewards Contract**: Distributes rewards after DCU submission is confirmed. Has access roles for minting and interacts with other contracts. Updates traits in DIP on each confirmed DCU submission, either on-chain (ERC7496) or through backend updates of metadata and CID.

### Backend

**Tech Stack**:

- TypeScript Express server with Prisma schema.
- Indexer to build leaderboard metrics.
- Single endpoint to add transaction hashes for DCU submission confirmation, triggering the leaderboard builder.

### Web Client

**Tech Stack**:

- React/Next.js + Tailwind CSS + shadcn.

**Features**:

- **Landing Page**: Includes general information and navigation.
- **Header/Footer**: Persistent components for navigation.
- **Profile Page**: Displays user information and submission history.
- **Leaderboard**: Paginated table (25 per page) displaying ranked DCU profiles.
- **New DCU Submission Form**: For users to submit cleanup proof.
- **DCU Submission Page**: Dedicated page for individual submissions.
- **New Impact Circle Form**: Form to create a new Impact Circle.
- **Impact Circle Page**: Manages and displays group cleanup activities.
- **Approval List**: Restricted-access page for moderators to view and approve pending DCU submissions, including a button to send transactions.
- **Web3 Wallet Integration**: Users authenticate via SIWE (Sign-In with Ethereum) using popular wallets.

### Non-Functional Requirements

- **Good Uptime**: Ensure system availability for uninterrupted user access.
- **Bug Reporting System**: Provide a clear mechanism for users to report issues.
- **Logging**: Implement robust logging for debugging and tracking activities.
- **Health Checks**: Regular system health checks to monitor performance.
- **Maintainability**: Write modular and clean code to ease updates and improvements.
- **Quality Assurance (QA)**: Comprehensive testing to ensure reliability and usability.
- **CI/CD**: Continuous integration and delivery pipelines to streamline deployment.
