
const tempEl = document.querySelector('.temp');
const pressureEl = document.querySelector('.pressure');
const summaryEl = document.querySelector('.summary');


const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.darksky.net/forecast/c5a99aecf0c41ad9acf88a818b1c2aa5/47.897189,S35.203143?lang=ru&units=si');

xhr.onreadystatechange = () => {
 if (xhr.readyState !== 4) {
  return;
 }

 if (xhr.status !== 200) {
  throw new Error('Ошибка при попытке соединения');
 } else {
  const data = JSON.parse(xhr.responseText);
  console.log(data);
  const temp = data.apparentTemperature;
  const pressure = data.pressure;
  const summary = data.summary;

  tempEl.innerHTML = temp;
  pressureEl.innerHTML = pressure;
  summaryEl.innerHTML = summary;
  
 }
};

xhr.send();