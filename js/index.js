import { shiftItems } from './utils/shift';

const MAX_ITEMS = 100;
const listContainer = document.getElementById('list-container');
const dimmedBackground = document.querySelector('.overlay');
const listItems = [];

const onMouseOver = (event) => {
    const hoveredItem = event.target;
    shiftItems({hoveredItem});
};

const onMouseOut = (event) => {
    const hoveredItem = event.target;
    shiftItems({hoveredItem, type:"unshift"})
}

const onOverlayIn = () => {
    try {
        const currentItem = document.querySelector('.clicked');

        currentItem.style.width='500px';
        currentItem.style.height='500px';
        currentItem.style.top = '50%'; 
        currentItem.style.left = '50%';
        currentItem.style.zIndex = '3';
        
        currentItem.style.position = 'fixed';
        currentItem.style.transform= 'translate(-50%,-50%)';
        currentItem.style.boxShadow= 'none'
        currentItem.style.transition = 'position 2s ease, transform 0.5s ease, width 0.5s ease, height 0.5s ease';
    } catch (error) {
        alert(`Error in 'onOverlayIn' function: ${error.message}`);
    }
}

const onOverlayOut = (event) => {
    try {
        event.stopPropagation();

        const currentItem = document.querySelector('.clicked');

        dimmedBackground.style.display = 'none';

        currentItem.classList.remove('clicked');
        currentItem.addEventListener('mouseover', onMouseOver);
        currentItem.addEventListener('mouseout', onMouseOut);

        currentItem.style.top= '0';
        currentItem.style.left= '0';
        currentItem.style.position = 'relative';
        currentItem.style.transition = 'position 2s ease, transform 0.5s ease, width 0.5s ease, height 0.5s ease';

        shiftItems({hoveredItem: currentItem, type:"unshift"});
        
        currentItem.addEventListener('click', onClickItem);
    } catch (error) {
        alert(`Error in 'onOverlayOut' function: ${error.message}`)
    }
}

const onClickItem = (event) => {
    try {
        const currentItem = event.target;
        
        currentItem.classList.add('clicked');

        currentItem.removeEventListener('click', onClickItem);
        currentItem.removeEventListener('mouseover', onMouseOver);
        currentItem.removeEventListener('mouseout', onMouseOut);

        dimmedBackground.style.display = 'block';
        
        dimmedBackground.addEventListener('click', onOverlayOut);
        
        if (window.getComputedStyle(dimmedBackground).display === 'block') {
            onOverlayIn();
        }
    } catch (error) {
        alert(`Error in 'onClickItem' function: ${error.message}`)
    }
    
}

const createListItem = (text) => {
    try {
        const li = document.createElement('li');
        li.textContent = text;

        li.classList.add('list-item');

        li.addEventListener('mouseover', onMouseOver);
        li.addEventListener('mouseout', onMouseOut); 
        li.addEventListener('click', onClickItem);

        return li;
    } catch (error) {
        alert(`Error in 'createListItem' function: ${error.message}`);
    }
}

for (let i = 1; i <= MAX_ITEMS; i++) {
  const li = createListItem(`List Item ${i}`);
  listItems.push(li);
}

listContainer.append(...listItems);


