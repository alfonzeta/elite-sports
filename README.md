File to HTML Converter
======================

Overview
--------

**File to HTML Converter** is a React-based web application that allows users to upload a `.txt` file and convert its content into a downloadable HTML file. The application processes the text to create an HTML file that includes an index of chapters (identified by lines starting with "CHAPTER"), counts the number of lines, and identifies the longest word in the file. The resulting HTML can be downloaded directly from the application.

Features
--------

-   Upload a `.txt` file from your local machine.
-   Convert the text file into an HTML file with:
    -   Chapter headings as `<h1>` elements.
    -   Paragraphs as `<p>` elements.
    -   An index of chapters with links.
    -   A summary including the number of lines and the longest word.
-   Download the processed HTML file.

Technologies Used
-----------------

-   **React**: JavaScript library for building user interfaces.
-   **JavaScript (ES6+)**: For handling file reading and processing.
-   **HTML/CSS**: For rendering and styling the user interface.

Usage
-----

1.  **Upload a `.txt` file**:

    -   Click on the "Choose File" button to select a `.txt` file from your local machine.
2.  **Process the file**:

    -   Click the "Process File" button to start converting the text file into an HTML format.
3.  **Download the HTML file**:

    -   Once processing is complete, a download link will appear. Click on the link to download the HTML file.

Code Structure
--------------

-   `App.js`: Main component that renders the application UI and handles date formatting.
-   `FileToHtmlConverter.js`: Component responsible for file upload, processing the file content, and generating the HTML output.
-   `App.css`: Styles for the application.

File Processing Details
-----------------------

-   **Text Processing**:

    -   Lines starting with "CHAPTER" are treated as chapter titles and are converted to `<h1>` elements.
    -   Other lines are converted into `<p>` elements.
    -   An index of chapters is created with links to each chapter.
-   **HTML Generation**:

    -   The processed text is combined with an index and summary (line count and longest word) to generate the final HTML content.
    -   The HTML file is created as a Blob and provided for download.

