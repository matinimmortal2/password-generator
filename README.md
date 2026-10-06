🔐 Password Generator

A simple, clean, and responsive password generator built with HTML5, CSS3, and JavaScript.

The application allows users to generate random passwords with customizable length and character types, including uppercase letters, numbers, and special characters. It also provides a convenient one-click copy feature.

✨ Features

- Custom Password Length: Generate passwords from 1 to 50 characters
- Lowercase Letters: Always included in generated passwords
- Uppercase Letters: Optional uppercase character support
- Numbers: Optional numbers
- Special Characters: Optional special characters
- One-Click Copy: Copy the generated password directly to the clipboard
- Input Validation: Validates password length before generation
- Responsive Design: Works well on different screen sizes
- Clean UI: Simple and user-friendly interface
- No Dependencies: Built with pure HTML, CSS, and JavaScript

🚀 Getting Started

Prerequisites

- A modern web browser such as:
  - Chrome
  - Firefox
  - Edge
  - Safari
- No server required
- No external libraries or dependencies

Installation

1. Clone or download this repository.
2. Open the project folder.
3. Open:

Passwordgeneratir.html

in your web browser.

4. That's it! The application is ready to use.

📁 File Structure

password-generator/
│
├── Passwordgeneratir.html    # Main HTML file
├── Passwordgenerator.css     # Styles and responsive design
├── Passwordgenerator.js      # Password generation logic
└── README.md                 # Project documentation

🎨 Design Features

The application uses a clean and minimal interface designed to keep the password generation process simple and easy to understand.

User Interface

- Clean card-based layout
- Centered password generator
- Simple input controls
- Clear buttons and labels
- Responsive layout
- User-friendly validation messages

Password Options

Users can choose which character types should be included:

- Lowercase letters
- Uppercase letters
- Numbers
- Special characters

Lowercase letters are included by default.

🔧 Technologies Used

- HTML5: Structure and form elements
- CSS3: Styling, layout, responsive design, and animations
- JavaScript (ES6+): Password generation and DOM manipulation
- Clipboard API: Copy generated passwords to the clipboard

📖 Usage

1. Enter Password Length

Enter the desired password length in the input field.

The application accepts values between 1 and 50 characters.

2. Select Character Types

Choose the character types you want to include:

- Uppercase letters
- Numbers
- Special characters

Lowercase letters are included automatically.

3. Generate Password

Click the Generate button.

The application creates a random password based on your selected options.

4. Copy Password

Click the Copy button to copy the generated password to your clipboard.

The button temporarily changes to indicate that the password has been copied.

⚙️ How It Works

The password generator builds a character pool based on the user's selections.

Default Characters

Lowercase letters are always included:

abcdefghijklmnopqrstuvwxyz

Optional Characters

If selected, the application adds:

ABCDEFGHIJKLMNOPQRSTUVWXYZ

Numbers:

1234567890

Special characters:

!@#$%^&*()_+:{}?><.,/';

The application then randomly selects characters from the final character pool until the requested password length is reached.

🔒 Password Generation

The password is generated entirely in the browser using JavaScript.

No passwords are sent to a server or stored online.

The application uses JavaScript's "Math.random()" function to randomly select characters from the available character set.

«Note: This project is intended for learning and demonstration purposes. It should not be considered a cryptographically secure password generator for highly sensitive accounts.»

🖼️ Screenshot

Add a screenshot of the application below:

<img src="./screenshot.png" alt="Password Generator Screenshot" width="500">📱 Responsive Design

The application is designed to work across different screen sizes:

- Desktop: Full-width centered layout
- Tablet: Adapted spacing and sizing
- Mobile: Optimized layout for smaller screens

🧪 Validation

The application validates the password length before generating a password.

Invalid values include:

- Empty input
- "0"
- Negative numbers
- Numbers greater than "50"

When an invalid value is entered, the application displays an appropriate error message instead of generating a password.

📋 Clipboard Functionality

The application uses the browser's Clipboard API to copy the generated password.

After successfully clicking the Copy button, the button temporarily changes its text to:

copied!

and returns to:

copy

after a short delay.

🎯 What I Practiced

This project was created as a practical JavaScript project to review and improve my frontend development skills.

While building this project, I practiced:

- DOM Manipulation
- "getElementById()"
- Event Listeners
- Input Handling
- Checkbox ".checked"
- Input ".value"
- Conditional Statements
- "for" Loops
- String Manipulation
- "Math.random()"
- "Math.floor()"
- Functions and Variables
- Clipboard API
- "setTimeout()"
- Basic Input Validation

🔮 Future Enhancements

Potential improvements for future versions:

- [ ] Add password strength indicator
- [ ] Add password history
- [ ] Add advanced password customization
- [ ] Add dark/light mode
- [ ] Add stronger random generation using the Web Crypto API
- [ ] Improve accessibility
- [ ] Add more UI animations
- [ ] Add a password regeneration button

🌐 Browser Support

The application works with modern browsers that support standard HTML, CSS, and JavaScript features.

- ✅ Chrome
- ✅ Firefox
- ✅ Edge
- ✅ Safari
- ✅ Mobile browsers

🐛 Known Limitations

- Password generation uses "Math.random()", which is not intended for cryptographic security.
- The application runs entirely on the client side.
- Clipboard functionality requires browser support for the Clipboard API.

📄 License

This project is open source and available for educational purposes.

👨‍💻 Author

Matin

This project was created as part of my journey to improve my JavaScript and web development skills.

---

⭐ If you find this project useful, feel free to explore the code and improve it.

Built with ❤️ using HTML, CSS & JavaScript.
