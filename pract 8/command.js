
const timeEl = document.querySelector('.time');
const listEl = document.querySelector('.list');
const discEl = document.querySelector('.disc');


const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');

xhr.onreadystatechange = () => {
 if (xhr.readyState !== 4) {
  return;
 }

 if (xhr.status !== 200) {
  throw new Error('Ошибка при попытке соединения');
 } else {
  const data = JSON.parse(xhr.responseText);
  const disc = JSON.parse(xhr.responseText).disclaimer;
  const time = JSON.parse(xhr.responseText).time.updated;
  const course = JSON.parse(xhr.responseText).bpi;

  discEl.innerHTML = disc;
  timeEl.innerHTML = time;
  // console.log(data)

  for (key in course) {
    
    const item = document.createElement('Li');
    innerHTML = `1 BTC = ${course[key].rate_float} ${course[key].symbol}`
    listEl.appendChild(item);
  }

  console.log(data);
 }
};

xhr.send();