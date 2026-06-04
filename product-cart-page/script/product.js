export function getProduct(productId) {
  let matchingProduct;

  product.forEach((product)=>{
    if(product.id === productId){
      matchingProduct = product;
    }
  });

  return matchingProduct;
}

export const product = [{
  id: '01',
  image: 'images/image-waffle-desktop.jpg',
  thumbnail: 'images/image-waffle-thumbnail.jpg',
  alte: 'Waffle-picture',
  name: 'Waffle',
  fullName: 'Waffle with Berries',
  priceCents: '650',
},{
  id: '02',
  image: 'images/image-creme-brulee-desktop.jpg',
  thumbnail: 'images/image-creme-brulee-thumbnail.jpg',
  alte: 'Creme-Brulee-picture',
  name: 'Creme Brulee',
  fullName: 'Vanilla Bean Creme Brulee',
  priceCents: '700',
},{
  id: '03',
  image: 'images/image-macaron-desktop.jpg',
  thumbnail: 'images/image-macaron-thumbnail.jpg',
  alte: 'Macaron-picture',
  name: 'Macaron',
  fullName: 'Macaron Mix of Five',
  priceCents: '800',
},{
  id: '04',
  image: 'images/image-tiramisu-desktop.jpg',
  thumbnail: 'images/image-tiramisu-thumbnail.jpg',
  alte: 'Tiramisu-picture',
  name: 'Tiramisu',
  fullName: 'Classic Tiramisu',
  priceCents: '550',
},{
  id: '05',
  image: 'images/image-baklava-desktop.jpg',
  thumbnail: 'images/image-baklava-thumbnail.jpg',
  alte: 'Baklava-picture',
  name: 'Baklava',
  fullName: 'Pistachio Baklava',
  priceCents: '400',
},{
  id: '06',
  image: 'images/image-meringue-desktop.jpg',
  thumbnail: 'images/image-meringue-thumbnail.jpg',
  alte: 'Pie-picture',
  name: 'Pie',
  fullName: 'Lemon Meringue Pie',
  priceCents: '500',
},{
  id: '07',
  image: 'images/image-cake-desktop.jpg',
  thumbnail: 'images/image-cake-thumbnail.jpg',
  alte: 'Cake-picture',
  name: 'Cake',
  fullName: 'Red Velvet Cake',
  priceCents: '450',
},{
  
  id: '08',
  image: 'images/image-brownie-desktop.jpg',
  thumbnail: 'images/image-brownie-thumbnail.jpg',
  alte: 'Brownie-picture',
  name: 'Brownie',
  fullName: 'Salted Caramel Brownie',
  priceCents: '550',
},{
  id: '09',
  image: 'images/image-panna-cotta-desktop.jpg',
  thumbnail: 'images/image-panna-cotta-thumbnail.jpg',
  alte: 'Panna-Cotta-picture',
  name: 'Panna Cotta',
  fullName: 'Vanilla Panna Cotta',
  priceCents: '650',
},];