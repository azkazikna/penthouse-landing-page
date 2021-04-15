//selection
const tooltips = document.querySelectorAll('.all-tooltips .tool');
const fullDiv = document.querySelector('section');
const container = document.querySelector('.container');
let timeooutId;
//eventlistener
window.addEventListener('DOMContentLoaded', contentPosition);
window.addEventListener('resize', contentPosition)

function contentPosition() {
    tooltips.forEach(tooltip => {
        const hotspot = tooltip.querySelector('.hotspot');
        const content = tooltip.querySelector('.tooltip-content');
        const arrow = tooltip.querySelector('.arrow');
        if(hotspot.offsetLeft + content.offsetWidth / 2 > fullDiv.offsetWidth) {
            const extraLeft = fullDiv.offsetWidth - (hotspot.offsetLeft + content.offsetWidth/2);
            content.style.left = hotspot.offsetLeft - content.offsetWidth / 2 + extraLeft -30 + 'px';
            console.log('right Conflict')
        }else if(hotspot.offsetLeft + container.offsetLeft < content.offsetWidth / 2){
            content.style.left = - container.offsetLeft + 'px';
        }else {
            content.style.left = hotspot.offsetLeft - content.offsetWidth / 2 + 'px';
        }
        content.style.top = hotspot.offsetTop + 40 + 'px';
        arrow.style.left = hotspot.offsetLeft - content.offsetLeft + hotspot.offsetWidth/2 + 'px';
    })
}

tooltips.forEach(tooltip => {
    const hotspot = tooltip.querySelector('.hotspot');
    const content = tooltip.querySelector('.tooltip-content');
    hotspot.addEventListener('mousemove',() => {
        tooltip.classList.add('active')
    })
    hotspot.addEventListener('mouseleave', () => {
        timeoutId = setTimeout(() => {
        tooltip.classList.remove('active');
        })
    })
    content.addEventListener('mousemove', () => {
        clearTimeout(timeoutId)
        tooltip.classList.add('active');
    })
    content.addEventListener('mouseleave', () => {
        timeoutId = setTimeout(() => {
        tooltip.classList.remove('active');
        })
    })
})
