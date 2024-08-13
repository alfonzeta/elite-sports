import React, { useState } from 'react';

const FileToHtmlConverter = () => {
    const [file, setFile] = useState(null);
    const [filename, setFilename] = useState('');
    const [downloadLink, setDownloadLink] = useState('');

    const handleFileUpload = (event) => {
        const uploadedFile = event.target.files[0];
        if (uploadedFile) {
            setFile(uploadedFile);
            setFilename(uploadedFile.name); // Save the file name
        }
    };

    const handleFileProcessing = () => {
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const text = e.target.result;
                const { htmlContent, indexHtml, lineCount, longestWord } = processText(text);
                createDownloadableFile(`<p>Number of lines with text: ${lineCount}</p><p>Longest word: ${longestWord}</p>` + indexHtml + htmlContent);
            };
            reader.readAsText(file);
        }
    };

    const processText = (text) => {
        const lines = text.trim().split('\n');
        let htmlContent = '';
        let chapterIndex = [];
        let lineCount = 0;
        let longestWord = '';

        const cleanWord = (word) => word.replace(/[^a-zA-Z]/g, '');

        lines.forEach((line) => {
            line = line.trim();
            if (line.length > 0) {
                lineCount++;
                const words = line.split(/\s+/);
                words.forEach((word) => {
                    const cleanedWord = cleanWord(word);
                    if (cleanedWord.length > longestWord.length) {
                        longestWord = cleanedWord;
                    }
                });

                if (line.startsWith('CHAPTER')) {
                    const chapterId = `chapter-${chapterIndex.length + 1}`;
                    chapterIndex.push({ id: chapterId, title: line });
                    htmlContent += `<h1 id="${chapterId}">${line}</h1>\n`;
                } else {
                    htmlContent += `<p>${line}</p>\n`;
                }
            }
        });

        let indexHtml = '<h1>Index</h1><ul>';
        chapterIndex.forEach((chapter) => {
            indexHtml += `<li><a href="#${chapter.id}">${chapter.title}</a></li>`;
        });
        indexHtml += '</ul>';

        return { htmlContent, indexHtml, lineCount, longestWord };
    };

    const createDownloadableFile = (htmlContent) => {
        const blob = new Blob([htmlContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        setDownloadLink(url);
    };

    return (
        <div>
            <input type="file" accept=".txt" onChange={handleFileUpload} onClick={() => { setFile(null), setDownloadLink(null) }} />
            <button onClick={handleFileProcessing} disabled={!file}>
                Process File
            </button>
            {downloadLink && (
                <a href={downloadLink} download={filename ? filename.replace('.txt', '.html') : 'output.html'}>
                    Download {filename} as HTML File
                </a>
            )}
        </div>
    );
};

export default FileToHtmlConverter;
