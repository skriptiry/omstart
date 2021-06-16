import React, { useEffect } from 'react'
import '../../styles/CountDown.scss'

export default function MapElement() {

    useEffect(() => {
        // Set the date we're counting down to
        var countDownDate = new Date('September 1, 2021 18:00:00')

        // Update the count down every 1 second
        var x = setInterval(() => {
            // Get todays date and time
            var now = new Date().getTime()

            // Find the distance between now an the count down date
            var distance = countDownDate - now

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24))
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            var seconds = Math.floor((distance % (1000 * 60)) / 1000)

            // Display the result in the element with id="demo"
            document.getElementById('time-counter').innerHTML =
                days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's '

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x)
                document.getElementById('time-counter').innerHTML = 'OHI ON!'
            }
        }, 1000)
    })

    return (
        <div>
            <div className="bg-dark text-secondary px-4 py-5 text-center mb-1 countdown">
                <div className="">
                    <h1 className="display-5 fw-bold text-white text-uppercase">Omstarttiin:</h1>
                    <div className="text-white px-4">
                        <h2 id="time-counter" className="my-4 p-4 text-center"></h2>
                    </div>
                </div>
            </div>
        </div>
    )
}