const button = document.querySelector('button');
const container = document.querySelector('div');

const getResidents = () => {
    container.innerHTML = '';
    axios.get('https://swapi.dev/api/planets/2')
    .then(res => { for(let i = 0; i < res.data.residents.length; i++) {
        axios.get(`${res.data.residents[i]}`)
            .then(response => {
                    console.log(response.data.name)
                    const para = document.createElement('h2');
                    para.textContent = response.data.name;
                    // document.body.appendChild(para);
                    container.append(para);
                }
            )}
            });
}


button.addEventListener('click', getResidents);