import React from "react"
import locLogo from "../images/location-logo.jpg"


export default function Card(props) {
    return(
        <div className='cards'>
                <img src={`${props.item.imageUrl}`} className='cards-img-loc'/>
                <div className="column-directiom">
                <div className="cards-loc-stats">
                    <img src={locLogo} className="cards-img-logo" />
                    <p className='location-txt'>{props.item.location}</p>
                    <a href={`${props.item.googleMapsUrl}`} className="maps-txt" target='_blank'>View on Google Maps</a>
                </div>
                <h1 className="cards-title">{props.item.title}</h1>
                <div className="date-stats">
                    <p>{props.item.startDate}</p>
                    <p> - </p>
                    <p>{props.item.endDate}</p>
                </div>
                <p className="card-desc">{props.item.description}</p>
            </div>
        </div>  
    )
}