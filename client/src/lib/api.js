function require(method, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) {
                return;
            }
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText));
            }
        }
        xhr.open(method, url);
        xhr.send(null);
    });
}

export default require;