import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const Box =  styled.div `
    z-index: -1;
    @media (max-width: 824px){
        display: none;
    }
`;

const Box2 =  styled.div `
    display: none;
    @media (max-width: 824px){
        display: flex;
    }
`;
const Box3 =  styled.div `
    display: none;
    @media (max-width: 738px){
        display: flex;
    }
`;

const Background = () => {
    return (
        <>
        <Box>

          <Image 
          
            src="/images/lotu.jpg"
            alt="Image"
            layout="fill"
            objectFit = "cover"
            object-position = "left top"
            quality ="100">
        </Image>


        </Box>

      <Box2>

      <Image 
        src="/images/lotusmobile.jp2"
        alt="Image"
        layout="fill"
        objectFit = "cover"
        object-position = "left top"
        quality ="100">
    </Image>

    </Box2>


    <Box3>

      <Image 
        src="/images/lotusmobilesmall.jp2"
        alt="Image"
        layout="fill"
        objectFit = "cover"
        object-position = "left top"
        quality ="100">
    </Image>

    </Box3>

    </>
    )
}

export default Background
