const array = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "t-shirt",
      price: 15.99,
      img: "https://www.uberprints.com/assets/images/catalog/category-tshirts.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, `,
    },
    {
      id: 2,
	  title:"buttermilk new",
      category: "pant",
      price: 13.99,
      img: "https://s3-ap-southeast-1.amazonaws.com/priyoshop/content/Images/thumbs/0086512_jeans-pant_450.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb l `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "polo-shirt",
      price: 6.99,
      img: "https://image.spreadshirtmedia.com/image-server/v1/mp/productTypes/110/views/1/appearances/4,width=300,height=300,backgroundColor=f2f2f2.jpg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo`,
    },
    {
      id: 4,
      title: "country delight",
      category: "pant",
      price: 20.99,
      img: "https://aristaexport.com/images/products/144-unique-design-of-girl-s-pant-2.jpg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "tentop-shirt",
      price: 22.99,
      img: "https://sc02.alicdn.com/kf/HTB11i13XyDxK1RjSsphq6zHrpXa2.jpg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest medi `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "t-shirt",
      price: 18.99,
      img: "https://docksbeers.com/wp-content/uploads/2019/05/merch-TSHIRT-W-2.jpg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft `,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "polo-shirt",
      price: 8.99,
      img: "https://sc01.alicdn.com/kf/UTB8FOG9ctoSdeJk43Owq6ya4XXaE/126010206/UTB8FOG9ctoSdeJk43Owq6ya4XXaE.jpg_.webp",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee  `,
    },
    {
      id: 8,
      title: "american classic",
      category: "tentop-shirt",
      price: 12.99,
      img: "https://sc01.alicdn.com/kf/HTB1WbYLXEjrK1RkHFNRq6ySvpXan.jpg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid`,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "tentop-shirt",
      price: 16.99,
      img: "https://www.bikeinn.com/f/13587/135879740/spiuk-top-ten-unisex-sleeveles-t-shirt.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edi`,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "polo-shirt",
      price: 18.99,
      img: "https://www.vicegolf.com/repo/images/products/apparel/vice_golf_polo_logo_grey_slider01.png",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft bee`,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "t-shirt",
      price: 6.99,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSdm7xfhiF-Nn7DwCyWGkrHG762g3A2Wrugdw&usqp=CAU",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth `,
    },
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "pant",
      price: 15.99,
      img: "https://www.fabrilife.com/image-gallery/5edb4ad6ea746.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock`,
    },
  ];
  const store = document.querySelector(".store")
  
  function Allproducts(){ array.forEach((e)=>{
     const html = `
     <div  class="col-3 ">
<div style="background-color: beige;border-radius: 5px;" class="container div-hover my-4 py-2">
    <img style="height: 170px;width: 220px;" src="${e.img}" alt="..." class="img-thumbnail">
    <h5 class="text-primary">${e.title.toUpperCase()}</h5>
    <h6 class="text-warning">${e.price}</h6>
    <a style="color: teal;">${e.desc}...</a>
    <div class="row">
        
   <div class="col-6 py-2"><button style="background-color: teal;color: aquamarine;" class="btn w-100">Card</button></div>
   <div class="col-6 py-2"><button style="background-color: teal;color: aquamarine;"  class="btn w-100 ">Buy</button></div>




    </div>
</div>
</div>
     
     `
    
     store.insertAdjacentHTML("beforeend",html)
  })}
  Allproducts()

  function htmlCard(input){
    array.forEach((a)=>{
        if(a.category.includes(input)){
           
          const html1 = `
          <div  class="col-3 ">
     <div style="background-color: beige;border-radius: 5px;" class="container div-hover my-4 py-2">
         <img style="height: 170px;width: 220px;" src="${a.img}" alt="..." class="img-thumbnail">
         <h5 class="text-primary">${a.title.toUpperCase()}</h5>
         <h6 class="text-warning">${a.price}</h6>
         <a style="color: teal;">${a.desc}...</a>
         <div class="row">
             
        <div class="col-6 py-2"><button style="background-color: teal;color: aquamarine;" class="btn w-100">Card</button></div>
        <div class="col-6 py-2"><button style="background-color: teal;color: aquamarine;"  class="btn w-100 ">Buy</button></div>
     
     
     
     
         </div>
     </div>
     </div>
          
          `
         
          store.insertAdjacentHTML("beforeend",html1)
        }
    })
}

 const aLink = document.querySelectorAll(".ul-items a")
aLink[1].addEventListener("click",(e)=>{
    store.innerHTML = ""
    htmlCard("t-shirt")

})
aLink[2].addEventListener("click",(e)=>{
    store.innerHTML = ""
    htmlCard("pant")

})
aLink[3].addEventListener("click",(e)=>{
    store.innerHTML = ""
    htmlCard("polo-shirt")

})
aLink[4].addEventListener("click",(e)=>{
    store.innerHTML = ""
    htmlCard("tentop-shirt")

})
aLink[0].addEventListener("click",(e)=>{
    store.innerHTML = ""
    Allproducts()

})



