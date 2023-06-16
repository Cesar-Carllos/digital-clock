const clockContainer = document.querySelector('.clock-container')

const updateClock = () => {
    const present = new Date()
    const hours = String(present.getHours()).padStart(2, '0')
    const minutes = String(present.getMinutes()).padStart(2, '0')
    const secondes = String(present.getSeconds()).padStart(2, '0')

    clockContainer.innerHTML = `
        <span>${hours}</span> :
        <span>${minutes}</span> :
        <span>${secondes}</span>
    `
}

setInterval(() => {
    updateClock()
}, 1000)



