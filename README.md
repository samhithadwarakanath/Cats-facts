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

## Screenshots

<img width="840" height="65" alt="API running" src="https://github.com/user-attachments/assets/00458ad8-3e91-4ff6-9c3e-c0bde5e74856" />

CRUD Terminal:

<img width="844" height="389" alt="crud terminal" src="https://github.com/user-attachments/assets/7ab1ba61-de16-49e2-9012-9d6ce9b96dd7" />


POSTMAN TESTING:

<img width="850" height="686" alt="postman 1" src="https://github.com/user-attachments/assets/7d9a67f8-0dac-4a6a-ae9a-c1f0dc554c0c" />


<img width="900" height="746" alt="postman2" src="https://github.com/user-attachments/assets/0af480a1-b996-43bc-b2f2-4c3fca2e0ddb" />

<img width="900" height="751" alt="postman3" src="https://github.com/user-attachments/assets/51c7f509-469d-4448-a842-b486e733830e" />


<img width="857" height="749" alt="postman4" src="https://github.com/user-attachments/assets/b15fabf5-28fb-41c0-9377-0348fc5647f8" />

<img width="856" height="752" alt="postman5" src="https://github.com/user-attachments/assets/3b69c734-ecbf-4b9b-a753-0a7d0cbbc2b3" />

<img width="858" height="747" alt="postman6" src="https://github.com/user-attachments/assets/076b2dc1-bdb1-47c9-8900-3905839fb61e" />

<img width="859" height="751" alt="postman7" src="https://github.com/user-attachments/assets/e6bf5973-292c-4de1-9c3c-25a2b2978968" />

<img width="857" height="747" alt="postman8" src="https://github.com/user-attachments/assets/337cdc11-ae80-4b6c-8d0e-b5f7e462e2ba" />

BONUS:

<img width="900" height="750" alt="postman9" src="https://github.com/user-attachments/assets/94a24480-7d8b-4aa3-a7d3-4cb6384807ef" />

<img width="813" height="750" alt="postman10" src="https://github.com/user-attachments/assets/2407f9f0-9de8-48d7-985e-80085a502415" />


<img width="814" height="722" alt="postman11" src="https://github.com/user-attachments/assets/c49b3933-9a16-4976-a8f9-0423acd21664" />

<img width="900" height="751" alt="postman12" src="https://github.com/user-attachments/assets/17156199-34b2-4cbf-9bfc-80d771b53fed" />

<img width="899" height="750" alt="postman13" src="https://github.com/user-attachments/assets/8f367975-de03-43c7-b218-3f6684dd647f" />



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
