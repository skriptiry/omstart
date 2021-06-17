import React from 'react'
import '../../styles/TicketButton.scss'

export default function TicketButton() {

    //kide.appiin osoite ostosivulle tms
    const link = 'https://kide.app/events/814170de-afab-4aa6-8256-e4a0718cf39d'

    //Custom nappi lippujen ostamiselle 
    return (
        <div>
            <a className="bn39" href={link}>
                <span className="bn39span">
                    osta liput
                </span>
            </a>
        </div>
    )
}