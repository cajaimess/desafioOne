

document.getElementById('encrypt-btn').addEventListener('click', () => {
    let inputText = document.getElementById('input-text').value;
    document.getElementById('output-text').innerText = encrypt(inputText);
});

document.getElementById('decrypt-btn').addEventListener('click', () => {
    let inputText = document.getElementById('input-text').value;
    document.getElementById('output-text').innerText = decrypt(inputText);
});

document.getElementById('copy-btn').addEventListener('click', () => {
    let outputText = document.getElementById('output-text').innerText;
    navigator.clipboard.writeText(outputText);
    alert('Texto copiado al portapapeles');
});

function encrypt(text) {
    return text
        .replace(/a/g, 'ai')
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function decrypt(text) {
    return text
        .replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}
