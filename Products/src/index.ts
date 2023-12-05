import '../public/style.css'
const fetchDataAndRenderImages = async () => {
 try {
   const response = await fetch('https://course-api.com/react-store-products');
   const data = await response.json();
   renderImages(data);
 } catch (error) {
   console.error('Error fetching data:', error);
 }
};
const fetchDataAndRenderImages2 = async () => {
 try {
   const response = await fetch('https://course-api.com/react-store-products');
   const data = await response.json();
   renderImages2(data);
 } catch (error) {
   console.error('Error fetching data:', error);
 }
};
const wrap = document.querySelector<HTMLOrSVGImageElement>('.wrap');
const grid = document.querySelector<HTMLOrSVGImageElement>('.grid');
const imageContainer1 = document.getElementById('imageContainer1');
const input = document.querySelector<HTMLInputElement>('.input');
const select = document.querySelector<HTMLSelectElement>('.select');

const renderImages2 = (data: { image: string; name: string,price:string,description:string,category:string }[]) => {

 data.forEach((item) => {

  const imgElement = document.createElement('img');
  imgElement.className = "image";
  imgElement.src = item.image;

  const card = document.createElement('div');
  card.className = "Card";
  card.appendChild(imgElement);

  const right = document.createElement('div');
  right.className = 'right';
   const nameElement = document.createElement('p');
   nameElement.className = 'bName';
   nameElement.innerText = item.name;
   right.appendChild(nameElement);
   const categoryElement = document.createElement('pp');
   categoryElement.innerText = item.category;
   const priceElement = document.createElement('p');
   priceElement.className = 'pPrice';
   priceElement.innerText = `$${item.price}`;
   right.appendChild(priceElement);


   const description = document.createElement('p');
   description.className = 'description';

   description.innerText = `${item.description}`;

   right.appendChild(description);
   const button = document.createElement('button');
   button.className = 'custom-button';
   button.innerText = "Details";
   right.appendChild(button);
   card.appendChild(right);
   imageContainer1.appendChild(card);


 });
};
const imageContainer = document.getElementById('imageContainer');
const renderImages = (data: { image: string; name: string,price:string,category:string }[]) => {


 data.forEach((item) => {


   const imgElement = document.createElement('img');
   imgElement.src = item.image;

    const nameElement = document.createElement('p');
    nameElement.innerText = item.name;
    const categoryElement = document.createElement('pp');
    categoryElement.innerText = item.category;
    categoryElement.style.display = 'none';

    const priceElement = document.createElement('p');
    priceElement.className = 'Price';
    priceElement.innerText = `$${item.price}`;
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    const price = document.createElement('div');
    price.className = 'price';
    price.appendChild(nameElement)
    price.appendChild(priceElement);
    cardElement.appendChild(imgElement);
    cardElement.appendChild(price);
    cardElement.appendChild(categoryElement);
   imageContainer?.appendChild(cardElement);

 });
};
grid.addEventListener('click', function(){
 grid.classList.add ('before');
 wrap.classList.remove('before');
 imageContainer1.style.display = 'none';
 imageContainer.style.display = 'flex';
 fetchDataAndRenderImages();

})
wrap.addEventListener('click', function() {
 grid.classList.remove('before');
wrap.classList.add ('before');
imageContainer.style.display = 'none';
imageContainer1.style.display = 'block ';
fetchDataAndRenderImages2();

});
input.addEventListener('input', () => {
 const inputValue = input.value.toLowerCase();

 const allImages = document.querySelectorAll('.card');
 allImages.forEach((Image:any) => {
   const nameElement = Image.querySelector('p');
   const name = nameElement.innerText.toLowerCase();

   if (name.includes(inputValue)) {
     Image.style.display = 'block';
   } else {
     Image.style.display = 'none';
   }
 });
 const AllImages = document.querySelectorAll('.Card');
 AllImages.forEach((Image:any) => {
  const nameElement = Image.querySelector('p');
  const name = nameElement.innerText.toLowerCase();

  if (name.includes(inputValue)) {
    Image.style.display = 'flex';
  } else {
    Image.style.display = 'none';
  }
});
});
function priceRange() {
  const rangeInput: HTMLInputElement = document.querySelector(".range")!;
  const rangeText: HTMLParagraphElement = document.querySelector(".pprice")!;

  rangeInput.addEventListener("input", changePriceValue);

  function changePriceValue() {
   let rangeValue = rangeInput.value;
   rangeText.textContent = `$${rangeValue}`;
  }
}
 const category = document.querySelectorAll<HTMLParagraphElement>('.p');
 category.forEach(item =>{

  item.addEventListener('click', () => {
    const selectedCategory = item.innerText.toLowerCase();
    const allImages = document.querySelectorAll('.card');

    allImages.forEach((Image: any) => {
      const categoryElement = Image.querySelector('pp');
      const imageCategory = categoryElement.innerText.toLowerCase();

      if (imageCategory === selectedCategory) {
        Image.style.display = 'block';
      }
      else if(selectedCategory === 'all'){
        Image.style.display = 'block';
      }
       else {
        Image.style.display = 'none';
      }
    });
  });
 });
 const selectElement = document.querySelector<HTMLSelectElement>('.select');
selectElement.addEventListener('change', () => {
  const selectedValue = selectElement.value;

  const cardElements = document.querySelectorAll('.card');
  const sortedCards = Array.from(cardElements);

  if (selectedValue === '1') {
    sortedCards.sort((a: HTMLElement, b: HTMLElement) => {
      const priceA = Number(a.querySelector('.Price')?.innerHTML.slice(1));
      const priceB = Number(b.querySelector('.Price')?.innerHTML.slice(1));
      return priceA - priceB;
    });
  } else if (selectedValue === '2') {
    sortedCards.sort((a: HTMLElement, b: HTMLElement) => {
      const nameA = a.querySelector('p')?.innerText.toLowerCase();
      const nameB = b.querySelector('p')?.innerText.toLowerCase();
      return nameB.localeCompare(nameA);
    });
  }

  imageContainer.innerHTML = '';
  sortedCards.forEach((card) => {
    imageContainer.appendChild(card);
  });
});
 priceRange();
fetchDataAndRenderImages();





