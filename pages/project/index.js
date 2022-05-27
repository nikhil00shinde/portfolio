import React from "react";
import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import Head from 'next/head';
import { Heading } from '@chakra-ui/react';
import classes from "../../styles/project.module.css";
import { useSpring, animated,config,easings } from 'react-spring'



function index(){

  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const props = useSpring({
    from: { width: "20%"  },
    to: { width: "100%" },
    config: {
      duration: 2000,
      mass: 1, tension: 280, friction: 120
    },
    leave:{
      width:"20%",
      opacity:"0.25"
    }
   
  })

  return (
    <>
    <Head>
      <title>Nikhil&quot;s Project</title>
    </Head>
    <animated.div style={props} className={classes.projectContainer}>
    <Heading>Nikhil&quot;s Project</Heading>
    <div className={classes.tableContainer}>
      <TableContainer  
      boxShadow="md" 
      size="lg"
      overflowX="hidden"
      width={[
        '100%', 
        '100%', 
        '90%', 
        '90%', 
      ]}
    >
        <Table variant='mytable'  >
            <Tbody>
              <Tr>
                  <Td color="teal.400" width="30%">Project Name</Td>
                  <Td width="60%">Description</Td>
                  <Td width="20%">Github</Td>
              </Tr>
                {/* to render the projects */}
               {
                   
               }
            </Tbody>
          </Table>
      </TableContainer>
      </div>
    </animated.div>
</>
  )
}

export default index