# iTunes Search Application

## Description

The iTunes Search Application is a web application that allows users to search for music tracks using the iTunes API. Users can search for music by entering a search term and can view the results, which include track details and cover art. The application also allows users to add tracks to their favorites list, which is persisted locally.

## Purpose

The purpose of this application is to provide a simple and intuitive interface for searching and exploring music tracks available on iTunes. By leveraging the iTunes API, the application offers users the ability to discover new music and manage their favorite tracks.

## Key Features

- **Search Functionality**: Allows users to search for music tracks by entering a search term.
- **Track Details**: Displays detailed information about each track, including track name, artist name, release date, and cover art.
- **Favorites Management**: Users can add tracks to their favorites list and view them in a separate favorites page. The favorites list is persisted locally using `localStorage`.
- **JWT Authentication**: Secures API requests with JWT authentication to ensure that only authorized requests are processed.

## Installation and Setup

### Prerequisites

- Node.js (version 12 or later)
- npm (Node Package Manager)

### Backend Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/itunes-search-app.git
   cd itunes-search-app/backend

   ```

2. **Install Dependences both frontend and Backend**

   cd Backend , npm install to install backend node modules
   cd front , npm install to install frontend node modules

3. **Start the Backend Server and start the frontend development server**

   d Backend , npm start
   The backend server will launch and run on Port 500

   cd frontend , npm start
   The front end development will start and launch in your default browser on Port 3000

### Running the application

    You can now use the application if you have reached this stage.

1. **Application Functions**

   You will be launched on the Welome page which has a continue button .
   Clicking on the continue button will redirect you to the search page named Home

2. **Home Page navigation**

   On the home page there will be a seach bar and a search button.
   Enter the name of the song/artist you would like to search and click the search button

   Additionally at the top of the Home page you will see a minimalistic navbar with two buttons to the far left and right.
   Those two buttons are used to navigate between all 3 components of the application.

3. **Search Results**

   When you search the results will be displayed below the search button

   In most cases it will display multiple Data that match your search words
   Each instance of the results will display its own artwork image , song title , artists of the song may include producer and date of release.

   To the right of the result will be a button that says add to favourites , clicking that button will add that specific result to the favourites page where it will display as part of a list of all your favourites.
   Upon adding you will also get a notification that it has been added to favourite.

4. **Favourites Page**

   When you navigate to the favourites page you will notice the nav bar as in the home page

   Each song added will look similar to how it is displayed in the Home page only difference being instead of having a "add to favourites" button we now have a button that says "remove from favourites" which removes the song added to favourites from favourites.

5. **User Data**

   None of the users data is store after the session has ended , all the data is only stored for the session as soon as the session ends the data is deleted.
