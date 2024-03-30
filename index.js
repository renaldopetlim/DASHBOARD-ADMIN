Orders.forEach(order => {
    const tr = document.createElement('tr');
    const statusClass = order.status === 'Pendente' ? 'danger' : order.status === 'Recusado' ? 'warning' : 'primary';
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${statusClass}">${order.status}</td>
        <td class="primary">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});