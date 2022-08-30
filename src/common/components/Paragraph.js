import styled from "styled-components"
import { fontSizes, maxWidth } from '../style'

const Paragraph = styled.div`
    font-size: ${fontSizes.normal};
    text-align: ${props => props.align};
    line-height: 28px;
`

export default Paragraph; 