import React from 'react'

import { Box,Heading,SimpleGrid, GridItem,Image ,Text} from '@chakra-ui/react'

import style from './skills.module.css'

const Tech_Stack = [
  
  {img : 'HTML.png', text : 'HTML 5', w : '70px', w2 : '40px' },
  
  {img : 'CSS.png', text : 'CSS 3', w : '80px', w2 : '46px'},

  {img : 'Javascript.png', text : 'Javascript', w : '80px', w2 : '46px'},

  {img : 'React.png', text : 'React', w : '80px', w2 : '40px'},


]



const Skills = () => {
  return (
    <Box  border="2px solid rgb(224, 242, 241)" id = 'skills'>
      

      <Heading mt = '90px' color = '#1A202C;' fontSize={35}><Text as = 'span' color = '#1A202C'>My</Text> Skills</Heading>

      <SimpleGrid  columns = {{base : '2','529px' : '3','848px':'4'}} spacing={'20px'} mt = '50px' >

              { Tech_Stack.map((el,i) => { 
              
                  return <GridItem  key = {Math.random()} className="skills-card" border = '1px solid rgb(0, 255, 191)' borderRadius={'10px'} bg = 'rgb(187, 222, 251)'>

                  <Box p = '15px' display={'flex'} justifyContent = 'center'>

                  <Image id = {style[`animate${i}`]} _hover = {{cursor : 'pointer'}} w = {{base : el.w2,'685px' : el.w}} className="skills-card-img" src = {el.img}></Image>

                  </Box>

                  <Text fontSize={'20'} mb = '10px' className="skills-card-name">{el.text}</Text>


                </GridItem>
              })
              
              }



      </SimpleGrid>




    </Box>
  )
}

export default Skills