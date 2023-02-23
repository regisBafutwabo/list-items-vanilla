export const shiftItems = ({hoveredItem, type="shift" }) =>{
    try {
        const prevSibling = hoveredItem.previousElementSibling;
        const nextSibling = hoveredItem.nextElementSibling;

        if(type==="shift"){
            hoveredItem.style.transform = 'translateX(40px)';
            hoveredItem.style.transition = 'all 0.5s ease';
            hoveredItem.style.boxShadow = '1px 2px 2px 0px #ccc';
            hoveredItem.style.cursor = 'pointer';

            if (prevSibling) {
            prevSibling.style.transform = 'translateX(20px)';
            prevSibling.style.transition = 'all 0.5s ease';
            }
            if (nextSibling) {
            nextSibling.style.transform = 'translateX(20px)';
            nextSibling.style.transition =  'all 0.5s ease';
            }
        }else{
            hoveredItem.style.transform = 'translate(0,0)';
            hoveredItem.style.zIndex = '1'
            hoveredItem.style.width = 'auto';
            hoveredItem.style.height = '40px';
            hoveredItem.style.transition ='all 0.5s ease';
            hoveredItem.style.boxShadow= 'none';
            
            if (prevSibling) {
                prevSibling.style.transform = 'none';
                prevSibling.style.transition = 'all 0.5s ease';
            }
            if (nextSibling) {
                nextSibling.style.transform = 'none';
                nextSibling.style.transition = 'all 0.5s ease';
            }
        }
    } catch (error) {
        alert(`Error in 'shiftItems' function: ${error.message}`)
    }
}