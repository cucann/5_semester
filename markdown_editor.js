document.addEventListener("DOMContentLoaded", () => {
    const editor = document.getElementById("editor");
    const preview = document.getElementById("preview");

    editor.addEventListener("input", () => {
        try {
            const markdownText = editor.value;
            preview.innerHTML = markdownToHTML(markdownText);
        } catch (error) {
            preview.innerHTML = "<p style='color:red;'>Ошибка в обработке Markdown.</p>";
            console.error("Ошибка в редакторе Markdown:", error);
        }
    });

    function markdownToHTML(text) {
        return text
            .replace(/#/g, '<h1>')
            .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>') 
            .replace(/\*(.*?)\*/g, '<i>$1</i>'); 
    }
});
