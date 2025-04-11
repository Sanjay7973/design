
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Typography, Button } from '@mui/material'
import React from 'react'
import { data } from '../../data/Announcements.json'
const Announcements = () => {
    return (
        <div className='w-full flex justify-center pt-[54px] pb-[54px]'>
            <div className='w-[75%] h-[410px] grid grid-cols-12 justify-center  gap-13'>
                {/* // first part  */}
                <div className='h-[410px] grid col-span-7 gap-6'>
                    <div className='h-[50xp] flex justify-between'>
                        <Typography variant='h5' color="primary.main" className=' self-center'>
                            Key announcements
                        </Typography>
                        <div>
                            <Button
                                variant="outlined"
                                size="large" sx={{ borderRadius: "100px", padding: "8px 22px", "&:hover": {
                                    borderColor: "#07004D80", 
                                  } }}>
                                More announcement <ArrowForwardIcon />
                            </Button>
                        </div>
                    </div>
                    <div className='h-[336px] grid gap-4'>
                        {
                            data.slice(0, 2).map(() => (
                                <div className='h-[160px] grid grid-cols-2 gap-4'>
                                    <div className='h-[160px] bg-white pt-4 px-6 pb-6 rounded-[20px]'>
                                        <Typography variant='caption'>12 Feb 2025, 4:06pm</Typography>
                                        <Typography variant='h6' color='primary.main' >
                                            Relait Reports Strong Revenue Growth and Expands AI Capabilities
                                        </Typography>
                                    </div>
                                    <div className='h-[160px] bg-white pt-4 px-6 pb-6 rounded-[20px]'>
                                        <Typography variant='caption'>12 Feb 2025, 4:06pm</Typography>
                                        <Typography variant='h6'>
                                            Relait Delivers Record Quarterly Performance and Expands into New Markets
                                        </Typography>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
                {/* // second part  */}
                <div className='h-[410px] col-span-5 grid gap-6 '>
                    <div className='h-[50px] flex justify-between'>
                        <Typography variant='h5' color='primary' className='font-normal self-center'>
                            Latest presentations
                        </Typography>
                        <div>
                        <Button
                                variant="outlined"
                                size="large" sx={{ borderRadius: "100px", padding: "8px 12px", "&:hover": {
                                    borderColor: "#07004D80", 
                                  } }}>
                                More presentations <ArrowForwardIcon />
                            </Button>
                        </div>
                    </div>
                    <div className='h-[336px] grid gap-4'>
                        {
                            data.slice(2, 5).map((val) => (
                                <div className='h-[101px] rounded-tl-[20px] rounded-tr-[50px] rounded-br-[50px] rounded-bl-[20px]  flex justify-between gap-4'>
                                    <div className=''>
                                        <img className='h-[101px] rounded-[20px] object-cover' src={val.img} alt="" />
                                    </div>
                                    <div className='h-[56px] grid gap-1'>
                                        <Typography variant='caption'>{val.date}</Typography>
                                        <Typography variant='h6'>{val.title}</Typography>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Announcements
