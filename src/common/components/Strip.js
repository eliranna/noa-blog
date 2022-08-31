import styled from "styled-components"
import { colors, fontSizes, maxWidth, spacing } from '../style'

const Strip = styled.div`
    background-color: ${props => props.backgroundColor};
    color: ${props => props.textColor};
    padding: ${spacing.spacing32} 0px;
    padding-top: ${props => props.noPadding ? '0px' : spacing.spacing32};
`

const StripTitle = styled.div`
    font-size: ${fontSizes.large};
    text-align: ${props => props.align};
    margin-bottom: ${spacing.spacing16};
`

export { 
    Strip,
    StripTitle
} 