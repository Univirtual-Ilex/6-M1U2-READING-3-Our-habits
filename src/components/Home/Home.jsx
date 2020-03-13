import React from 'react'
import styled from 'styled-components'
import Container from '../Container'
import {ButtonLink} from '../ButtonX'
import estilos_home from './Home_styles'
import {ICol} from '../Grid'



const Home_base = function ({ staticContext, ...props}) { // se le pasan las props para recibir los styled components

    return (
        <Container {...props}  row bgImage="src/bg.png">

                    <div className='bloque-izquierdo'>
                        <div className='bloque-izquierdo-container'>
                            <h1> Our habits </h1>
                            <p>
                            Match the nutritionist's recomendation with the correct description. Then, do the comprehension exercise and choose the most adequate option 
                                <span className='negrilla'> <br/><br/> Time to practice your reading skill!</span>
                           </p>
                            <ButtonLink className="start" to='/actividad1'>Start</ButtonLink>
                        </div>
                    </div>
                    <ICol className='bloque-derecho'>
                        <figure>
                            <img src='./src/cover.png' alt='Logo' />    
                        </figure>

                    </ICol>

        </Container>
    )
}

const Home = styled(Home_base)`
    ${ estilos_home }
`

export default Home