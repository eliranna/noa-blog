import styled from "styled-components"
import { fontSizes, maxWidth } from '../style'

const Quote = styled.div`
    font-size: ${fontSizes.medium};
    text-align: left;
    font-weight: 300;
    line-height: 40px;
    mark {
        background-color: ${props => props.markColor ? props.markColor : null};
    }
`

export default Quote; 