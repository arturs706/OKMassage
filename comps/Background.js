import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const Box =  styled.div `
    z-index: 0;
`;

const Background = () => {
    return (
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
    )
}

export default Background
