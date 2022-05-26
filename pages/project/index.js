import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import Head from 'next/head';
import { Heading } from '@chakra-ui/react';
import classes from "../../styles/project.module.css";
function index(){
  return (
    <>
    <Head>
      <title>Nikhil&quot;s Project</title>
    </Head>
    <div className={classes.projectContainer}>
    <Heading>Nikhil&quot;s Project</Heading>
    <div className={classes.tableContainer}>
      <TableContainer>
        <Table variant='striped' colorScheme='gray'>
              <TableCaption>Imperial to metric conversion factors</TableCaption>
              <Thead>
                <Tr>
                  <Th>Project Name</Th>
                  <Th>Description</Th>
                  <Th>Link</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>inches</Td>
                  <Td>millimetres (mm)</Td>
                  <Td>25.4</Td>
                </Tr>
                <Tr>
                  <Td>feet</Td>
                  <Td>centimetres (cm)</Td>
                  <Td>30.48</Td>
                </Tr>
                <Tr>
                  <Td>yards</Td>
                  <Td>metres (m)</Td>
                  <Td>0.91444</Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th>multiply by</Th>
                </Tr>
              </Tfoot>
          </Table>
      </TableContainer>
      </div>
    </div>
</>
  )
}

export default index