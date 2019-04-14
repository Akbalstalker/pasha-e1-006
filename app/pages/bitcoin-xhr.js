const timeEl = document.querySelector('.time');
const listEl = document.querySelector('.list');
const discEl = document.querySelector('.disc');

{
  const request = cb => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.coindesk.com/v1/bpi/currentprice.json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        const { bpi, disclaimer } = data;
        const time = data.time.updated;

        cb({ bpi, disclaimer, time });
      }; 
    }
    xhr.send();
  }

  const render = data => {
    const courses = data.bpi;
    discEl.innerHTML = data.disclaimer;
    timeEl.innerHTML = data.time;

    listEl.innerHTML = '';

    for (const key in courses) {
      const item = document.createElement('li');

      item.innerHTML = `1 BTC = ${Math.round(courses[key].rate_float)} ${courses[key].code} ${courses[key].symbol }`;
      listEl.appendChild(item);
    }
  }

  setInterval(request, 10000, render);
  window.addEventListener('DOMContentLoaded', () => request(render));
}

// {
//   const status = response => {
//     if (response.readyState !== 4 && response.status !== 200) {
//       return Promise.reject(new Error(response.statusText));
//     }
//     return Promise.resolve(response);
//   }

//   const render = data => {
//     const courses = data.bpi;
//     discEl.innerHTML = data.disclaimer;
//     timeEl.innerHTML = data.time;

//     listEl.innerHTML = '';

//     for (const key in courses) {
//       const item = document.createElement('li');

//       item.innerHTML = `1 BTC = ${Math.round(courses[key].rate_float)} ${courses[key].code} ${courses[key].symbol }`;
//       listEl.appendChild(item);
//     }
//   }

//   const request = () => {
//     fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
//       .then(status)
//       .catch(error => console.error('error', error))
//       .then(response => response.json())
//       .catch(error => console.error('error', error))
//       .then(data => ({
//         bpi: data.bpi,
//         disclaimer: data.disclaimer,
//         time: data.time.updated,
//       }))
//       .catch(error => console.error('error', error))
//       .then(data => render(data))
//       .catch(error => console.error('error', error));
//   }

//   setInterval(request, 10000);
//   window.addEventListener('DOMContentLoaded', request);
// }
