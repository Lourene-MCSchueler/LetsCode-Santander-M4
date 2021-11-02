let listAmenities = {
  PARTY_HALL: 'Salão de festas',
  FURNISHED: 'Mobiliado',
  FIREPLACE: 'Lareira',
  POOL: 'Piscina',
  BARBECUE_GRILL: 'Churrasqueira',
  AIR_CONDITIONING: 'Ar-condicionado',
  ELEVATOR: 'Elevador',
  BICYCLES_PLACE: 'Bicicletário',
  GATED_COMMUNITY: 'Condomínio Fechado',
  PLAYGROUND: 'Playground',
  SPORTS_COURT: 'Quadra de esportes',
  PETS_ALLOWED: 'Aceita animal',
  AMERICAN_KITCHEN: 'Cozinha americana',
  TENNIS_COURT: 'Quadra de tênis',
  LAUNDRY: 'Lavanderia',
  GYM: 'Academia',
};

const getLabel = (item) => listAmenities[item];

export function createCard(item) {
  const cards = document.querySelector('.cards');
  const pCity1 = document.querySelector('#city-p1');
  const spanCity = document.querySelector('#city-span');
  const pCity2 = document.querySelector('#city-p2');
  const total = document.querySelector('.total');
  const format = {
    minimumFractionDigits: 0,
    style: 'currency',
    currency: 'BRL',
  };

  const street = item.listing.address.street;
  const number = item.listing.address.streetNumber || '';
  const neighborhood = item.listing.address.neighborhood;
  const city = item.listing.address.city;
  const state = item.listing.address.stateAcronym;
  const numberBedroom = item.listing.bedrooms;
  const numberBathroom = item.listing.bathrooms;
  const numberParkingSpace = item.listing.parkingSpaces;
  const arrayAmenities = item.listing.amenities;
  const formatPrice = Number(item.listing.pricingInfos[0].price).toLocaleString(
    'pt-Br',
    format,
  );

  const box = document.createElement('div');
  const imageDiv = document.createElement('div');
  const infos = document.createElement('div');
  const address = document.createElement('div');
  const name = document.createElement('div');
  const qty = document.createElement('div');
  const area = document.createElement('p');
  const bedroom = document.createElement('p');
  const bathroom = document.createElement('p');
  const parking = document.createElement('p');
  const amenitites = document.createElement('ul');
  const price = document.createElement('div');
  const value = document.createElement('p');
  const fee = document.createElement('p');

  arrayAmenities.forEach((amen) => {
    const li = document.createElement('li');
    let ameni = getLabel(amen);
    li.innerText = ameni;
    amenitites.append(li);
  });

  box.classList.add('box');
  imageDiv.classList.add('image');
  infos.classList.add('infos');
  address.classList.add('address');
  name.classList.add('name');
  qty.classList.add('qty');
  area.classList.add('area');
  bedroom.classList.add('bedroom');
  bathroom.classList.add('bathroom');
  parking.classList.add('parking');
  amenitites.classList.add('amenitites');
  price.classList.add('price');
  value.classList.add('value');
  fee.classList.add('fee');

  cards.append(box);
  box.append(imageDiv, infos);
  infos.append(address, name, qty, amenitites, price);
  qty.append(area, bedroom, bathroom, parking);
  price.append(value, fee);

  pCity1.innerText = `${city} - ${state}`;
  pCity2.innerText = `${city} - ${state}`;
  spanCity.innerText = `${city} - ${state}`;
  imageDiv.innerHTML = `<img src=${item.medias[0].url}>`;
  address.innerText = `${street}, ${number} - ${neighborhood}, ${city} - ${state}`;
  name.innerText = item.link.name;
  area.innerHTML = `<span>${item.listing.usableAreas}</span>&#13217`;
  value.innerHTML = `<span>${formatPrice}</span>`;
  //total.innerText = array.length;
  if (item.listing.pricingInfos[0].monthlyCondoFee) {
    fee.innerHTML = `Condomínio: R$ <span>${item.listing.pricingInfos[0].monthlyCondoFee}</span>`;
  }

  if (numberBedroom > 1) {
    bedroom.innerHTML = `<span>${numberBedroom}</span> Quartos`;
  } else {
    bedroom.innerHTML = `<span>${numberBedroom}</span> Quarto`;
  }

  if (numberBathroom > 1) {
    bathroom.innerHTML = `<span>${numberBathroom}</span> Banheiros`;
  } else {
    bathroom.innerHTML = `<span>${numberBathroom}</span> Banheiro`;
  }

  if (numberParkingSpace > 1) {
    parking.innerHTML = `<span>${numberParkingSpace}</span> Vagas`;
  } else {
    parking.innerHTML = `<span>${numberParkingSpace}</span> Vaga`;
  }
}
