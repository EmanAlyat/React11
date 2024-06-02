import React, { useEffect, useState } from 'react';
import Category from './Category';
import './styles/Main/Main.css';

const Main = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('data/categories.json')
      .then(response => response.json())
      .then(data => setCategories(data.categories))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  return (
    <div className='main-container'>
      <div className='title'><span className='browse'>Browse</span> Our Most Popular Categories</div>
       <div className="list-of-categories">
          {categories.map(category => (
            <Category
              key={category.id}
              image={category.image}
              title={category.title}
              description={category.description}
            />
          ))}
       </div>
    </div>
  );
}

export default Main;
