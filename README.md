# Cat Facts API

A modern RESTful API built with TypeScript and Express that serves interesting cat facts. This project uses Drizzle ORM for database management and includes features like CORS support and input validation with Zod.

## Features

- **Automated Cat Fact Fetching**: Automatically fetch cat facts from external API (catfact.ninja)
- **Data Validation**: Strong type checking and validation using Zod schema
- **RESTful Endpoints**:
  - `POST /api/cats/fetch`: Fetch and store a new cat fact
  - `POST /api/cats`: Create a new cat fact manually
  - Data validation for all inputs
- **Database Integration**: Persistent storage using SQLite with Drizzle ORM
- **Error Handling**: Comprehensive error handling with meaningful messages
- **Type Safety**: Full TypeScript implementation for better development experience
- **CORS Enabled**: Ready for cross-origin requests
- **Input Sanitization**: Validates and sanitizes all incoming data

## Technologies Used

- **TypeScript**: For type-safe code
- **Express.js**: Web framework
- **Drizzle ORM**: SQL toolkit and ORM
- **SQLite**: Database
- **Zod**: Runtime type checking and validation
- **Axios**: HTTP client for external requests
- **CORS**: Cross-Origin Resource Sharing support

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/samhithadwarakanath/Cats-facts.git
   cd Cats-facts
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables:
   Create a `.env` file in the root directory and add necessary configurations.

## Usage

To start the server:

```bash
npm start
```

The API will be available at `http://localhost:3000`.

## API Endpoints

### Cats Routes
Available at `/api/cats`

## Development

1. Run in development mode:
   ```bash
   npm run dev
   ```

2. Build the project:
   ```bash
   npm run build
   ```

## License

ISC

## Author

Samhitha Dwarakanath