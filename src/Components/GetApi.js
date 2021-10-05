import { Button, Grid, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { Component } from 'react'

export default class GetApi extends Component {
    state={
        courses:[]
    }
    FetchCourse=()=>{
        axios.get("https://mylinkurcodesapp.herokuapp.com/getcourses").then(
            (response)=>{
                console.log(response.data)
                this.setState(
                    {
                        courses:response.data
                    }
                )
            }
        )
    }
    render() {
        return (
            <div>
                <Grid container style={{padding:60}} xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Grid item style={{padding:30}} xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Button
                        onClick={this.FetchCourse}
                        variant="contained"
                        fullWidth
                        color="secondary"
                        >GET COURSES</Button>

                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>SL NO</TableCell>
                                        <TableCell>CourseTitle</TableCell>
                                        <TableCell>CourseDescription</TableCell>
                                        <TableCell>CourseDate</TableCell>
                                        <TableCell>CourseDuration</TableCell>
                                        <TableCell>courseVenue</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.courses.map(
                                        (value,index)=>{
                                            return<TableRow>
                                                <TableCell>{index}</TableCell>
                                                <TableCell>{value.courseTitle}</TableCell>
                                                <TableCell>{value.courseDescription}</TableCell>
                                                <TableCell>{value.courseDate}</TableCell>
                                                <TableCell>{value.courseDuration}</TableCell>
                                                <TableCell>{value.courseVenue}</TableCell>
                                            </TableRow>
                                        }
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Grid>

                </Grid>
                
            </div>
        )
    }
}
