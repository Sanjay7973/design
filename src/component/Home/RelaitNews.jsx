
import { Typography } from '@mui/material'
import React from 'react'
import { data } from '../../data/RelaitNews.json'
const RelaitNews = () => {
    return (
        <div className='w-full flex justify-center pt-[54px] '>
            <div className='w-[75%] h-[540px] grid grid-cols-1 justify-center '>
                <div className='flex justify-between'>
                    <Typography variant='h5'>Relait in the news</Typography>
                </div>
                <div className=' grid grid-cols-4 gap-4'>
                    {
                        data.map((val) => (
                            <div className='h-[420px] shadow-md bg-white rounded-[16px] gap-6  hover:translate-y-[-20px] transition-all duration-300'>
                                <div className='h-[306px] gap-4'>
                                    <div className='w-full'>
                                        <img className='w-full h-[172px] rounded-[8px]' src={val.img}></img>
                                    </div>
                                    <div className='p-4 pt-0 mt-1'>
                                        <Typography variant='caption'>{val.date}</Typography>
                                        <Typography variant='h6' sx={{ marginTop: "2px" }}>{val.text1}</Typography>
                                        <Typography variant='body1' sx={{ marginTop: "4px" }}>{val.text2}</Typography>
                                        <div className='flex gap-3 mt-4'>
                                            <div className=''>
                                                <img className='w-[40px] h-[40px] rounded-[8px]' src={val.img2}></img>
                                            </div>
                                            <div className='self-center'>
                                                <Typography variant='subtitle1'>{val.market}</Typography>
                                            </div>
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

export default RelaitNews
