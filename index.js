const productsDiv = document.querySelector('.products');
const btnSubmit = document.querySelector('.submit');
const urlInput = document.querySelector('.url-input');
const selectInput = document.querySelector('#select');

const all = document.querySelector('.btn-all');
const headphone = document.querySelector('.btn-headphone');
const laptop = document.querySelector('.btn-laptop');
const mobile = document.querySelector('.btn-mobile');
const filterButtons = document.querySelectorAll('.buttons button');
let dataId = 0;
let productData = [];
let filteredData = [];

const createProduct = function (e) {
  e.preventDefault();
  if (urlInput.value.length === 0) {
    alert('Please enter the URL');
  } else {
    const myHTML = `
  <div class="product" data-name="${selectInput.value}" data-id="${dataId}">
    <div class="wrapper">
      <img src="${urlInput.value}" alt="" />
      </div>
      <button class="delete-button">Delete</button>
  </div>
`;
    const myFragment = document.createRange().createContextualFragment(myHTML);
    productsDiv.appendChild(myFragment);

    productData.push({
      category: selectInput.value,
      id: dataId++,
      src: urlInput.value,
    });
  }
};

const deleteItem = function (e) {
  console.log(e.target.parentElement);
  productData.forEach((item, index) => {
    if (e.target.parentElement.dataset.id == productData[index].id) {
      productData.splice(index, 1);
      e.target.parentElement.remove();
    }
  });
};

const renderHeadphone = function (e) {
  productsDiv.innerHTML = '';
  filteredData = [];
  if (e.currentTarget === headphone) {
    for (let i = 0; i < productData.length; i++) {
      if (productData[i].category === 'headphone') {
        filteredData.push(productData[i]);
      }
    }
  }
  for (let i = 0; i < filteredData.length; i++) {
    const myHTML = `
  <div class="product" data-name="${filteredData[i].category}" data-id="${filteredData[i].id}">
    <div class="wrapper">
      <img src="${filteredData[i].src}" alt="" />
      </div>
      <button class="delete-button">Delete</button>
  </div>
`;
    const myFragment = document.createRange().createContextualFragment(myHTML);
    productsDiv.appendChild(myFragment);
  }
};

const renderLaptop = function (e) {
  productsDiv.innerHTML = '';
  filteredData = [];
  if (e.currentTarget === laptop) {
    for (let i = 0; i < productData.length; i++) {
      if (productData[i].category === 'laptop') {
        filteredData.push(productData[i]);
      }
    }
  }
  for (let i = 0; i < filteredData.length; i++) {
    const myHTML = `
  <div class="product" data-name="${filteredData[i].category}" data-id="${filteredData[i].id}">
    <div class="wrapper">
      <img src="${filteredData[i].src}" alt="" />
      </div>
      <button class="delete-button">Delete</button>
  </div>
`;
    const myFragment = document.createRange().createContextualFragment(myHTML);
    productsDiv.appendChild(myFragment);
  }
};

const renderMobile = function (e) {
  productsDiv.innerHTML = '';
  filteredData = [];
  if (e.currentTarget === mobile) {
    for (let i = 0; i < productData.length; i++) {
      if (productData[i].category === 'mobile') {
        filteredData.push(productData[i]);
      }
    }
  }
  for (let i = 0; i < filteredData.length; i++) {
    const myHTML = `
  <div class="product" data-name="${filteredData[i].category}" data-id="${filteredData[i].id}">
    <div class="wrapper">
      <img src="${filteredData[i].src}" alt="" />
      </div>
      <button class="delete-button">Delete</button>
  </div>
`;
    const myFragment = document.createRange().createContextualFragment(myHTML);
    productsDiv.appendChild(myFragment);
  }
};

const renderAll = function (e) {
  productsDiv.innerHTML = '';
  filteredData = productData;
  for (let i = 0; i < filteredData.length; i++) {
    const myHTML = `
  <div class="product" data-name="${filteredData[i].category}" data-id="${filteredData[i].id}">
    <div class="wrapper">
      <img src="${filteredData[i].src}" alt="" />
      </div>
      <button class="delete-button">Delete</button>
  </div>
`;
    const myFragment = document.createRange().createContextualFragment(myHTML);
    productsDiv.appendChild(myFragment);
  }
};

btnSubmit.addEventListener('click', createProduct);
laptop.addEventListener('click', renderLaptop);
mobile.addEventListener('click', renderMobile);
headphone.addEventListener('click', renderHeadphone);
all.addEventListener('click', renderAll);
productsDiv.addEventListener('click', deleteItem);
