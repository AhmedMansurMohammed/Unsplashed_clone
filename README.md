# Unsplash Clone Project

This project is a clone of the Unsplash website, showcasing a grid of images fetched from the Unsplash API. It serves as an educational exercise to practice building a responsive image grid using React and integrating with an external API.

## Features

- **Image Grid**: Display a responsive grid of images fetched from the Unsplash API.
- **API Integration**: Use the Unsplash API to fetch random images for display.
- **Dynamic Content**: Use React's `useState` and `useEffect` hooks to dynamically update the image grid based on API responses.
- **Styling with Tailwind CSS**: Apply responsive styling to the image grid using Tailwind CSS classes.
- **Unique Keys**: Assign unique keys to each image in the grid to optimize rendering performance.
- **Alt Text**: Provide meaningful `alt` text for each image for accessibility.
- **Environmental Variables**: Store sensitive information like the Unsplash API access key as environment variables.
- **Responsive Design**: Ensure the image grid adapts to different screen sizes using responsive CSS classes.

## Usage

1. Clone the repository to your local machine.
2. Install dependencies using `npm install`.
3. Rename the `.env.example` file to `.env` and replace `YOUR_UNSPLASH_ACCESS_KEY` with your actual Unsplash API access key.
4. Run the app using `npm start`.

## Dependencies

- React: A JavaScript library for building user interfaces.
- axios: A promise-based HTTP client for making API requests.
- Tailwind CSS: A utility-first CSS framework for responsive styling.

## Credits

- This project was inspired by the Unsplash website (https://unsplash.com/).
- Unsplash API (https://unsplash.com/developers) is used to fetch random images for display.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
