import mountPhoto from "./images/mount-fuji.jpg"
import australia from "./images/australia.jpg"
import river from "./images/river.jpg"

export default [
    {
        title: "Mount Fuji",
        location: "JAPAN",
        googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
        startDate: "12 June, 2016",
        endDate: "18 June, 2016",
        description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
        imageUrl: mountPhoto,
        id: 1
    },
    {
        title: "Sydney Opera House",
        location: "AUSTRALIA",
        googleMapsUrl: "https://goo.gl/maps/jRhztw6dC2mgcCt88",
        startDate: "22 July, 2019",
        endDate: "2 Aug, 2019",
        description: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings",
        imageUrl: australia,
        id: 2
    },
    {
        title: "Geiranger",
        location: "NORWAY",
        googleMapsUrl: "https://goo.gl/maps/dJRAm19K2CiroYzr8",
        startDate: "01 July, 2021",
        endDate: "09 July, 2021",
        description: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
        imageUrl: river,
        id: 3
    }
]