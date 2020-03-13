import styled, { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`
    .inline_list{
        color:${Ilex.textos};
        font-family: ${Ilex.font};
    }
    .btn-true{
        &:hover{
            background: #00BC99;
        }
    }
`
export const UiButtonsContainer = styled.div`
    width:6.5em;
    height:3em;
    display: flex;
    justify-content:space-between;
    position:absolute;
    right:${props => props.right || '1.6' }em;
    top:${props => props.top || '1' }em;

`

export default styles
    