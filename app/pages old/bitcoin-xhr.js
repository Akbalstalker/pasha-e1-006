const timeEl = document.querySelector('.time');
const listEl = document.querySelector('.list');
const discEl = document.querySelector('.disc');


setInterval (function() {

	const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
xhr.onreadystatechange = () => {
 if (xhr.readyState === 4 && xhr.status === 200) {
  const data = JSON.parse(xhr.responseText);
  console.log(data)
  const disc = data.disclaimer;
  console.log(disc)
  const time = data.time.updated;
  console.log(time)
  const courses = data.bpi;
  console.log(courses)

  discEl.innerHTML = disc;
  timeEl.innerHTML = time;

  for (const key in courses) {
    const item = document.createElement('li');

    item.innerHTML = `1 BTC = ${Math.round(courses[key].rate_float)} ${courses[key].symbol}`;
    listEl.appendChild(item);
  }

  // console.log(data);
 }
};
xhr.send();
},10000);

