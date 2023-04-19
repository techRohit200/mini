import React from 'react';

const Home = () => {
  return (
    <div>
      <header>
        <h1>Company Website</h1>
      </header>
      <main>
        <section>
          <h2>Welcome to our store!</h2>
          <p>Here you can find a wide selection of products, including clothing, electronics, home goods, and more. We offer competitive prices and fast shipping, so you can get the items you need quickly and affordably.</p>
        </section>
        <section>
          <h2>Featured Products</h2>
          <div className="products-container">
      <div className="product">
        <img src='https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="Product" />
        <h3>Product 1</h3>
        <button>Add to Cart</button>
      </div>
      <div className="product">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMwD3CkSrQSJhaPNQKs-yJVjZWTY8uCn_Uz7YHCu_aSmUYX8nuWzU1yxmFv9nTQuST6Dc&usqp=CAU" alt="Product" />
        <h3>Product 2</h3>
        <button>Add to Cart</button>
      </div>
      <div className="product">
        <img src="https://lh3.googleusercontent.com/uY0DBQik6UA-8r3u940KST-4No0y-XK9SdLkA8cirg9XMg5hw43uvY04aMt_suipYETIU-g7GYZ12T1nUvefZBSpugr9xlvkvVb9L6p5EibJwYIX2A" alt="Product" />
        <h3>Product 3</h3>
        <button>Add to Cart</button>
      </div>
      <div className="product">
        <img src="https://m.media-amazon.com/images/G/31/img21/CEPC/Electronics/Revamp/xcm_banners_01_feb22_564x564_in-en._CB628916123_.jpg" alt="Product" />
        <h3>Product 4</h3>
        <button>Add to Cart</button>
      </div>
      <div className="product">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbtKHznGw4uIXoBm35cImL_et9LpQ_2I8pV2cDk7bvW2huOhfdO9orefbq9Ef_RP-4leY&usqp=CAU" alt="Product" />
        <h3>Product 5</h3>
        <button>Add to Cart</button>
      </div>
      <div className="product">
        <img src="https://media.amway.in/sys-master/images/hf1/h7e/9126042009630/EIA.w375.h375.110686ID_1.png" alt="Product" />
        <h3>Product 6</h3>
        <button>Add to Cart</button>
      </div>
      <div className="product">
        <img src="https://sdcdn.io/mac/us/mac_sku_M6JC02_1x1_0.png?width=1080&height=1080" alt="Product" />
        <h3>Product 7</h3>
        <button>Add to Cart</button>
      </div>
      <div className="product">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR0ySIaJ3RE7nL3f6fLe-pZt3oOephr7MClW7UxxZrJNawyxDzGoJG6vdOQ-WR0DmSGjU&usqp=CAU" alt="Product" />
        <h3>Product 8</h3>
        <button>Add to Cart</button>
      </div>
    </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
