import React from 'react'
import styled from "styled-components";

function Footer() {
    return (
        <div>
            <ul>
                <li>Tesla © 2021</li><li>Privacy and Legal</li>
                <li>Engage</li>
                <li>Contact</li>
                <li>Careers</li>


            </ul>
        </div>)
}
export default Footer;
const div = styled.div`
display: flex;
  align-items: center;
  box-sizing: border-box;
    color: gray;
    scroll-behavior: smooth;
  flex-flow: row nowrap;
  justify-content: center;
  padding-block-end: 7
px
    !important;
    font-size: 20px;
`