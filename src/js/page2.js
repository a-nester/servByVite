const BASE_URL = "http://localhost:3000/todos"

// fetch(BASE_URL)
//     .then(response => {
//         if (!response.ok) {
//         return new Error(response.status)
//         }
//         return response.json()
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log(error))

// fetch(BASE_URL, {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ title: "Buy a milk", completed: false })
// })
//     .then(response => {
//         if (!response) {
//         throw new Error(response.status)
//         }
//         return response.json()
//     })
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// fetch(`${BASE_URL}/6a72`, {
//     method: "PATCH",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ completed: true})
// })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(response.status)
//         }
//         return response.json()
//     })
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// fetch(`${BASE_URL}/6a72`, {
//     method: "PUT",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ completed: true})
// })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(response.status)
//         }
//         return response.json()
//     })
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// fetch(`${BASE_URL}/6a72`, {
//     method: "DELETE"
// })
//     .then(response => {
//         if (!response.ok) {
//         throw new Error(response.status)
//         }
//         return response.json()
//     })
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
