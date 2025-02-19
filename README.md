# COMP4513 - Assignment1

Node.js App with Supabase and Fly.io

## Description

This project is a backend service built using Node.js and Express with TypeScript. It utilizes Supabase as the database backend and is deployed on Fly.io. This project is for COMP4513 Winter 2025.

## 📚 Getting Started

### Dependencies

Ensure you have the following installed before proceeding:

* Node.js (v16 or later)
* npm or yarn
* TypeScript
* Supabase account and project
* Fly.io account and CLI

### Installing Locally

1. Clone the repository:
   ```sh
   git clone https://github.com/Cynchronized/COMP4513-Assignment1.git
   cd COMP4513-Assignment1
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Configure environment variables:
   * Create a `.env` file in the root directory and add:
   ```sh
   SUPABASE_URL=your_supabase_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

### Deploying to Fly.io

1. Run the development server:
   ```sh
   npm run dev
   ```
2. Set Environment Variables in Fly.io 

3. Deploy to Fly.io:
   ```sh
   flyctl launch
   flyctl deploy
   ```

3. Check the logs for debugging:
   ```sh
   flyctl logs
   ```

## 🤝 Help

Common issues and troubleshooting:

* Ensure your `.env` variables are correctly set.
* If Fly.io deployment fails, run:
   ```sh
   flyctl doctor
   ```
* Check Supabase database connection logs if API requests fail.
* Check Fly.io logs to see deployment issues.

## 🗨️ Authors

Austin Thieu  
[@Cynchronized](https://github.com/Cynchronized)

## 🚀 Cloud Dependencies

* [Supabase](https://supabase.io/)
* [Fly.io](https://fly.io/)

## 📃License

This project is licensed under the MIT License - see the LICENSE.md file for details.
