import { storageService } from './async-storage.service'
import { userService } from './user.service'

const STAY_KEY = 'stays'
// var gStays = query() || 
createStays()

export const stayService = {
  add,
  query,
  remove,
  getById
}

function query() {
  return storageService.query(STAY_KEY)
}

function remove(stayId) {
  return storageService.delete(STAY_KEY, stayId)
}

async function add(stay) {
  // stay.byUser = userService.getLoggedinUser()
  // stay.aboutUser = await userService.getById(stay.aboutUserId)
  const addedStay = storageService.post(STAY_KEY, stay)
  return addedStay
}

async function createStays() {
  try {
  let stays = await storageService.query(STAY_KEY)
  if (!stays || !stays.length) {
    stays = [
        {
          "_id": "s101",
          "createdAt": 20180203073000,
          "name": "Charming Duplex",
          "type": "apartment",
          "imgUrls": ["https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638304294/London/pexels-olga-lioncat-7247545_i4ltzk.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638304294/London/pexels-john-tekeridis-1428348_ecxyee.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638302854/beds/bed23_ouue4q.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307242/bathroom/pexels-max-vakhtbovych-8143713_ezcurp.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307591/kitchen/pexels-cleyder-duque-3637739_rxabep.jpg"],
          "price": 80.00,
          "summary": "Fantastic duplex apartment with three bedrooms, located in the historic area.",
          "capacity": 8,
          "amenities": [
            "TV",
            "Wifi",
            "Kitchen",
            "Smoking allowed",
            "Pets allowed"
          ],
          "host": {
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png"
          },
          "loc": {
            "city": "London",
            "address": "Oxford, London, UK",
            "lat": -0.1420,
            "lng": 51.5153
          },
          "reviews": [
            {
              "id": "r101",
              "txt": "Very helpful hosts. Cooked traditional...",
              "rate": 4,
              "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
              }
            }
          ],
          "likedByUsers": [{
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png"
          }]
        },
        {
          "_id": "s102",
          "createdAt": 20180203073000,
          "name": "Light and Airy Bedroom in Camden",
          "type": "apartment",
          "imgUrls": ["https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638304300/London/pexels-olga-lioncat-7245356_hg78cw.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638302844/beds/bed11_cjcvih.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307258/bathroom/pexels-max-vakhtbovych-6296924_wwntde.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307586/kitchen/pexels-charlotte-may-5824485_d6zjc8.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638351955/desk/pexels-hristo-sahatchiev-821357_crvrkz.jpg"],
          "price": 76.00,
          "summary": "Our amazing property has easy access to restaurants, cafes, bars and is walking distance from High Street Kensington where you can find a multitude of retail shops",
          "capacity": 8,
          "amenities": [
            "TV",
            "Wifi",
            "Kitchen",
            "Smoking allowed",
            "Pets allowed"
          ],
          "host": {
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png",
          },
          "loc": {
            "city": "London",
            "address": "Camden, London, UK",
            "lat": -0.19359,
            "lng": 51.5276
          },
          "reviews": [
            {
              "id": "r101",
              "txt": "Very helpful hosts. Cooked traditional...",
              "rate": 4,
              "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
              }
            }
          ],
          "likedByUsers": [{
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png"
          }]
        },
        {
          "_id": "s103",
          "createdAt": 20180203073000,
          "name": "Great and Cosy London Studio Flat",
          "type": "apartment",
          "imgUrls": ["https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638304291/London/pexels-lina-kivaka-4482667_srz4ve.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638265491/beds/zz5sniezdreet4wotz2s.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307242/bathroom/pexels-max-vakhtbovych-8143713_ezcurp.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307573/kitchen/pexels-pixabay-279648_tzqm4i.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638302862/beds/bed18_xcwxiq.jpg"],
          "price": 80.00,
          "summary": "Gorgeous double room with access to well stocked kitchen, multiple bathrooms and lovely backyard.",
          "capacity": 8,
          "amenities": [
            "TV",
            "Wifi",
            "Kitchen",
            "Smoking allowed",
            "Pets allowed"
          ],
          "host": {
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png"
          },
          "loc": {
            "city": "London",
            "address": "Soho, London, UK",
            "lat": -0.1369,
            "lng": 51.5125
          },
          "reviews": [
            {
              "id": "r101",
              "txt": "Very helpful hosts. Cooked traditional...",
              "rate": 4,
              "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
              }
            }
          ],
          "likedByUsers": [{
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png"
          }]
        },
        {
          "_id": "s104",
          "createdAt": 20180203073000,
          "name": "London Bridge",
          "type": "apartment",
          "imgUrls": ["https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638304311/London/pexels-connor-danylenko-3075532_ulswcp.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638302846/beds/bed12_e3gt9v.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307272/bathroom/pexels-monstera-6621052_1_nt7sev.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638351955/desk/pexels-hristo-sahatchiev-821357_crvrkz.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638351828/desk/pexels-natasha-fernandez-811575_bcfhuz.jpg"],
          "price": 80.00,
          "summary": "Private room in residential home.",
          "capacity": 8,
          "amenities": [
            "TV",
            "Wifi",
            "Kitchen",
            "Smoking allowed",
            "Pets allowed"
          ],
          "host": {
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png"
          },
          "loc": {
            "city": "London",
            "address": "London Bridge, London, UK",
            "lat": -0.08765,
            "lng": 51.5097
          },
          "reviews": [
            {
              "id": "r101",
              "txt": "Very helpful hosts. Cooked traditional...",
              "rate": 4,
              "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
              }
            }
          ],
          "likedByUsers": [{
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png"
          }]
        },
        {
          "_id": "s105",
          "createdAt": 20180203072000,
          "name": "Boutique studio in downtown",
          "type": "apartment",
          "imgUrls": ["https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638304278/London/pexels-daria-shevtsova-3326213_hwgyif.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638302846/beds/bed14_h9be8a.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307243/bathroom/pexels-deeana-arts-2534572_f9kmq3.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638351899/desk/pexels-pixabay-265004_rqjuru.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638351868/desk/pexels-content-pixie-2967810_wc6cdd.jpg"],
          "price": 80.00,
          "summary": "This brand new modern high quality studio apartment is in the very heart of downtown Budapest.",
          "capacity": 8,
          "amenities": [
            "TV",
            "Wifi",
            "Kitchen",
            "Smoking allowed",
            "Pets allowed"
          ],
          "host": {
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png"
          },
          "loc": {
            "city": "Budapest",
            "address": "Budapest, Hungary",
            "lat": 19.2360,
            "lng": 47.4964
          },
          "reviews": [
            {
              "id": "r101",
              "txt": "Very helpful hosts. Cooked traditional...",
              "rate": 4,
              "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
              }
            }
          ],
          "likedByUsers": [{
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png"
          }]
        },
        {
          "_id": "s106",
          "createdAt": 20180203072000,
          "name": "Buda Castle",
          "type": "castle",
          "imgUrls": ["https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638306588/castle/pexels-vadim-lu-6288487_qegvna.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638306563/castle/pexels-krisztina-papp-2486258_ygynij.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638302868/beds/bed2_svgzpm.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307291/bathroom/pexels-cottonbro-4156285_y7ki7u.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307581/kitchen/pexels-niki-nagy-1128426_o7gs3d.jpg"],
          "price": 100.00,
          "summary": "A unique structure during the Crusader rule in the 11th century",
          "capacity": 8,
          "amenities": [
            "TV",
            "Wifi",
            "Kitchen",
            "Smoking allowed",
            "Pets allowed"
          ],
          "host": {
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png"
          },
          "loc": {
            "city": "Budapest",
            "address": "Budapest, Hungary",
            "lat": 19.2360,
            "lng": 47.4964
          },
          "reviews": [
            {
              "id": "r101",
              "txt": "Very helpful hosts. Cooked traditional...",
              "rate": 4,
              "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
              }
            }
          ],
          "likedByUsers": [{
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png"
          }]
        },
        {
          "_id": "s107",
          "createdAt": 20180203072000,
          "name": "Koko Castle",
          "type": "castle",
          "imgUrls": ["https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638306561/castle/pexels-mike-112284_ixuqaj.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638306563/castle/pexels-krisztina-papp-2486258_ygynij.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638302868/beds/bed2_svgzpm.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307291/bathroom/pexels-cottonbro-4156285_y7ki7u.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307581/kitchen/pexels-niki-nagy-1128426_o7gs3d.jpg"],
          "price": 100.00,
          "summary": "A unique structure during the Crusader rule in the 11th century",
          "capacity": 8,
          "amenities": [
            "TV",
            "Wifi",
            "Kitchen",
            "Smoking allowed",
            "Pets allowed"
          ],
          "host": {
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png"
          },
          "loc": {
            "city": "Budapest",
            "address": "Budapest, Hungary",
            "lat": 19.2360,
            "lng": 47.4964
          },
          "reviews": [
            {
              "id": "r101",
              "txt": "Very helpful hosts. Cooked traditional...",
              "rate": 4,
              "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
              }
            }
          ],
          "likedByUsers": [{
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png"
          }]
        },
        {
          "_id": "s108",
          "createdAt": 20180203072000,
          "name": "Dodo Castle",
          "type": "castle",
          "imgUrls": ["https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638306550/castle/pexels-mike-van-schoonderwalt-5483723_xlzijh.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638306563/castle/pexels-krisztina-papp-2486258_ygynij.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638302868/beds/bed2_svgzpm.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307291/bathroom/pexels-cottonbro-4156285_y7ki7u.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307581/kitchen/pexels-niki-nagy-1128426_o7gs3d.jpg"],
          "price": 100.00,
          "summary": "A unique structure during the Crusader rule in the 11th century",
          "capacity": 8,
          "amenities": [
            "TV",
            "Wifi",
            "Kitchen",
            "Smoking allowed",
            "Pets allowed"
          ],
          "host": {
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png"
          },
          "loc": {
            "city": "Budapest",
            "address": "Budapest, Hungary",
            "lat": 19.2360,
            "lng": 47.4964
          },
          "reviews": [
            {
              "id": "r101",
              "txt": "Very helpful hosts. Cooked traditional...",
              "rate": 4,
              "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
              }
            }
          ],
          "likedByUsers": [{
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png"
          }]
        },
        {
          "_id": "s109",
          "createdAt": 20180203072000,
          "name": "Buda Boat",
          "type": "houseboat",
          "imgUrls": ["https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638305160/boats/pexels-pok-rie-249024_oj83pi.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638305186/boats/pexels-daria-shevtsova-6844404_npkovc.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638305163/boats/pexels-olga-lioncat-7245201_gjncsp.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638305216/boats/pexels-dylan-bueltel-5233236_zfsdx4.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638305189/boats/pexels-michal-lizuch-2882761_qqz7xm.jpg"],
          "price": 100.00,
          "summary": "A boat house on the Danube River",
          "capacity": 8,
          "amenities": [
            "TV",
            "Wifi",
            "Kitchen",
            "Smoking allowed",
            "Pets allowed"
          ],
          "host": {
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png"
          },
          "loc": {
            "city": "Budapest",
            "address": "Budapest, Hungary",
            "lat": 19.1160,
            "lng": 47.6433
          },
          "reviews": [
            {
              "id": "r101",
              "txt": "Very helpful hosts. Cooked traditional...",
              "rate": 4,
              "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
              }
            }
          ],
          "likedByUsers": [{
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png",
          }]
        },
        {
          "_id": "s110",
          "createdAt": 20180203072000,
          "name": "Beautiful Paris",
          "type": "apartment",
          "imgUrls": ["https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307321/Paris/pexels-taryn-elliott-4112236_b2rmym.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307307/Paris/pexels-evgenia-basyrova-5028910_nuvtbo.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638302885/beds/bed3_o5ulld.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307294/bathroom/pexels-max-vakhtbovych-6265831_yy2w5q.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638351955/desk/pexels-hristo-sahatchiev-821357_crvrkz.jpg"],
          "price": 100.00,
          "summary": "Studio apartment in central Paris",
          "capacity": 8,
          "amenities": [
            "TV",
            "Wifi",
            "Kitchen",
            "Smoking allowed",
            "Pets allowed"
          ],
          "host": {
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png",
          },
          "loc": {
            "city": "Paris",
            "address": "Paris, France",
            "lat": 2.3648,
            "lng": 48.8629
          },
          "reviews": [
            {
              "id": "r101",
              "txt": "Very helpful hosts. Cooked traditional...",
              "rate": 4,
              "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
              }
            }
          ],
          "likedByUsers": [{
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png",
          }]
        },
        {
          "_id": "s111",
          "createdAt": 20180203072000,
          "name": "Holiday Castle",
          "type": "castle",
          "imgUrls": ["https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638306522/castle/pexels-bruna-noronha-6270891_vasbpu.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638306530/castle/pexels-jensen-r-1381729_cx2cet.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638302868/beds/bed2_svgzpm.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307291/bathroom/pexels-cottonbro-4156285_y7ki7u.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307581/kitchen/pexels-niki-nagy-1128426_o7gs3d.jpg"],
          "price": 150.00,
          "summary": "A castle from the 16th century near Paris",
          "capacity": 8,
          "amenities": [
            "TV",
            "Wifi",
            "Kitchen",
            "Smoking allowed",
            "Pets allowed"
          ],
          "host": {
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png",
          },
          "loc": {
            "city": "Paris",
            "address": "Paris, France",
            "lat": 2.3648,
            "lng": 48.8629
          },
          "reviews": [
            {
              "id": "r101",
              "txt": "Very helpful hosts. Cooked traditional...",
              "rate": 4,
              "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
              }
            }
          ],
          "likedByUsers": [{
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png",
          }]
        },
        {
          "_id": "s112",
          "createdAt": 20180203072000,
          "name": "Mudy Castle",
          "type": "castle",
          "imgUrls": ["https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638306500/castle/pexels-ryan-smith-955731_g6rzxo.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638306530/castle/pexels-jensen-r-1381729_cx2cet.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638302868/beds/bed2_svgzpm.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307291/bathroom/pexels-cottonbro-4156285_y7ki7u.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638306504/castle/pexels-ioana-motoc-7521473_f4vys7.jpg"],
          "price": 350.00,
          "summary": "A castle from the 17th century near Paris",
          "capacity": 8,
          "amenities": [
            "TV",
            "Wifi",
            "Kitchen",
            "Smoking allowed",
            "Pets allowed"
          ],
          "host": {
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png",
          },
          "loc": {
            "city": "Paris",
            "address": "Paris, France",
            "lat": 2.3648,
            "lng": 48.8629
          },
          "reviews": [
            {
              "id": "r101",
              "txt": "Very helpful hosts. Cooked traditional...",
              "rate": 4,
              "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
              }
            }
          ],
          "likedByUsers": [{
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png",
          }]
        },
        {
          "_id": "s113",
          "createdAt": 20180203072000,
          "name": "Life in Paris",
          "type": "apartment",
          "imgUrls": ["https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307305/Paris/pexels-maria-orlova-4906510_djw0kr.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638304294/London/pexels-john-tekeridis-1428348_ecxyee.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638302854/beds/bed23_ouue4q.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307242/bathroom/pexels-max-vakhtbovych-8143713_ezcurp.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307591/kitchen/pexels-cleyder-duque-3637739_rxabep.jpg"],
          "price": 100.00,
          "summary": "Boutique apartment in Paris",
          "capacity": 8,
          "amenities": [
            "TV",
            "Wifi",
            "Kitchen",
            "Smoking allowed",
            "Pets allowed"
          ],
          "host": {
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png",
          },
          "loc": {
            "city": "Paris",
            "address": "Paris, France",
            "lat": 2.3648,
            "lng": 48.8629
          },
          "reviews": [
            {
              "id": "r101",
              "txt": "Very helpful hosts. Cooked traditional...",
              "rate": 4,
              "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
              }
            }
          ],
          "likedByUsers": [{
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png",
          }]
        },
        {
          "_id": "s114",
          "createdAt": 20180203072000,
          "name": "Life in New York",
          "type": "apartment",
          "imgUrls": ["https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638304898/New%20York/pexels-max-vakhtbovych-7195534_mqb90n.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638304818/New%20York/pexels-vecislavas-popa-3741317_pyvurg.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638304811/New%20York/pexels-pixabay-271618_aqep0f.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638304809/New%20York/pexels-rachel-claire-4857776_cbf5s0.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638304803/New%20York/pexels-max-vakhtbovych-6180668_zneax0.jpg"],
          "price": 140.00,
          "summary": "Boutique apartment in New York",
          "capacity": 8,
          "amenities": [
            "TV",
            "Wifi",
            "Kitchen",
            "Smoking allowed",
            "Pets allowed"
          ],
          "host": {
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png",
          },
          "loc": {
            "city": "New York",
            "address": "New York, USA",
            "lat": -73.9611,
            "lng": 40.7817
          },
          "reviews": [
            {
              "id": "r101",
              "txt": "Very helpful hosts. Cooked traditional...",
              "rate": 4,
              "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
              }
            }
          ],
          "likedByUsers": [{
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png",
          }]
        },
        {
          "_id": "s115",
          "createdAt": 20180203072000,
          "name": "My Quiet Place",
          "type": "apartment",
          "imgUrls": ["https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638304886/New%20York/pexels-max-vakhtbovych-6969866_pajfoi.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638304882/New%20York/pexels-max-vakhtbovych-7195598_dpjlgw.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638302869/beds/bed8_ldjo3u.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307258/bathroom/pexels-max-vakhtbovych-6296924_wwntde.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638351868/desk/pexels-content-pixie-2967810_wc6cdd.jpg"],
          "price": 120.00,
          "summary": "Quiet apartment in New York",
          "capacity": 8,
          "amenities": [
            "TV",
            "Wifi",
            "Kitchen",
            "Smoking allowed",
            "Pets allowed"
          ],
          "host": {
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png",
          },
          "loc": {
            "city": "New York",
            "address": "New York, USA",
            "lat": -73.9611,
            "lng": 40.7817
          },
          "reviews": [
            {
              "id": "r101",
              "txt": "Very helpful hosts. Cooked traditional...",
              "rate": 4,
              "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
              }
            }
          ],
          "likedByUsers": [{
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png",
          }]
        },
        {
          "_id": "s116",
          "createdAt": 20180203072000,
          "name": "Life-style in New York",
          "type": "Luxe",
          "imgUrls": ["https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307307/Paris/pexels-maria-orlova-4916534_jyewl6.jpg","https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307304/Paris/pexels-deeana-arts-2565222_tvdeyy.jpg","https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307307/Paris/pexels-evgenia-basyrova-5028910_nuvtbo.jpg","https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307305/Paris/pexels-maria-orlova-4906510_djw0kr.jpg","https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307282/bathroom/pexels-jonathan-borba-3101547_lxpln7.jpg"],
          "price": 100.00,
          "summary": "House with private pool in the center of New York!",
          "capacity": 8,
          "amenities": [
            "TV",
            "Wifi",
            "Kitchen",
            "Smoking allowed",
            "Pets allowed"
          ],
          "host": {
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png",
          },
          "loc": {
            "city": "New York",
            "address": "New York, USA",
            "lat": -73.9611,
            "lng": 40.7817
          },
          "reviews": [
            {
              "id": "r101",
              "txt": "Very helpful hosts. Cooked traditional...",
              "rate": 4,
              "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
              }
            }
          ],
          "likedByUsers": [{
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png",
          }]
        },
        {
          "_id": "s117",
          "createdAt": 20180203072000,
          "name": "New York Castle",
          "type": "castle",
          "imgUrls": ["https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638306506/castle/pexels-kylene-hashimoto-1334441_u1ixgr.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638306563/castle/pexels-krisztina-papp-2486258_ygynij.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638302868/beds/bed2_svgzpm.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307291/bathroom/pexels-cottonbro-4156285_y7ki7u.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307581/kitchen/pexels-niki-nagy-1128426_o7gs3d.jpg"],
          "price": 100.00,
          "summary": "A castle from the 19th century near New York",
          "capacity": 8,
          "amenities": [
            "TV",
            "Wifi",
            "Kitchen",
            "Smoking allowed",
            "Pets allowed"
          ],
          "host": {
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png",
          },
          "loc": {
            "city": "New York",
            "address": "New York, USA",
            "lat": -73.9611,
            "lng": 40.7817
          },
          "reviews": [
            {
              "id": "r101",
              "txt": "Very helpful hosts. Cooked traditional...",
              "rate": 4,
              "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
              }
            }
          ],
          "likedByUsers": [{
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png",
          }]
        },
        {
          "_id": "s118",
          "createdAt": 20180203080000,
          "name": "Holy City",
          "type": "castle",
          "imgUrls":  ["https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638306503/castle/pexels-super-claudioo-6697718_lxbsuh.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638306563/castle/pexels-krisztina-papp-2486258_ygynij.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638302868/beds/bed2_svgzpm.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307291/bathroom/pexels-cottonbro-4156285_y7ki7u.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307581/kitchen/pexels-niki-nagy-1128426_o7gs3d.jpg"],
          "price": 300.00,
          "summary": "A castle from the 19th century in Jerusalem",
          "capacity": 8,
          "amenities": [
            "TV",
            "Wifi",
            "Kitchen",
            "Smoking allowed",
            "Pets allowed"
          ],
          "host": {
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png",
          },
          "loc": {
            "city": "Jerusalem",
            "address": "Jerusalem, Israel",
            "lat": 31.7779,
            "lng": 35.2330
          },
          "reviews": [
            {
              "id": "r101",
              "txt": "Very helpful hosts. Cooked traditional...",
              "rate": 4,
              "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
              }
            }
          ],
          "likedByUsers": [{
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png",
          }]
        },
        {
          "_id": "s119",
          "createdAt": 20180203080000,
          "name": "Palace of David",
          "type": "luxe",
          "imgUrls": ["https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307305/Paris/pexels-maria-orlova-4906510_djw0kr.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638304294/London/pexels-john-tekeridis-1428348_ecxyee.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638302854/beds/bed23_ouue4q.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307242/bathroom/pexels-max-vakhtbovych-8143713_ezcurp.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307591/kitchen/pexels-cleyder-duque-3637739_rxabep.jpg"],
          "price": 280.00,
          "summary": "Luxurious holiday apartment in the center of Jerusalem",
          "capacity": 8,
          "amenities": [
            "TV",
            "Wifi",
            "Kitchen",
            "Smoking allowed",
            "Pets allowed"
          ],
          "host": {
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png",
          },
          "loc": {
            "city": "Jerusalem",
            "address": "Jerusalem, Israel",
            "lat": 31.7779,
            "lng": 35.2330
          },
          "reviews": [
            {
              "id": "r101",
              "txt": "Very helpful hosts. Cooked traditional...",
              "rate": 4,
              "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
              }
            }
          ],
          "likedByUsers": [{
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png",
          }]
        },
        {
          "_id": "s120",
          "createdAt": 20180203080000,
          "name": "Palace of Solomon",
          "type": "luxe",
          "imgUrls": ["https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638304886/New%20York/pexels-max-vakhtbovych-6969866_pajfoi.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638304882/New%20York/pexels-max-vakhtbovych-7195598_dpjlgw.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638302869/beds/bed8_ldjo3u.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307258/bathroom/pexels-max-vakhtbovych-6296924_wwntde.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638351868/desk/pexels-content-pixie-2967810_wc6cdd.jpg"],
          "price": 290.00,
          "summary": "Luxurious holiday apartment in the center of Jerusalem",
          "capacity": 8,
          "amenities": [
            "TV",
            "Wifi",
            "Kitchen",
            "Smoking allowed",
            "Pets allowed"
          ],
          "host": {
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png",
          },
          "loc": {
            "city": "Jerusalem",
            "address": "Jerusalem, Israel",
            "lat": 31.7779,
            "lng": 35.2330
          },
          "reviews": [
            {
              "id": "r101",
              "txt": "Very helpful hosts. Cooked traditional...",
              "rate": 4,
              "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
              }
            }
          ],
          "likedByUsers": [{
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png",
          }]
        },
        {
          "_id": "s121",
          "createdAt": 20180203080000,
          "name": "Life in the Holy City",
          "type": "apartment",
          "imgUrls": ["https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638304278/London/pexels-daria-shevtsova-3326213_hwgyif.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638302846/beds/bed14_h9be8a.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638307243/bathroom/pexels-deeana-arts-2534572_f9kmq3.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638351899/desk/pexels-pixabay-265004_rqjuru.jpg", "https://res.cloudinary.com/db0wqgy42/image/upload/c_thumb,w_1500,h_1000,g_face/v1638351868/desk/pexels-content-pixie-2967810_wc6cdd.jpg"],
          "price": 180.00,
          "summary": "Boutique apartment in the old city of Jerusalem",
          "capacity": 8,
          "amenities": [
            "TV",
            "Wifi",
            "Kitchen",
            "Smoking allowed",
            "Pets allowed"
          ],
          "host": {
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png",
          },
          "loc": {
            "city": "Jerusalem",
            "address": "Jerusalem, Israel",
            "lat": 31.7779,
            "lng": 35.2330
          },
          "reviews": [
            {
              "id": "r101",
              "txt": "Very helpful hosts. Cooked traditional...",
              "rate": 4,
              "by": {
                "_id": "u102",
                "fullname": "user2",
                "imgUrl": "https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"
              }
            }
          ],
          "likedByUsers": [{
            "_id": "u101",
            "fullname": "Davit Pok",
            "imgUrl": "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_960_720.png",
          }]
        }
    ];

    await storageService.postMany(STAY_KEY, stays)
  }
  return stays
}
catch(err) {
console.log(err, 'error in createStays')
}
}

async function getById(stayId) {
  const stay = await storageService.get(STAY_KEY, stayId)
  // const user = await httpService.get(`user/${stayId}`)
  return stay;
}

