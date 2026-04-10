function loadHome() {
    const content = document.getElementById('content');
    const home = document.createElement('div');
    
    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to our restaurant!';
    
    const description = document.createElement('p');
    description.textContent = 'Enjoy the best food in town!';
    
    home.appendChild(heading);
    home.appendChild(description);
    content.appendChild(home);
}

export default loadHome;