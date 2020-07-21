import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places = [
    {
      id: '1',
      title: 'Mata-Mata',
      imgURL: 'https://lameco.com/wp-content/uploads/2017/10/Matamata-Hobbiton-2.jpg',
      comments: ['awesome', 'epic!']
    },
    {
      id: '2',
      title: 'Naboo',
      imgURL: 'https://viajes.nationalgeographic.com.es/medio/2019/11/29/plaza-de-espana_f462226f_1243x844.jpg',
      comments: ['awesome', 'epic!']
    }
  ];

  constructor() { }

  getPlaces() {
    return [...this.places];
  }

  getPlace(placeId: string) {
    this.places.find(place => {
      return place.id === placeId;
    });
  }

  addPlaces(title, imgURL) {}

  deletePlaces() {}
}
