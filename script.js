async function getData() {
  const url = 'https://imdb236.p.rapidapi.com/api/imdb/india/top-rated-telugu-movies';
  const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'f15a5ea80fmshf307bd7d95cd848p1e4072jsnb82223779508',
		'x-rapidapi-host': 'imdb236.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
  result.forEach(()=> {
    let item=document.createElement('div')
    item.className="item"
  })
} catch (error) {
	  console.error(error);
  }
}
let container=document.getElementById('container')
    let item=document.createElement('div')
    item.className="item"
    
getData()