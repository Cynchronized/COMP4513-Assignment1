# COMP4513 - Assignment1

Node.js App with Supabase and Fly.io

## Description

This project is a backend service built using Node.js and Express with TypeScript. It utilizes Supabase as the database backend and is deployed on Fly.io. This project is for COMP4513 Winter 2025.

## 📚 Getting Started

### API Endpoints

| Method | Endpoint | Description |
|--------|---------|-------------|
| GET    | [`/api/eras`](https://comp4513-assignment1.fly.dev/api/eras){:target="_blank"}  | Fetch all eras |
| GET    | [`/api/galleries`](https://comp4513-assignment1.fly.dev/api/galleries){:target="_blank"}  | Fetch all galleries |
| GET    | [`/api/galleries/:id`](https://comp4513-assignment1.fly.dev/api/galleries/30){:target="_blank"}  | Fetch gallery by ID |
| GET    | [`/api/galleries/:id`](https://comp4513-assignment1.fly.dev/api/galleries/Calgary){:target="_blank"}  | Fetch gallery by ID with error |
| GET    | [`/api/galleries/country/:country`](https://comp4513-assignment1.fly.dev/api/galleries/country/fra){:target="_blank"}  | Fetch gallery by country substring |
| GET    | [`/api/artists`](https://comp4513-assignment1.fly.dev/api/artists){:target="_blank"}  | Fetch all artists |
| GET    | [`/api/artists/:id`](https://comp4513-assignment1.fly.dev/api/artists/12){:target="_blank"}  | Fetch artist by ID |
| GET    | [`/api/artists/:id`](https://comp4513-assignment1.fly.dev/api/artists/1223423){:target="_blank"}  | Fetch artist by ID with error |
| GET    | [`/api/artists/search/:lastName`](https://comp4513-assignment1.fly.dev/api/artists/search/ma){:target="_blank"}  | Fetch artist by last name substring |
| GET    | [`/api/artists/search/:lastName`](https://comp4513-assignment1.fly.dev/api/artists/search/mA){:target="_blank"}  | Fetch artist by last name substring |
| GET    | [`/api/artists/country/:country`](https://comp4513-assignment1.fly.dev/api/artists/country/fra){:target="_blank"}  | Fetch artist by country substring |
| GET    | [`/api/paintings`](https://comp4513-assignment1.fly.dev/api/paintings){:target="_blank"}  | Fetch all paintings |
| GET    | [`/api/paintings/sort/:filter`](https://comp4513-assignment1.fly.dev/api/paintings/sort/yearOfWork){:target="_blank"}  | Fetch all paintings sorted by either 'title' or 'yearOfWork' |
| GET    | [`/api/paintings/:id`](https://comp4513-assignment1.fly.dev/api/paintings/63){:target="_blank"}  | Fetch painting by ID |
| GET    | [`/api/paintings/search/:title`](https://comp4513-assignment1.fly.dev/api/paintings/search/port){:target="_blank"}  | Fetch painting by title substring |
| GET    | [`/api/paintings/search/:title`](https://comp4513-assignment1.fly.dev/api/paintings/search/pORt){:target="_blank"}  | Fetch painting by title substring |
| GET    | [`/api/paintings/search/:title`](https://comp4513-assignment1.fly.dev/api/paintings/search/connolly){:target="_blank"}  | Fetch painting by title substring with error |
| GET    | [`/api/paintings/years/:start/:end`](https://comp4513-assignment1.fly.dev/api/paintings/years/1800/1850){:target="_blank"}  | Fetch painting between two years |
| GET    | [`/api/paintings/galleries/:id`](https://comp4513-assignment1.fly.dev/api/paintings/galleries/5){:target="_blank"}  | Fetch all paintings in a gallery by ID |
| GET    | [`/api/paintings/artist/:id`](https://comp4513-assignment1.fly.dev/api/paintings/artist/16){:target="_blank"}  | Fetch all paintings by an artist by ID |
| GET    | [`/api/paintings/artist/country/:country`](https://comp4513-assignment1.fly.dev/api/paintings/artist/country/ital){:target="_blank"}  | Fetch all paintings by an artist by country |
| GET    | [`/api/genres`](https://comp4513-assignment1.fly.dev/api/genres){:target="_blank"}  | Fetch all genres |
| GET    | [`/api/genres/:id`](https://comp4513-assignment1.fly.dev/api/genres/76){:target="_blank"}  | Fetch genre by ID |
| GET    | [`/api/genres/painting/:id`](https://comp4513-assignment1.fly.dev/api/genres/painting/408){:target="_blank"}  | Fetch genres of painting by ID |
| GET    | [`/api/genres/painting/:id`](https://comp4513-assignment1.fly.dev/api/genres/painting/jsdfhg){:target="_blank"}  | Fetch genres of painting by ID with error |
| GET    | [`/api/paintings/genre/:id`](https://comp4513-assignment1.fly.dev/api/paintings/genre/78){:target="_blank"}  | Fetch all paintings by genre ID |
| GET    | [`/api/paintings/era/:id`](https://comp4513-assignment1.fly.dev/api/paintings/era/2){:target="_blank"}  | Fetch all paintings by era ID |
| GET    | [`/api/counts/genres`](https://comp4513-assignment1.fly.dev/api/counts/genres){:target="_blank"}  | Fetch count of paintings by genre |
| GET    | [`/api/counts/topgenres/:minimum`](https://comp4513-assignment1.fly.dev/api/counts/topgenres/20){:target="_blank"}  | Fetch count of paintings for each genre with a minimum number |
| GET    | [`/api/counts/topgenres/:minimum`](https://comp4513-assignment1.fly.dev/api/counts/topgenres/2034958){:target="_blank"}  | Fetch count of paintings for each genre with a minimum number with error|

















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
