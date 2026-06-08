import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';

const plantCategories = [
  {
    category: 'Air Purifying Plants',
    plants: [
      {
        id: 1,
        name: 'Spider Plant',
        price: 12.99,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chlorophytum_comosum_0001.JPG/320px-Chlorophytum_comosum_0001.JPG',
        category: 'Air Purifying Plants',
      },
      {
        id: 2,
        name: 'Peace Lily',
        price: 18.99,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Spathiphyllum_cochlearispathum_RTBG.jpg/320px-Spathiphyllum_cochlearispathum_RTBG.jpg',
        category: 'Air Purifying Plants',
      },
      {
        id: 3,
        name: 'Snake Plant',
        price: 15.99,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg/240px-Snake_Plant_%28Sansevieria_trifasciata_%27Laurentii%27%29.jpg',
        category: 'Air Purifying Plants',
      },
      {
        id: 4,
        name: 'Boston Fern',
        price: 14.99,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Boston_fern_Nephrolepis_exaltata.jpg/320px-Boston_fern_Nephrolepis_exaltata.jpg',
        category: 'Air Purifying Plants',
      },
      {
        id: 5,
        name: 'Bamboo Palm',
        price: 24.99,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Rhapis_excelsa1.jpg/240px-Rhapis_excelsa1.jpg',
        category: 'Air Purifying Plants',
      },
      {
        id: 6,
        name: "Dracaena 'Janet Craig'",
        price: 19.99,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Dracaena_deremensis.jpg/240px-Dracaena_deremensis.jpg',
        category: 'Air Purifying Plants',
      },
    ],
  },
  {
    category: 'Aromatic Fragrant Plants',
    plants: [
      {
        id: 7,
        name: 'Lavender',
        price: 11.99,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Lavandula_angustifolia_Provence_%28aka%29.jpg/320px-Lavandula_angustifolia_Provence_%28aka%29.jpg',
        category: 'Aromatic Fragrant Plants',
      },
      {
        id: 8,
        name: 'Jasmine',
        price: 13.99,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/White_and_yellow_Jasmine_flowers.jpg/320px-White_and_yellow_Jasmine_flowers.jpg',
        category: 'Aromatic Fragrant Plants',
      },
      {
        id: 9,
        name: 'Gardenia',
        price: 17.99,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Gardenia_jasminoides.jpg/320px-Gardenia_jasminoides.jpg',
        category: 'Aromatic Fragrant Plants',
      },
      {
        id: 10,
        name: 'Sweet Basil',
        price: 7.99,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Basil-Basilico-Ocimum_basilicum-albahaca.jpg/320px-Basil-Basilico-Ocimum_basilicum-albahaca.jpg',
        category: 'Aromatic Fragrant Plants',
      },
      {
        id: 11,
        name: 'Rosemary',
        price: 8.99,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Rosemary_bush.jpg/320px-Rosemary_bush.jpg',
        category: 'Aromatic Fragrant Plants',
      },
      {
        id: 12,
        name: 'Mint',
        price: 6.99,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Spearmint_Mentha_spicata.jpg/320px-Spearmint_Mentha_spicata.jpg',
        category: 'Aromatic Fragrant Plants',
      },
    ],
  },
  {
    category: 'Insect Repellent Plants',
    plants: [
      {
        id: 13,
        name: 'Citronella',
        price: 10.99,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Cymbopogon_citratus_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-051.jpg/240px-Cymbopogon_citratus_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-051.jpg',
        category: 'Insect Repellent Plants',
      },
      {
        id: 14,
        name: 'Marigold',
        price: 5.99,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Tagetes_erecta_flowers.jpg/320px-Tagetes_erecta_flowers.jpg',
        category: 'Insect Repellent Plants',
      },
      {
        id: 15,
        name: 'Catnip',
        price: 7.99,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Nepeta_cataria.jpg/320px-Nepeta_cataria.jpg',
        category: 'Insect Repellent Plants',
      },
      {
        id: 16,
        name: 'Lemon Balm',
        price: 8.49,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Melissa_officinalis_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-096.jpg/240px-Melissa_officinalis_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-096.jpg',
        category: 'Insect Repellent Plants',
      },
      {
        id: 17,
        name: 'Chrysanthemum',
        price: 9.99,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Chrysanthemum_x_morifolium_2.jpg/320px-Chrysanthemum_x_morifolium_2.jpg',
        category: 'Insect Repellent Plants',
      },
      {
        id: 18,
        name: 'Petunias',
        price: 6.49,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/2006-07-14_Petunia_02.jpg/320px-2006-07-14_Petunia_02.jpg',
        category: 'Insect Repellent Plants',
      },
    ],
  },
  {
    category: 'Medicinal Plants',
    plants: [
      {
        id: 19,
        name: 'Aloe Vera',
        price: 11.99,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Aloe_vera_flower_inset.png/320px-Aloe_vera_flower_inset.png',
        category: 'Medicinal Plants',
      },
      {
        id: 20,
        name: 'Echinacea',
        price: 9.99,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Echinacea_purpurea_-_Purpur-Sonnenhut_-_Gesamtansicht_-_001.jpg/240px-Echinacea_purpurea_-_Purpur-Sonnenhut_-_Gesamtansicht_-_001.jpg',
        category: 'Medicinal Plants',
      },
      {
        id: 21,
        name: 'Chamomile',
        price: 8.99,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Chamomile_%40_Westerham.jpg/320px-Chamomile_%40_Westerham.jpg',
        category: 'Medicinal Plants',
      },
      {
        id: 22,
        name: 'Turmeric',
        price: 12.99,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Curcuma_longa_roots.jpg/320px-Curcuma_longa_roots.jpg',
        category: 'Medicinal Plants',
      },
      {
        id: 23,
        name: 'Ginger',
        price: 10.49,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Ingwer_2011.jpg/320px-Ingwer_2011.jpg',
        category: 'Medicinal Plants',
      },
      {
        id: 24,
        name: 'Valerian',
        price: 13.49,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Valeriana_officinalis_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-145.jpg/240px-Valeriana_officinalis_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-145.jpg',
        category: 'Medicinal Plants',
      },
    ],
  },
  {
    category: 'Low Maintenance Plants',
    plants: [
      {
        id: 25,
        name: 'Pothos',
        price: 9.99,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Epipremnum_aureum_31082012.jpg/320px-Epipremnum_aureum_31082012.jpg',
        category: 'Low Maintenance Plants',
      },
      {
        id: 26,
        name: 'ZZ Plant',
        price: 16.99,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Zamioculcas_zamiifolia2.jpg/240px-Zamioculcas_zamiifolia2.jpg',
        category: 'Low Maintenance Plants',
      },
      {
        id: 27,
        name: 'Cast Iron Plant',
        price: 14.99,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Aspidistra_elatior_kz01.jpg/240px-Aspidistra_elatior_kz01.jpg',
        category: 'Low Maintenance Plants',
      },
      {
        id: 28,
        name: 'Jade Plant',
        price: 13.99,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Crassula_ovata_2.jpg/320px-Crassula_ovata_2.jpg',
        category: 'Low Maintenance Plants',
      },
      {
        id: 29,
        name: 'Haworthia',
        price: 8.99,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Haworthia_margaritifera1.jpg/320px-Haworthia_margaritifera1.jpg',
        category: 'Low Maintenance Plants',
      },
      {
        id: 30,
        name: 'Chinese Evergreen',
        price: 15.49,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Aglaonema_commutatum.jpg/240px-Aglaonema_commutatum.jpg',
        category: 'Low Maintenance Plants',
      },
    ],
  },
  {
    category: 'Pet Friendly Plants',
    plants: [
      {
        id: 31,
        name: 'Areca Palm',
        price: 22.99,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Dypsis_lutescens1.jpg/240px-Dypsis_lutescens1.jpg',
        category: 'Pet Friendly Plants',
      },
      {
        id: 32,
        name: 'Calathea',
        price: 17.99,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Calathea_ornata.jpg/320px-Calathea_ornata.jpg',
        category: 'Pet Friendly Plants',
      },
      {
        id: 33,
        name: 'Swedish Ivy',
        price: 8.99,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Plectranthus_australis01.jpg/320px-Plectranthus_australis01.jpg',
        category: 'Pet Friendly Plants',
      },
      {
        id: 34,
        name: 'Parlor Palm',
        price: 19.99,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Chamaedorea_elegans_kz1.jpg/240px-Chamaedorea_elegans_kz1.jpg',
        category: 'Pet Friendly Plants',
      },
      {
        id: 35,
        name: 'Blue Echeveria',
        price: 10.99,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Echeveria_-_Echeveria_elegans.jpg/320px-Echeveria_-_Echeveria_elegans.jpg',
        category: 'Pet Friendly Plants',
      },
      {
        id: 36,
        name: 'Bromeliad',
        price: 14.49,
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Guzmania_lingulata2.jpg/320px-Guzmania_lingulata2.jpg',
        category: 'Pet Friendly Plants',
      },
    ],
  },
];

function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isInCart = cartItems.some((item) => item.id === plant.id);

  const handleAddToCart = () => {
    dispatch(addItem(plant));
  };

  return (
    <div className="plant-card">
      <img src={plant.thumbnail} alt={plant.name} />
      <div className="plant-card-body">
        <p className="plant-name">{plant.name}</p>
        <p className="plant-price">${plant.price.toFixed(2)}</p>
        <button
          className={`add-to-cart-btn${isInCart ? ' added' : ''}`}
          onClick={handleAddToCart}
        >
          {isInCart ? '✓ Added' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}

function ProductList({ onCartClick }) {
  return (
    <div className="product-list-container">
      <h2 style={{ fontSize: '2rem', color: '#1b4332', marginBottom: '1.5rem' }}>
        Our Plant Collection
      </h2>
      {plantCategories.map((categoryGroup) => (
        <div key={categoryGroup.category} className="category-section">
          <h3 className="category-title">{categoryGroup.category}</h3>
          <div className="plants-grid">
            {categoryGroup.plants.map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
