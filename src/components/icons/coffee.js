import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Coffee() {
  const coffeeIcon = <FontAwesomeIcon icon={faCoffee} />
  return (
    <div style={{paddingLeft:'5px', paddingRight:'5px'}}>
      {coffeeIcon}
    </div>
  )
}

