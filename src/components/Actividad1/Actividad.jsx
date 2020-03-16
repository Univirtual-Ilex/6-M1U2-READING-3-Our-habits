import React, {useState, useRef} from 'react'
//Components
import Container from '../Container'
import MainTitle from '../MainTitle'
import ButtonUi from '../ButtonControlUI'
import {ICol, IRow} from '../Grid'
import ButtonCheck from '../ButtonCheck'
import ButtonAudio from '../ButtonAudio'
// Styles
import styled from 'styled-components'
import styles, { UiButtonsContainer } from './Actividad_styles'
import Ilex from '../../App/variables'

// Data
import Data from './Actividad_data'
import img from './Actividad_img'

import DraggableItem from '../Draggable'

import Modal from '../Generales/Modal'
import Tooltip from '../Tooltip'
const Actividad_base =  ({staticContext,...props}) => {

    const [visible, setvisible] = useState(false)
    const [tooltipTitle, settooltipTitle] = useState()
    const [tooltipText, settooltipText] =  useState()
    const [visible1, setvisible1] = useState(false)
    const [tooltipTitle1, settooltipTitle1] = useState()
    const [tooltipText1, settooltipText1] =  useState()
    const [modalFlag, setModal] = useState(false)
    const [ok, setOk] = useState(false)
    const [err, setErr] = useState(false)
    // Refs de las areas
    const area_0 = useRef()
    const area_1 = useRef()
    const area_2 = useRef()
    const area_3 = useRef()
    const area_4 = useRef()

    const closetooltip = () => {
        setvisible(!visible)
    }
    const closetooltip1 = () => {
        setvisible1(!visible1)
    }
    const setStatusCheck = (id, status, target) => {
        var data = Data[id]
        data.status = status

        if(target){
            if(data.answer === target){
                data.right = 1
            }else{
                data.right = 0
            }
        }else{
            data.right = 0
        }
    }


    const checkActivity = () => {
        var count = 0
        Data.map((data, i) => {
            if(data.right === 1){
                count ++
            }else{
                setErr(true)
                setModal(true)
            }

            if(count === Data.length){
                setOk(true)
                setModal(true)
            }
        })
    }


    return (
        <Container bgImage='./src/bg_actividad1.png' id='area' {...props} h={40} w={80} >
            
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='Click on the button to see the information of each student and the emails' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again'  onClick={ () => {window.location.href = '/actividad1'} }/>
            </UiButtonsContainer>
            <IRow pt={4}>
                <ICol >
                    <MainTitle color={Ilex.violeta2} size={1.5}>
                    MATCH THE NUTRITIONIST’S RECOMMENDATION WITH THE CORRECT DESCRIPTION
                    </MainTitle>  
                </ICol>
            </IRow>
            <IRow>
                <ICol w={50} >
                    <IRow justify='center' align='center' w={100} gutters={0.5} className="box">
                        { img.map((item, index) => {
                            return(
                            <div key={index} className="img-cont">
                                <div className="title-div" > {item.name} </div>
                                <div  className="img"  style={{backgroundImage: `url(${item.img})`}}>
                                    <div className="read_button" onClick={()=> {settooltipTitle(item.name)
                                                                                settooltipText(item.tooltip) 
                                                                                setvisible(!visible)}}>
                                        
                                    </div>
                                </div> 
                                <div className="drag" data-selected={''} data-target={'area_' + index }   target={'area_' + index} id={'area_' + index} ref={eval('area_' + index)}></div>
                            </div>             
                            ) 
                        }) }
                    </IRow>
                </ICol>
                <ICol w={50}>
                    <IRow justify='center' align='center' w={100} gutters={0.5} className="item">
                        
                        { Data.map((item, index) => {
                            return(
                                <div>
                                    <div className="read_button2" onClick={()=> {settooltipTitle1(item.name)
                                                                                settooltipText1(item.tooltip) 
                                                                                setvisible1(!visible)}}></div>
                                    <DraggableItem 
                                elementId={index}
                                key={index} 
                                setStatus={setStatusCheck} 
                                draggable={'draggable_' + index} 
                                idArr={index} 
                                areaDrag={'#area'} 
                                target={item.belongsTo}  
                                ref={[area_0, area_1, area_2, area_3, area_4]}>
                                
                                    <div className="container" key={index}>{item.name}</div>  
                                </DraggableItem>
                                </div>
                                            
                            ) 
                        }) 
                        }

                    </IRow>

                </ICol>
                <Modal visible={modalFlag} ok={ok} err={err} w={25} repeatUrl={'/actividad1'} nxtUrl={'/actividad2'} />
                <IRow pt={5.5} >
                    <ICol pt={1}>
                        <ButtonCheck onClick={checkActivity} text={"NEXT"} />
                    </ICol>
                </IRow>
            </IRow>
            
            <Tooltip visible={visible} closebtn={closetooltip} w={30} pos={"15em, 15em"}>
                <h3>{tooltipTitle}</h3>
                <p>{tooltipText}</p>
            </Tooltip>
            <Tooltip visible={visible1} closebtn={closetooltip1} w={30} pos={"70em, 10em"}>
                <h3>{tooltipTitle1}</h3>
                <p>{tooltipText1}</p>
            </Tooltip>
        </Container>
    )

}

const Actividad = styled(Actividad_base)`
    ${ styles.mistyles }
`


export default Actividad