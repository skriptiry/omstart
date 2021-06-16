import React from 'react'
import '../../styles/TicketButton.scss'

export default function TicketButton() {

    //kide.appiin osoite ostosivulle tms
    const link = '#'

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