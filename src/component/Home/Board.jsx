import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react'
import { data } from "../../data/board.json"

const Board = () => {
    return (
        <div className='w-full flex justify-center pt-[54px] pb-[54px] '>
            <div className='w-[75%] h-[354px] grid grid-cols-12 justify-center gap-13'>
                {/* // first part  */}
                <div className='h-[258px] grid gap-6 col-span-6 '>
                    <div className=' h-[50px] flex justify-between'>
                        <Typography variant='h5' color="primary" className=' self-center'>
                            Board
                        </Typography>
                    </div>
                    <div className='h-[184px]'>
                        <div className=' grid grid-cols-2 gap-2'>
                            {
                                data.slice(0, 4).map((val, index) => (
                                    <div className='w-full bg-[#07004D14] p-2 pr-3 rounded-[50px]'>
                                        <div className='flex gap-2'>
                                            <img src={val.img} style={{
                                                borderRadius: '50%',
                                                backgroundColor: "#ADA0FF",
                                            }} width={72} height={72} />
                                            <div className='w-full flex justify-between items-center pl-1'>
                                                <div className=''>
                                                    <Typography variant='subtitle1' className=''>{val.name}</Typography>
                                                    <Typography variant='caption' className='h-[20px]'>{val.position}</Typography>
                                                </div>
                                                <div className='flex justify-end'>
                                                    <XIcon />
                                                    <LinkedInIcon sx={{ color: "#386ec4" }} />
                                                    <OpenInNewIcon />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {/* // second part  */}
                <div className='h-[354px] grid gap-6 col-span-6 '>
                    <div className=' flex justify-between'>
                        <Typography variant='h5' color="primary.main" >
                            Management
                        </Typography>
                        <div>
                            <button className='rounded-[100px]  py-2 px-[22px] border-[1px] h-[50px]' color=''>Visit team page<ArrowForwardIcon className='ml-1' /></button>
                        </div>
                    </div>
                    <div className='h-[280px]'>
                        <div className='grid grid-cols-2 gap-2'>
                            {
                                data.map((val, index) => (
                                    <div className='w-full bg-[#07004D14] p-2 pr-3 rounded-[50px]'>
                                        <div className='flex gap-2'>
                                            <img src={val.img} style={{
                                                borderRadius: '50%',
                                                backgroundColor: "#ADA0FF",
                                            }} width={72} height={72} />
                                            <div className='w-full flex justify-between items-center pl-1'>
                                                <div className=''>
                                                    <Typography variant='subtitle1' className=''>{val.name}</Typography>
                                                    <Typography variant='caption' className='h-[20px]'>{val.position}</Typography>
                                                </div>
                                                <div className='flex justify-end'>
                                                    <XIcon />
                                                    <LinkedInIcon sx={{ color: "#386ec4" }} />
                                                    <OpenInNewIcon />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Board
