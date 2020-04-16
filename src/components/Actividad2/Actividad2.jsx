import React, {useRef, useState} from 'react'
//Components
import Container from '../Container'
import MainTitle from '../MainTitle'
import DraggableItem from '../Draggable'
import Area from '../AreaDrop'
import ButtonUi from '../ButtonControlUI'
import Modal from '../Generales/Modal'
import ButtonCheck from '../ButtonCheck'
import {ICol, IRow} from '../Grid'
import ButtonRadio from '../ButtonRadio'
// Styles
import styled from 'styled-components'
import styles, { DraggablesContainer, AreasContainer, ProgressbarContainer, UiButtonsContainer } from '../Actividad2/Actividad2_styles'
// import interaction from './Actividad_interactions'
import Tooltip from '../Tooltip'

import Data from './Actividad2_data'
import PreguntaTF from '../PreguntaTF'
import Ilex from '../../App/variables'

const Actividad2_base = ({staticContext, ...props}) => {
const [modalFlag, setModal] = useState(false)
    const [passed, setPassed] = useState(false)
    const [tooltip1, setTooltip1] = useState(false)
    const [tooltip2, setTooltip2] = useState(false)


    const setChecked = (id, button) => {
        const data = Data[id]
        if(button === 0 && data.answer === 'true'){
            data.right = 1
        }else if(button === 1 && data.answer === 'false'){
            data.right = 1
        }else if(button === 2 && data.answer === 'na'){
            data.right = 1
        }else{
            data.right = 0
        }
    }

    const checkActivity = () => {
        var count = 0;
        var right = 0;
        Data.map((data) => {
            if(data.right === 1){
                count ++
                right ++
            }else{
                setPassed(false)
                count ++
            }

            if(right === Data.length){
                setPassed(true)
                setModal(true)
            }else if(count === Data.length){
                setModal(true)
            }
        })
    }

    const list1 = Data.slice(0,10).map((data, i) => {
        return (
            <IRow justify={'center'} className="inline_list" py={0.2} key={i} valign="center" >
                    <ICol w={50.5}> 
                        <p> <strong> {i + 1}. </strong> {data.text} </p>
                    </ICol>
                    <IRow w={44.5} gutters={0.2}>
                        <ButtonRadio setCheckedState={setChecked} arrId={i} buttonId={0} nameb={'radio_button' + i} text={'TRUE'} />
                        <ButtonRadio setCheckedState={setChecked} arrId={i} buttonId={1} nameb={'radio_button' + i} text={'FALSE'} />
                        <ButtonRadio setCheckedState={setChecked} arrId={i} buttonId={2} nameb={'radio_button' + i} text={'N/M'} />
                    </IRow>
            </IRow>
            )
    })
    const list2 = Data.slice(10,20).map((data, i) => {
        return (
            <IRow justify={'center'} className="inline_list" py={0.2} key={i} valign="center" >
                    <ICol w={50.5}> 
                        <p> <strong> {i + 11}. </strong> {data.text} </p>
                    </ICol>
                    <IRow w={44.5} gutters={0.2}>
                        <ButtonRadio  setCheckedState={setChecked} arrId={(i + 10)} buttonId={0} nameb={'radio_button' + (i + 10)} text={'TRUE'} />
                        <ButtonRadio  setCheckedState={setChecked} arrId={(i + 10)} buttonId={1} nameb={'radio_button' + (i + 10)} text={'FALSE'} />
                        <ButtonRadio  setCheckedState={setChecked} arrId={(i + 10)} buttonId={2} nameb={'radio_button' + (i + 10)} text={'N/M'} />
                    </IRow>
            </IRow>
            )
    })
 
    return (
        <Container bgImage='./src/bg_actividad1.png' {...props} id="area" h={40} w={72}>
            
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='After reading the information, answer if the following sentences are true or false' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again'  onClick={ () => {window.location.reload()} } />
            </UiButtonsContainer>
            
          
            <IRow pt={2} w={80} justify="center" align="center">
                <MainTitle color={Ilex.violeta2} size={1.3}>
                    READ TWO TEXTS ABOUT A WOMAN’S STUDY EXPERIENCES, THEN ANSWER IF THE SENTENCES ARE TRUE FALSE OR NOT MENTIONED
                </MainTitle>
            </IRow>
            <IRow pt={4} w={95} align="center" justify="center" >
                <ICol w={50} >
                    {list1}
                </ICol>
                 <ICol w={50}>
                    {list2}
                 </ICol>
            </IRow>
            <IRow pt={2.4} >
                <ICol  onClick={checkActivity} ><ButtonCheck /></ICol>
            </IRow>
            <PreguntaTF visibility={modalFlag}  answers={Data} passed={passed} repeatUrl={'#/actividad2'} finished={passed} />
        </Container>
    )
}
const Actividad2 = styled(Actividad2_base)`${ styles }`
export default Actividad2
