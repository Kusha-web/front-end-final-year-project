import React from 'react'
import { Navigate } from 'react-router-dom';

function ProtectRoute({ component: Component, token}) {
  return (
    token !== undefined ? (<Component tokenId={token}/>) : (<Navigate to='/signin' replace/>)
  )
}

export default ProtectRoute;