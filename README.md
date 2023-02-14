# Filmpire - WP

Deployed application: https://filmpire-wp.netlify.app

## Description

Filmpire is built to be used primarily for searching for films to view. From the main page you are able to view current popualar movies, all time popular movies, upcoming movies, as well as searching for movies via genre. There is functionality to view movie details pages as well as individual pages for actors in the films with links to IMDB and official websites.

There is also functionality to add films to your favorites lists as well as create a watch list. All film data is fetched from the TMDB API (www.tmdb.org) and both favorite and watch lists are pushed to the TMDB database as well so your data can be viewed on the TMDB website.

The application is connected to Alan AI for voice search capabilities. This is however, limited to film titles and movie genres, I hope to expand to more search parameters in the future.

### Primary Technologies Used

React
Redux Toolkit / Axios
Material UI

React was chosen due to a large number similar features that needed to be used. The application contains much repetition of UI features and reusable components considerably reduced production time.

Every page / component of the application used data from the TMDB API and needed routine state/state changes so Redux Toolkit was used to manage state and state changes. Due to the heavy use of API data, Axios was also used to simplify API fetching.

A clean UI was needed for the project and Material UI fit the bill. It's reusability and ease of integration was great for a project created in almost entirely React.

## Installation

To install the application for the first time, please run "npm install --legacy-peer-deps" this will install the necessary dependencies. This project uses WebPack, to start the application, please run "npm start" and open to your localhost:3000.
