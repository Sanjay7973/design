

import { Button, Typography } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField';

const FormPart = () => {
    return (
        <div className='w-full h-[390px] flex justify-center pt-[54px] mb-[54px] bg-[#07004D14] gap-2.5'>
            <div className='w-[75%] h-[319px] flex justify-center'>
                <div className='h-[319px]'>
                    <Typography variant='h5'>Stay informed with Relait</Typography>
                    <Typography variant='body1' sx={{ marginTop: "12px" }}>Be the first to receive ASX announcements, investor insights and<br /> company updates.</Typography>
                    <div className='flex gap-4 mt-4'>
                        <TextField label="First name" variant="outlined" size="medium" />
                        <TextField label="Last name" variant="outlined" size="medium" />
                    </div>
                    <div className='mt-4'>
                        <TextField label="Email" variant="outlined" size="medium" className='w-full' />
                    </div>
                    <div className='mt-4'>
                        <Button 
                        className='w-full text-center'
                            variant="contained"
                            size="large" sx={{borderRadius:"100px", backgroundColor:"#07004D", padding:"8px 22px"}}>
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormPart
