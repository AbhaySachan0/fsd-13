
const container = document.getElementById('container')
console.log(container);
const button = document.getElementById('btn')
console.log(button);
const h2 = document.getElementById('data')

async function fetchData() {
    try {
        const serverData = await (await fetch('https://fakestoreapi.com/products')).json()
        // console.log(serverData[0]);
        
        let table = ` <table border=2px>
            ${
                serverData.map((ele) => (
                    `<tr>
                    <td>
                    <img src=${ele.image} height=200px width=200px></img>
                    </td>
                    <td>${ele.title}</td>
                    <td>$${ele.price}</td>
                    <td>${ele.description}</td>
                    
                    </tr>`
                ))
            }
        </table> `
        h2.innerHTML = table
        
    } catch (e) {
        console.log("Error:", e);
        
    }
}
button.addEventListener('click', fetchData)