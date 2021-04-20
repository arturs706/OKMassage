import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const Box =  styled.div `
    z-index: -1;
    border-radius: 2rem;
`;

const BackgroundFooter = () => {
    return (
        <Box>
          <Image 
            src="/images/footercopy.jpg"
            alt="Image"
            layout="fill"
            objectFit = "cover"
            objectPosition = "80% 20%"
            quality ="100">
        </Image>
        </Box>
    )
}

export default BackgroundFooter
