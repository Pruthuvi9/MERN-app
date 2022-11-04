import React from "react";
import { useParams } from "react-router-dom";

import Placelist from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world.',
    imageUrl: 'https://media.timeout.com/images/101705309/image.jpg',
    address: '20 W 34th St., New York, NY 10001, United States',
    coordinates: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world.',
    imageUrl: 'https://media.timeout.com/images/101705309/image.jpg',
    address: '20 W 34th St., New York, NY 10001, United States',
    coordinates: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: 'u2',
  },
]

const UserPlaces = () => {
  
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);

  return <Placelist items={loadedPlaces} />;
};

export default UserPlaces;