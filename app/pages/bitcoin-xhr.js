const timeEl = document.querySelector('.time');
const listEl = document.querySelector('.list');
const discEl = document.querySelector('.disc');

const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');

xhr.onreadystatechange = () => {
 if (xhr.readyState === 4 && xhr.status === 200) {
  const data = JSON.parse(xhr.responseText);
  const disc = data.disclaimer;
  const time = data.time.updated;
  const courses = data.bpi;

  // console.log(data);

  discEl.innerHTML = disc;
  timeEl.innerHTML = time;

  for (const key in courses) {
    const item = document.createElement('li');
    item.innerHTML = `1 BTC = ${courses[key].rate_float} ${courses[key].symbol}`;
    listEl.appendChild(item);
  }

  // console.log(data);
 }
};

xhr.send();