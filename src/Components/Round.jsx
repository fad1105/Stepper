import {
  Card,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@material-ui/core";
import React from "react";

export default function Round(props) {
  return (
    <Card>
      <h3>
        <center>{props.round.name}</center>
      </h3>
      <TableContainer>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>
                <b>Time</b>
              </TableCell>
              <TableCell>
                {/* <TableCell style={{"width":"100%"}}><b>Time</b></TableCell>
          <TableCell style={{"width":"100%"}}> */}
                <center>{props.round.time}</center>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <b>Panel</b>
              </TableCell>
              <TableCell>
                <center>{props.round.panel}</center>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <b>Video Conferencing Link</b>
              </TableCell>
              <TableCell>
                <center>
                  <a href={props.round.videoConferencingLink}>
                    {props.round.videoConferencingLink}
                  </a>
                </center>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
