
window.onload = () => {
    
    const hero = document.querySelector('.hero');

    const button = document.createElement('button');
    button.textContent = 'Салам Баластан!'; 

    button.style.marginTop = '20px';
    button.style.padding = '10px 20px';
    button.style.border = 'none';
    button.style.backgroundColor = '#ffd700'; 
    button.style.color = '#a71d31'; 
    button.style.fontSize = '16px';
    button.style.borderRadius = '10px';
    button.style.cursor = 'pointer';

    button.addEventListener('click', () => {
        alert('Салам! 🎉 Сиз Баластанга кош келдиңиз!');
    });
    hero.appendChild(button);
};
