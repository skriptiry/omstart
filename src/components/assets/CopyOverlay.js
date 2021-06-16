import React from 'react'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

export default function CopyOverlay() {


    const omstartLink = 'https://www.omstart.fi'

    const popover = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">Kopioi linkki jaettavaksi</Popover.Title>
            <Popover.Content>
                <input type="link" disabled value={omstartLink} defaultValue={omstartLink} /> 
                <button type="button" className="btn btn-outline-primary ms-1">kopioi</button>
            </Popover.Content>
        </Popover>
    )

    //Custom nappi lippujen ostamiselle 
    return (
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
            <a className="nav-link link-underline" href="#">JAA</a>
        </OverlayTrigger>
    )
}