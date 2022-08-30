import styled from "styled-components"
import { maxWidth } from '../style'

const Page = styled.div`
    right: 0;
    left: 0;
    margin-left: auto;
    margin-right: auto;
    max-width: ${props => (props.nerrow ? maxWidth.nerrowPage : maxWidth.page)};
    height: ${props => (props.maxHeight ? '100%' : 'auto')};
`

export default Page; 