function loadMenu() {
    const content = document.getElementById('content');
    const menu = document.createElement('div');
    
    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';
    
    const menuItems = document.createElement('ul'); 
    const items = ['Pizza', 'Pasta', 'Salad', 'Dessert'];   
    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        menuItems.appendChild(listItem);
    });
    
    menu.appendChild(heading);
    menu.appendChild(menuItems);
    content.appendChild(menu);
}

export default loadMenu;