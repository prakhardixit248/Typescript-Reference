
// Reverse-mapping
enum OrderStatus {
    Pending = 10,
    InProgress = 11,
    Completed = 12
}

enum MediaTypes {
    JSON = 'application/json'
}

// function callAjax() {
//     $.ajax('http://api.com', {
//         headers: {
//             'Content-Type': MediaTypes.JSON
//         }
//     })
// }

export function basics() {
    console.log('Order Status',
        OrderStatus[10],
        OrderStatus.InProgress);
}