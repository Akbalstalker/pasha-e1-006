function response (method,url) {
	
	return new Promise(function(resolve,reject) {
		const xhr = new XMLHttpRequest();
		xhr.open(method,url,true);

		xhr.onload = function () {
			if (this.readyState === 4 && this.status === 200) 
        {resolve(this.responseText)}

        else{const error = new Error(this.statusText);
					error.code = this.status;
					reject(error);
				}
		};
		xhr.onerror = function() {
			reject(new Error ('Network error'))
		};
		xhr.send();
	});
	
}; 

response ('GET', 'https://jsonplaceholder.typicode.com/users')
.then(responseText => {
    const data = JSON.parse(responseText);
    console.log(data);
    return data;
});