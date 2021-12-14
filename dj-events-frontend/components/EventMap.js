import Image from 'next/image'
import { useState, useEffect } from 'react'
import ReactMapGl, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import Geocode from 'react-geocode'

export default function EventMap() {
  const [lat, setLat] = useState(null)
  const [lng, setLng] = useState(null)
  const [loading, setLoading] = useState(true)
  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    width: '100%',
    height: '500px',
    zoom: 12,
  })

  //   useEffect(() => {
  //     Geocode.fromAddress('Eiffel Tower').then((res) => {
  //       const { lat, lng } = res.results[0].geometry.location
  //       console.log(lat, lng)
  //     }),
  //       (err) => {
  //         console.error(err)
  //       }
  //   })

  //   Geocode.setApiKey(process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY)

  return <div>Map Component Goes Here</div>
}
