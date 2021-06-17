import React from 'react'

export default function MapElement() {

    //karttaelementti bodyyn
    return (
        <div className="container-fluid p-0">
            <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12713.446737839347!2d29.763492862657657!3d62.60079558126167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xecc03c4712b98ce2!2sKerubi!5e0!3m2!1sfi!2sfi!4v1623783823578!5m2!1sfi!2sfi" 
                width="100%" height="300" frameBorder="0" style={{ border: '0' }} title="location" allowFullScreen=""></iframe>
        </div>
    )
}