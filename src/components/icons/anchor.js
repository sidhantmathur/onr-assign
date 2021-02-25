import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnchor } from '@fortawesome/free-solid-svg-icons'

export default function Anchor() {
  const anchorIcon = <FontAwesomeIcon icon={faAnchor} />
  return (
    <div style={{paddingLeft:'5px', paddingRight:'5px'}}>
      {anchorIcon}
    </div>
  )
}

