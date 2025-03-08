# Node.js TypeScript Server Template

A robust and scalable Node.js server template built with TypeScript, Express, and modern development tools. This template is designed to help you quickly set up a production-ready Node.js server with TypeScript.

---

## Features

- **TypeScript**: Strongly-typed JavaScript for better development experience.
- **Express**: Fast and minimalist web framework for Node.js.
- **Morgan**: HTTP request logging for monitoring incoming requests.
- **Dotenv**: Environment variable management.
- **Nodemon**: Automatic server restart during development.
- **Modular Structure**: Organized folder structure for scalability.
- **Environment Template**: Includes a `.env.example` file for easy setup.

---

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

## Getting Started

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/nodejs-ts-server.git
cd nodejs-ts-server
```

### 2. Install Dependencies

Install the required dependencies:

```bash
npm install
```

### 3. Set Up Environment Variables

Run the setup script to create a `.env` file from the provided `.env.example`:

```bash
npm run setup
```

Open the `.env` file and replace the placeholders with your actual values:

```env
PORT=3000
NODE_ENV=development
```

### 4. Run the Server

Start the server in development mode:

```bash
npm run dev
```

The server will start at `http://localhost:3000`.

---

## Project Structure

```
nodejs-ts-server/
├── src/
│   ├── controllers/       # Route controllers
│   ├── routes/            # Route definitions
│   ├── services/          # Business logic
│   ├── utils/             # Utility functions
│   ├── app.ts             # Express app setup
│   └── server.ts          # Server entry point
├── .env.example           # Environment variables template
├── .env                   # Environment variables (ignored by Git)
├── .gitignore             # Files to ignore in Git
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── nodemon.json           # Nodemon configuration
└── README.md              # Project documentation
```

---

## Available Scripts

- **`npm run dev`**: Start the server in development mode using `nodemon` and `ts-node`.
- **`npm run build`**: Compile TypeScript files to JavaScript in the `dist` folder.
- **`npm start`**: Start the server in production mode using the compiled JavaScript files.
- **`npm run setup`**: Create a `.env` file from `.env.example`.

---

## Adding Routes

To add a new route, follow these steps:

1. Create a new controller in the `src/controllers/` folder.

   ```typescript
   // src/controllers/exampleController.ts
   import { Request, Response } from "express";

   export const getExample = (req: Request, res: Response) => {
     res.json({ message: "This is an example route" });
   };
   ```

2. Define the route in the `src/routes/` folder.

   ```typescript
   // src/routes/exampleRoutes.ts
   import express from "express";
   import { getExample } from "../controllers/exampleController";

   const router = express.Router();

   router.get("/example", getExample);

   export default router;
   ```

3. Register the route in `src/app.ts`.

   ```typescript
   import exampleRoutes from "./routes/exampleRoutes";

   // Add this line after other middleware
   app.use("/api", exampleRoutes);
   ```

Now, the new route will be available at `http://localhost:3000/api/example`.

---

## Environment Variables

The project uses environment variables for configuration. To set up your environment:

1. Rename the `.env.example` file to `.env`:

   ```bash
   cp .env.example .env
   ```

2. Open the `.env` file and replace the placeholders with your actual values:
   ```env
   PORT=3000
   NODE_ENV=development
   ```

The following environment variables are used in this project:

- **`PORT`**: The port on which the server will run (default: `3000`).
- **`NODE_ENV`**: The environment mode (`development` or `production`).

---

## Logging

HTTP request logging is handled by `morgan`. In development mode, logs are printed to the console in the `dev` format. You can customize the logging format or output as needed.

---

## Contributing

Contributions are welcome! If you find a bug or want to add a feature, please open an issue or submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [Express](https://expressjs.com/) for the web framework.
- [TypeScript](https://www.typescriptlang.org/) for adding type safety.
- [Morgan](https://github.com/expressjs/morgan) for HTTP request logging.

---

Enjoy building your Node.js server with TypeScript! 🚀
