import styled from "styled-components"
import { maxWidth } from '../style'

const Page = styled.div`
    right: 0;
    left: 0;
    margin-left: auto;
    margin-right: auto;
    max-width: ${props => (props.nerrow ? maxWidth.nerrowPage : (props.wide ? maxWidth.widePage : maxWidth.page))};
    height: ${props => (props.maxHeight ? '100%' : 'auto')};
    max-width: ${props => props.width ? props.width : null};
`

export default Page; 