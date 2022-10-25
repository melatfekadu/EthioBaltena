import React from 'react';



import {client} from '../lib/client';
import {Product, FooterBanner, HeroBanner} from "../components" ;


const index = ( { product, bannerData }) => (
  <div>
    <HeroBanner />

     <div class="products-heading">
       <h2>Best Selling Products</h2>
       <p>Different Tastes</p>
     </div>

     <div class="products-container"> 
       {product?.map((product)=> product.name)}
     </div>

     <FooterBanner />
     </div>

);

export const  getServerSideProps =async() =>{
  const query ='*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery ='*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData}
  }
}


export default index