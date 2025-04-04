const products = [
    {
        name: "Lorem anim anim",
        image:
          "https://images.pexels.com/photos/16947159/pexels-photo-16947159/free-photo-of-sports-shoe-studio-shoot.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description:
          "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
        price: 98,
        countInStock: 4,
        rating: 4.5,
        numReview: 5,
      },
      {
        name: "Lorem anim anim",
        image:
          "https://i5.walmartimages.com/seo/DD1391-100-Mens-Nike-Dunk-Low-Retro_ba026af8-a266-4613-bc4b-f4e0c1952c6f.f39142e2aa2f9f428ed45834b221c790.jpeg",
        description:
          "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
        price: 98,
        countInStock: 4,
        rating: 4.5,
        numReview: 5,
      },
    
      {
        
        name: "Lorem anim anim",
        image:
          "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018392864_437Wx649H_202307201841491.jpeg",
        description:
          "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
        price: 98,
        countInStock: 0,
        rating: 4,
        numReview: 46,
      },
    
      {
        
        name: "Lorem anim anim",
        image:
          "https://www.apetogentleman.com/wp-content/uploads/2021/07/jordan-1.jpg",
        description:
          "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
        price: 98,
        countInStock: 4,
        rating: 4,
        numReview: 26,
      },
      {
        
        name: "Lorem anim anim",
        image:
          "https://images-cdn.ubuy.co.in/634d139d183a133e4d32eaea-nike-air-jordan-1-high-og-unc-university.jpg",
        description:
          "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
        price: 98,
        countInStock: 4,
        rating: 4,
        numReview: 60,
      },
      {
        
        name: "Lorem anim anim",
        image:
          "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/11261278/2023/4/21/ca7de421-3d24-4c1b-a922-5641a2f062f61682057816466-HRX-by-Hrithik-Roshan-Men-White-Solid-Gamescape-Sneakers-929-1.jpg",
        description:
          "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
        price: 98,
        countInStock: 4,
        rating: 4,
        numReview: 16,
      },
      {
        
        name: "Lorem anim anim",
        image:
          "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/p/5/3/-original-imah23c4gwtfjrvu.jpeg?q=90&crop=false",
        description:
          "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
        price: 98,
        countInStock: 4,
        rating: 4,
        numReview: 12,
      },
      {
        
        name: "Lorem anim anim",
        image:
          "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/22088542/2023/4/5/be3e85aa-4f51-4607-840b-06c24966852c1680698240410-Campus-Men-White-Colourblocked-PU-Sneakers-9971680698240321-6.jpg",
        description:
          "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
        price: 98,
        countInStock: 4,
        rating: 4,
        numReview: 79,
      },
      {
        
        name: "Lorem anim anim",
        image:
          "https://img.tatacliq.com/images/i17//437Wx649H/MP000000018869727_437Wx649H_202405170753331.jpeg",
        description:
          "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
        price: 98,
        countInStock: 4,
        rating: 4,
        numReview: 400,
      },
      {
        
        name: "Lorem anim anim",
        image:
          "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/p/g/p/-original-imahfxv2swnxy9cs.jpeg?q=90&crop=false",
        description:
          "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
        price: 98,
        countInStock: 4,
        rating: 4,
        numReview: 12,
      },
    
      {
        
        name: "Lorem anim anim",
        image:
          "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/u/o/h/-original-imah4er3whhsgxfr.jpeg?q=90&crop=false",
        description:
          "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
        price: 98,
        countInStock: 4,
        rating: 4,
        numReview: 15,
      },
      {
        
        name: "Lorem anim anim",
        image:
          "https://redtape.com/cdn/shop/files/RSL1181_1..jpg?v=1741349823",
        description:
          "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
        price: 98,
        countInStock: 4,
        rating: 4,
        numReview: 80,
      },
      {
        
        name: "Lorem anim anim",
        image:
          "https://i.pinimg.com/736x/00/3c/9e/003c9e8f292e1f356432e03ea60c0e87.jpg",
        description:
          "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
        price: 98,
        countInStock: 4,
        rating: 4,
        numReview: 80,
      },
      {
        
        name: "Lorem anim anim",
        image:
          "https://i.pinimg.com/736x/d3/72/77/d37277353df67ece5b7297a65956cce8.jpg",
        description:
          "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
        price: 98,
        countInStock: 4,
        rating: 4,
        numReview: 80,
      },
      {
        
        name: "Lorem anim anim",
        image:
          "https://i.pinimg.com/736x/72/6b/07/726b07864a81ca7d19d5d862c8a325db.jpg",
        description:
          "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
        price: 98,
        countInStock: 4,
        rating: 4,
        numReview: 80,
      },
      {
        
        name: "Lorem anim anim",
        image:
          "https://i.pinimg.com/736x/e5/56/a8/e556a888a1ec5ebcdfc43670b7c4d8e5.jpg",
        description:
          "Velit fugiat deserunt veniam adipisicing ad adipisicing proident occaecat enim. Ut irure aliquip tempor veniam pariatur incididunt adipisicing consequat excepteur tempor eiusmod tempor. Occaecat eu velit velit ad nulla commodo commodo dolor consectetur proident reprehenderit sint. Deserunt excepteur incididunt duis voluptate est amet velit incididunt cupidatat excepteur aute. Commodo ea amet ipsum adipisicing amet est nostrud consequat eiusmod non ullamco. Duis amet sint aliqua adipisicing labore mollit.",
        price: 98,
        countInStock: 4,
        rating: 4,
        numReview: 80,
      },
      

]

module.exports = products;