import React,{useState} from "react";
import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import classes from "../../styles/project.module.css";
import { useSpring, animated,config,easings,useTransition } from 'react-spring'
import { useRouter } from 'next/router'
import { motion } from "framer-motion";
const variant = {
  hidden:{opacity:0.5,width:"0%"},
  enter:{opacity:1,width:"100%"},
  exit:{opacity: 0, width: "0%",}
}
const variant1 ={
  hidden:{opacity:0.2},
  enter:{opacity:1},
  exit:{opacity: 0}
}

function Table2() {

  const router = useRouter()
  
  return (
    <motion.div className={classes.projectContainer} >
      <motion.h1
        variants={variant1}
        initial="hidden" 
      animate="enter" 
       exit="exit"
       transition={{duration:1.5}}
       className={classes.heading}
      >Nikhil&quot;s Project</motion.h1>
      <motion.div
       variants={variant} 
       initial="hidden" 
      animate="enter" 
       exit="exit"
       transition={{duration:1.5}}
       className={classes.tableContainer}>
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
        </motion.div>
      </motion.div>
      )
  
}

export default Table2