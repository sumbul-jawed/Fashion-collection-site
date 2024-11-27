import Image from 'next/image';
import React from 'react';

const Page = () => {
  const collectionData = [
    { id: 1, name: "Maxi", price: 3000, Description: "Stuff chiffon 1pc", image: `/maxi.jpg` },
    { id: 2, name: "Frock", price: 2000, Description: "Stuff chiffon 2pc", image: `/frock.jpg` },
    { id: 3, name: "Kameez Shalwar", price: 4000, Description: "Stuff Lawn 3pc", image: `/kamez.jpg` },
    { id: 4, name: "Pant Shirt", price: 1500, Description: "Stuff Jeans 2pc", image: `/pant shirt.jpg` },
    { id: 5, name: "Shawl", price: 2500, Description: "Stuff Jarsi 1pc", image: `/shawl.jpg` },
    { id: 6, name: "Trousers", price: 1000, Description: "Stuff Cotton 1pc", image: `/trouser2.jpg` },
    { id: 7, name: "Girls Top", price: 1500, Description: "Stuff valvet 1pc", image: `/shirts.jpg` },
    { id: 8, name: "scarf", price: 700, Description: "Stuff georgette 1pc", image: `/scarf.jpg` },
  ];

  return (
    <div className="dresses">
      {collectionData.map((dress) => (
        <div key={dress.id} className="dress-card">
          <Image src={dress.image} alt={dress.name} width={600} height={600} className="dress-image" />
          <div className="dress-card-content">
            <h3 className="dress-name">{dress.name}</h3>
            <p className="dress-description">{dress.Description}</p>
            <div className="dress-price">Price {dress.price}</div>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
