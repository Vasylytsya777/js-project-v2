// import './styles.css';
// import { data } from "../../../data/data";
// import categoryTemplate from './template/category.hbs';
// import { runLoader } from '../../loader/index';


// export const runSlider = (i) => {
//          $(`.sliders-slick${i}`).slick({
//             dots: true,
//             variableWidth: true,
//             slidesToShow: 4,
//             slidesToScroll: 1,
//             speed: 500,
//             easing: 'ease',
//             infinite: true,
//             autoplay: true,
//             autoplaySpeed: 3500, 
//         });
// };

// export const createMarkup = (i) => {

//     const categoryRefs = document.querySelector('.container-categories');
//     const markup = `<div class="category visible"><div class="category-header"><h2 class="category-title">${data.calls.russianCategories[i]}
//             </h2><a href="" class="category-link" data-category="category">Смотреть все</a></div>
//             <ul class="category-list sliders sliders-slick${i}"> 
//             ${categoryTemplate(data.calls.specificCategory[data.calls.categories[i]].slice(0, 10))} </ul> </div>`
//         categoryRefs.insertAdjacentHTML('beforeend', markup);
//         data.renderedCategories.push(data.calls.categories[i]);  
//         runSlider(i);    
// };

// export const createСategories = () => {
//     for (let i = 0; i < 4; i += 1) {
//         createMarkup(i);
//     }
//     runLoader();
// }


// console.log(data.calls.specificCategory);
// =============================================================================
// const getСategory = async () => { 
//     return await fetch('https://callboard-backend.herokuapp.com/call/specific/work')
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//     })
// }
// getСategory();
// ===============================================================================


// update========================================================

import './styles.css';
import { data } from "../../../data/data";
import categoryTemplate from './template/category.hbs';
import { runLoader } from '../../loader/index';
import { openByCategory } from '../categories-list/index';


export const runSlider = (i) => {
         $(`.sliders-slick${i}`).slick({
            dots: true,
            variableWidth: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 500,
            easing: 'ease',
            infinite: true,
            // autoplay: true,
            // autoplaySpeed: 3500, 
        });
};

export const createMarkup = (i) => {

    const categoryRefs = document.querySelector('.container-categories');
    const markup = `<div class="category visible"><div class="category-header"><h2 class="category-title">${data.calls.russianCategories[i]}
            </h2><a href="#" class="category-link" id="${data.calls.categories[i]}">Смотреть все</a></div>
            <ul class="category-list sliders sliders-slick${i}"> 
            ${categoryTemplate(data.calls.specificCategory[data.calls.categories[i]].slice(0, 10))} </ul> </div>`
        categoryRefs.insertAdjacentHTML('beforeend', markup);
        data.renderedCategories.push(data.calls.categories[i]);  
    runSlider(i);    
    

    const linkCategoryRef = document.getElementById(`${data.calls.categories[i]}`);

    linkCategoryRef.addEventListener('click', () => { 
         const byCategoryRef = document.querySelector('.main');
        openByCategory(data.calls.specificCategory[data.calls.categories[i]]);
        byCategoryRef.style.display = 'none';
    });



};

export const createСategories = () => {
    for (let i = 0; i < 4; i += 1) {
        createMarkup(i);
    }
    runLoader();
}


// console.log(data.calls.specificCategory);



// =============================================================================
// const getСategory = async () => { 
//     return await fetch('https://callboard-backend.herokuapp.com/call/specific/work')
//         .then(response => response.json())
//         .then(data => {
//             console.log(data);
//     })
// }
// getСategory();
// ===============================================================================





