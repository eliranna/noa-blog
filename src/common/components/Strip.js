import styled from "styled-components"
import { colors, fontSizes, maxWidth, spacing } from '../style'

const Strip = styled.div`
    background-color: ${props => props.backgroundColor};
    color: ${props => props.textColor};
    padding: 115px 0px;
    padding-top: ${props => props.noPadding ? '0px' : '115px'};
    padding-bottom: ${props => props.noPaddingBottom ? '0px' : '115px'};
`

const StripTitle = styled.div`
    font-size: ${fontSizes.large};
    text-align: ${props => props.align};
    margin-bottom: 39px;
`

export { 
    Strip,
    StripTitle
} 