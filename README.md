# Online Bookstore Project

## Project Overview

TypeScript와 Node.js를 사용하여 구축한 간단한 온라인 서점입니다. 이 프로젝트에는 도서 목록, 검색 기능(제목 및 저자별), 페이지네이션, 각 도서에 대한 상세 페이지가 포함되어 있습니다. Axios를 통해 클라이언트와 백엔드가 통신합니다. 백엔드는 Express 사용하여 구현되며 임시로 DB는 구현하지 않았습니다.

## Demo

- 메인 페이지에서는 서버의 mockData를 받아와 책 목록을 렌더링하며, 페이지네이션 기능을 제공합니다.

![페이지네이션](https://github.com/user-attachments/assets/55406376-94b2-4fa3-ac5a-cfbc4371aaa9)

- 메인 페이지에서 책 검색 기능으로 필터링이 가능하며 특정 목록의 상세 페이지로 이동 가능합니다.

![책 검색 후 상세 페이지](https://github.com/user-attachments/assets/b06ddda2-268e-4b8d-8d38-d64c3f193917)

- 새로운 책을 목록에 추가하는 기능은 DB없이 임시로 서버와 통신 후 로컬스토리지에 저장되도록 구현해 놓았습니다.

![책 추가 (임시)](https://github.com/user-attachments/assets/091cd8a0-cf62-4676-8a61-12d352e0ae83)

---

## Installation and Usage

### Client-Side Commands

To set up and run the client side:

```bash
# Navigate to the client directory
cd client

# Install dependencies
npm install

# Start the development server
npm start

# Build the application for production
npm run build

# Run tests
npm test
```

### Server-Side Commands

To set up and run the server side:

```bash
# Navigate to the server directory
cd server

# Install dependencies
npm install

# Start the development server with hot-reloading
npm run dev

# Compile TypeScript into JavaScript
npm run build

# Start the production server
npm start
```
