import { Button, Grid, TextField } from '@mui/material'
import axios from 'axios'
import React, { Component } from 'react'

export default class Postapi extends Component {
    state={
    
            courseTitle:"",
            courseDescription:"",
            courseDate:"",
            courseDuration:"",
            courseVenue:""
        
     }
     onHandle=(event)=>{
         this.setState(
             {
                 [event.target.name]:event.target.value
             }
         )
     }
     onRead=()=>{
         console.log(this.state)
         axios.post("https://mylinkurcodesapp.herokuapp.com/addcourse",this.state).then(
             (response)=>{
                 console.log(response.data)
                 if(response.data.status=="success"){
                   alert("Successfully added")
                 }
                 else{
                     alert("Something went wrong")
                 }
             }
         )
         
        
         
     }

     

    render() {
        return (
            <div>
                
                <Grid container style={{padding:40}} xs={12} sm={12} md={12} lg={12} xl={12}>
                
                    <Grid item style={{padding:20}} xs={12} sm={6} md={6} lg={6} xl={6}>
                    
                        <TextField
                        label="Course Title"
                        fullWidth
                        margin="normal"
                        name="courseTitle"
                        variant="outlined"
                        onChange={this.onHandle}
                        />
                        

                    </Grid>
                    <Grid item style={{padding:20}} xs={12} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                        label="CourseDescription"
                        name="courseDescription"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        onChange={this.onHandle}
                        />

                    </Grid>
                    <Grid item style={{padding:20}} xs={12} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                        label="CourseDate"
                        fullWidth
                        name="courseDate"
                        type="date"
                        margin="normal"
                        variant="outlined"
                        onChange={this.onHandle}
                        />

                    </Grid>
                    <Grid item style={{padding:20}} xs={12} sm={6} md={6} lg={6} xl={6}>
                        <TextField
                        label="CourseDuration"
                        fullWidth
                        name="courseDuration"
                        margin="normal"
                        variant="outlined"
                        onChange={this.onHandle}
                        />

                    </Grid>
                    <Grid item style={{padding:20}} xs={12} sm={6} md={12} lg={6} xl={6}>
                        <TextField
                        label="CourseVenue"
                        fullWidth
                        name="courseVenue"
                        margin="normal"
                        variant="outlined"
                        onChange={this.onHandle}
                        />

                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Button
                        onClick={this.onRead}
                        variant="contained"
                        fullWidth
                        color="success"
                        >ADD COURSE</Button>

                    </Grid>

                </Grid>

            
            
                
            </div>
        )
    }
}
