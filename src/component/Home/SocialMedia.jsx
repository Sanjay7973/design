import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import XIcon from '@mui/icons-material/X';
import { Typography } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import React from 'react'
import { data } from '../../data/SocailMedia.json'
const SocialMedia = () => {
    return (
        <div className='w-full flex justify-center pt-[54px] pb-[54px]'>
            <div className='w-[75%] h-[446px] grid grid-cols-1 justify-center gap-6'>
                <div className='h-[50px] flex justify-between'>
                    <Typography variant='h5' className=' self-center'>Social media posts</Typography>
                    <div className='flex gap-4 self-center'>
                        <div className='px-[11px] flex gap-2 py-2 rounded-[100px] border'><XIcon />Follow on X</div>
                        <div className='px-[11px] flex gap-2 py-2 border rounded-[100px]'><LinkedInIcon sx={{ color: "#07004d" }} />Follow on LinkedIn
                        </div>
                    </div>
                </div>
                <div className=' grid grid-cols-4 gap-4'>
                    {
                        data.map((val) => (
                            <div className='h-[372px] bg-white rounded-[20px] p-4 gap-6 shadow-md'>
                                <div className='h-[306px] gap-4'>
                                    <div className='flex justify-between gap-2'>
                                        <div className='flex gap-3'>
                                            <div className='self-center'><AcUnitIcon sx={{ fontSize: "30px" }} /></div>
                                            <div>
                                                <Typography variant='caption'>{val.date}</Typography>
                                                <Typography variant='subtitle1'>Relait</Typography>
                                            </div>
                                        </div>
                                        <div className='self-center'><LinkedInIcon /></div>
                                    </div>
                                    {/* text part  */}
                                    <div className='mt-4'>
                                        <Typography variant='body1'>{val.text}</Typography>
                                    </div>
                                    <div className='w-full '>
                                        <img className='w-full h-[172px] rounded-[8px] mt-3' src={val.img}></img>
                                    </div>
                                    {/* end part */}
                                    <div className='flex justify-between mt-3'>
                                        <div className=''>
                                            <FavoriteBorderIcon />{val.like}
                                        </div>
                                        <div className=''><ScreenShareIcon sx={{ backgroundColor: "none" }} />{val.share}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default SocialMedia
