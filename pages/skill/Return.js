import React from 'react'
import classes from "../../styles/skills.module.css";
import { useRouter } from 'next/router';

import {ArrowLeftIcon} from "@chakra-ui/icons"
function Return() {
  const router = useRouter();

  const handleExit = ()=>{
    router.push('/');
    }
  return (
    <div className={classes.floater} onClick={handleExit}>
      <ArrowLeftIcon w={4} h={4} color="white"/>
     </div>
  )
}

export default Return