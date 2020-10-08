import React from 'react'
import styled from 'styled-components'


const StyledWrapper = styled.div`
    display: ${pr => pr.theme.display.display};
    background-color: ${pr => pr.theme.bgColor};
    color: ${pr=> pr.theme.textColor};
    margin: ${pr => pr.theme.margin.large};
    border: 2px solid ${pr => pr.theme.borderColor};
    border-radius: 20px;
    `

const InfoBlock = styled.div`
    display: ${pr => pr.theme.display.display};
    flex-direction: ${pr => pr.theme.display.flexdir};
    margin: ${pr => pr.theme.margin.large};

h1 {
    color: ${pr => pr.theme.titlesColor};
    font-size: ${pr => pr.theme.h1.fontsize};
    width: ${pr => pr.theme.h1.width};
}

p {
    color: ${pr => pr.theme.textColor};

}
`

const BoldedP = styled.p`
    font-weight: ${pr => pr.bold ? 'initial' : 'bold'};
`

export default function displayHeader(props) {

    const { imgInfo, title, copyright, date, imageDesc, bold } = props

    return (
        <StyledWrapper>
            <img src={imgInfo} alt='Space'></img>
            <InfoBlock>
                <h1>{title}</h1>
                <BoldedP bold={bold}>Date: {date}</BoldedP>
                <p>{imageDesc}</p>
                <BoldedP bold={bold}>Copyright: {copyright}</BoldedP>
            </InfoBlock>
        </StyledWrapper>
    )
}
