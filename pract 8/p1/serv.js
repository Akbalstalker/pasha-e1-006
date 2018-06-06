
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=1a7gwYzQ0kINt8QugeNmQpDMhG3ZmAbn&tag=&rating=G');

xhr.onreadystatechange = () => {
 if (xhr.readyState !== 4) {
  return;
 }

 if (xhr.status !== 200) {
  // console.error('Ошибка при попытке соединения');
  throw new Error('Ошибка при попытке соединения');
 } else {
 	const title = JSON.parse(xhr.responseText).data.title;
 	const image = JSON.parse(xhr.responseText).data.image_original_url;
  
  	const titleElement = document.createElement('h1')
  	const imageElement = new Image()

  	titleElement.innerHTML = title;
  	imageElement.src = image;
  	imageElement.alt = 'GIF Animation'

  		document.body.appendChild(titleElement)
		document.body.appendChild(imageElement)
 }
};

xhr.send();