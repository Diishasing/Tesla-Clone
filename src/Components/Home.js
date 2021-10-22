import React from 'react'
import styled from "styled-components"
import Section from "./Section"

function Home() {
    return ( <Container >
        <Section 
        title="Model S"
        description="Order Online for Touche Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"

/>
        <Section 
          title="Model Y"
          description="Order Online for Touche Delivery"
          backgroundImg="model-y.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section 
          title="Model 3"
          description="Order Online for Touche Delivery"
          backgroundImg="model-3.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section 
          title="Model X"
          description="Order Online for Touche Delivery"
          backgroundImg="model-x.jpg"
          leftBtnText="Custom Order"
          rightBtnText="Existing Inventory"
        />
        <Section
  title="Solar Panel"
  description="Warrenty for a Lifetime"
  backgroundImg="solar-panel.jpg"
  leftBtnText="Order now"
  rightBtnText="Existing Inventory"
        />
  <Section
  title="Solar for New Roofs"
  description="Warrenty for a Lifetime"
  backgroundImg="solar-roof.jpg"
  leftBtnText="Order now"
  rightBtnText="Existing Inventory"
        />
          <Section
  title="Accessories"
  description="Warrenty for a Lifetime"
  backgroundImg="accessories.jpg"
  leftBtnText="Shop Now"
        />

        </Container>
    )
}

export default Home

const Container = styled.div `height: 100vh;
`