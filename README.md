# ChatBot

ChatBot is a web-based chatbot powered by OpenAI's API, allowing users to ask questions and receive AI-generated responses. The project includes a user-friendly interface with a contact page where users can submit issues or inquiries.

## Features

- **Home Page**: Input field for questions and AI-generated responses.
- **Contact Page**: Allows users to submit queries or report issues.
- **Form Validation**: Uses Regex to ensure proper input formatting.
- **LocalStorage**: Saves submitted contact forms locally.
- **Responsive UI**: Built with Bootstrap and Google Fonts for a sleek design.
- **Icons & Styling**: Font Awesome icons for enhanced visuals.
- **AJAX Requests**: Axios used to fetch responses from OpenAI API.
- **jQuery Enhancements**: Improves interactivity and DOM manipulation.

## Technologies Used

- **HTML, CSS, JavaScript**
- **Bootstrap** (for responsive design)
- **jQuery** (for enhanced interactivity)
- **Axios** (for API requests)
- **Font Awesome & Google Fonts** (for better UI)
- **Regex** (for input validation)
- **LocalStorage** (to save contact form data)

## API Setup

* Get an API key from OpenAI.
* Update the `apiKey` variable in your JavaScript file:

let headers={Authorization: "Bearer (Your_Api_Key)" };

* Ensure you have internet access to make API requests.

## How It Works

- Users can ask questions on the home page, and the OpenAI API generates responses.
- The contact page allows users to report issues, which are stored using LocalStorage.

##  Future Enhancements

* Improve AI response handling.
* Add more features as voicenote, images, videos.
* Add authentication for users.
* Implement backend storage for contact forms.


