# COMP4513 - Assignment1

Node.js App with Supabase and Fly.io

## Description

This project is a backend service built using Node.js and Express with TypeScript. It utilizes Supabase as the database backend and is deployed on Fly.io. This project is for COMP4513 Winter 2025.

## 📚 Getting Started

### API Endpoints

| Method | Endpoint | Description |
|--------|---------|-------------|
| GET    | <a href="https://comp4513-assignment1.fly.dev/api/eras" target="_blank">`/api/eras`</a> | Fetch all eras |
| GET    | <a href="https://comp4513-assignment1.fly.dev/api/galleries" target="_blank">`/api/galleries`</a> | Fetch all galleries |
| GET    | <a href="https://comp4513-assignment1.fly.dev/api/galleries/30" target="_blank">`/api/galleries/:id`</a> | Fetch gallery by ID |
| GET    | <a href="https://comp4513-assignment1.fly.dev/api/galleries/Calgary" target="_blank">`/api/galleries/:id`</a> | Fetch gallery by ID with error |
| GET    | <a href="https://comp4513-assignment1.fly.dev/api/galleries/country/fra" target="_blank">`/api/galleries/country/:country`</a> | Fetch gallery by country substring |
| GET    | <a href="https://comp4513-assignment1.fly.dev/api/artists" target="_blank">`/api/artists`</a> | Fetch all artists |
| GET    | <a href="https://comp4513-assignment1.fly.dev/api/artists/12" target="_blank">`/api/artists/:id`</a> | Fetch artist by ID |
| GET    | <a href="https://comp4513-assignment1.fly.dev/api/artists/1223423" target="_blank">`/api/artists/:id`</a> | Fetch artist by ID with error |
| GET    | <a href="https://comp4513-assignment1.fly.dev/api/artists/search/ma" target="_blank">`/api/artists/search/:lastName`</a> | Fetch artist by last name substring |
| GET    | <a href="https://comp4513-assignment1.fly.dev/api/artists/search/mA" target="_blank">`/api/artists/search/:lastName`</a> | Fetch artist by last name substring |
| GET    | <a href="https://comp4513-assignment1.fly.dev/api/artists/country/fra" target="_blank">`/api/artists/country/:country`</a> | Fetch artist by country substring |
| GET    | <a href="https://comp4513-assignment1.fly.dev/api/paintings" target="_blank">`/api/paintings`</a> | Fetch all paintings |
| GET    | <a href="https://comp4513-assignment1.fly.dev/api/paintings/sort/yearOfWork" target="_blank">`/api/paintings/sort/:filter`</a> | Fetch all paintings sorted by either 'title' or 'yearOfWork' |
| GET    | <a href="https://comp4513-assignment1.fly.dev/api/paintings/63" target="_blank">`/api/paintings/:id`</a> | Fetch painting by ID |
| GET    | <a href="https://comp4513-assignment1.fly.dev/api/paintings/search/port" target="_blank">`/api/paintings/search/:title`</a> | Fetch painting by title substring |
| GET    | <a href="https://comp4513-assignment1.fly.dev/api/paintings/search/pORt" target="_blank">`/api/paintings/search/:title`</a> | Fetch painting by title substring |
| GET    | <a href="https://comp4513-assignment1.fly.dev/api/paintings/search/connolly" target="_blank">`/api/paintings/search/:title`</a> | Fetch painting by title substring with error |
| GET    | <a href="https://comp4513-assignment1.fly.dev/api/paintings/years/1800/1850" target="_blank">`/api/paintings/years/:start/:end`</a> | Fetch painting between two years |
| GET    | <a href="https://comp4513-assignment1.fly.dev/api/paintings/galleries/5" target="_blank">`/api/paintings/galleries/:id`</a> | Fetch all paintings in a gallery by ID |
| GET    | <a href="https://comp4513-assignment1.fly.dev/api/paintings/artist/16" target="_blank">`/api/paintings/artist/:id`</a> | Fetch all paintings by an artist by ID |
| GET    | <a href="https://comp4513-assignment1.fly.dev/api/paintings/artist/country/ital" target="_blank">`/api/paintings/artist/country/:country`</a> | Fetch all paintings by an artist by country |
| GET    | <a href="https://comp4513-assignment1.fly.dev/api/genres" target="_blank">`/api/genres`</a> | Fetch all genres |
| GET    | <a href="https://comp4513-assignment1.fly.dev/api/genres/76" target="_blank">`/api/genres/:id`</a> | Fetch genre by ID |
| GET    | <a href="https://comp4513-assignment1.fly.dev/api/genres/painting/408" target="_blank">`/api/genres/painting/:id`</a> | Fetch genres of painting by ID |
| GET    | <a href="https://comp4513-assignment1.fly.dev/api/genres/painting/jsdfhg" target="_blank">`/api/genres/painting/:id`</a> | Fetch genres of painting by ID with error |
| GET    | <a href="https://comp4513-assignment1.fly.dev/api/paintings/genre/78" target="_blank">`/api/paintings/genre/:id`</a> | Fetch all paintings by genre ID |
| GET    | <a href="https://comp4513-assignment1.fly.dev/api/paintings/era/2" target="_blank">`/api/paintings/era/:id`</a> | Fetch all paintings by era ID |
| GET    | <a href="https://comp4513-assignment1.fly.dev/api/counts/genres" target="_blank">`/api/counts/genres`</a> | Fetch count of paintings by genre |
| GET    | <a href="https://comp4513-assignment1.fly.dev/api/counts/topgenres/20" target="_blank">`/api/counts/topgenres/:minimum`</a> | Fetch count of paintings for each genre with a minimum number |
| GET    | <a href="https://comp4513-assignment1.fly.dev/api/counts/topgenres/2034958" target="_blank">`/api/counts/topgenres/:minimum`</a> | Fetch count of paintings for each genre with a minimum number with error |

















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
