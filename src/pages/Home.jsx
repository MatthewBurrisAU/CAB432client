//Importing Modules
import React from 'react'
import { Button } from 'react-bootstrap'

export default function Home() {

  return (
    
    <div className="homeBG">
      <div className="homeTopSpacer"/>
      <div className="home">
        <h1 className="homeTitle">
          Find my favourite Pokemon!
        </h1>
        <p className="homeTitleSig">
          Mashup by: <br/> Matthew Burris (n11133139)
        </p>
        <div className="homeButton">
          <Button 
            size="lg"
            variant="secondary"
            onClick={() => {window.location.host = "/pick-a-colour"}}
            ><b>Get Started</b>
          </Button>
        </div>
      </div>
    </div>
    
  )
}
