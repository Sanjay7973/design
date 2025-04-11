

import { Typography } from '@mui/material'
import React from 'react'
import { data } from '../../data/InvestorQuestion.json'
const InvestorQuestion = () => {
    return (
        <div className='w-full flex justify-center pt-[54px] pb-[54px]'>
            <div className='w-[75%] h-[388px] grid grid-cols-1 justify-center gap-4'>
                {/* // first part  */}
                <div className='flex justify-between'>
                    <div>
                        <Typography variant='h5'>Investor questions</Typography>
                    </div>
                </div>
                {/* // second part  */}
                <div className='grid h-[300px] grid-cols-3 gap-4'>
                    {
                        data.map((val) => (
                            <div className='rounded-[20px] bg-[#07004D14] px-8 py-6 '>
                                <div className=''>
                                    <Typography variant='caption'>{val.dayEgo}</Typography>
                                    <Typography variant='h6' sx={{ marginTop: "8px" }}>{val.text1}</Typography>
                                </div>
                                <div>
                                    <Typography variant='body1' sx={{ marginTop: "12px" }}>{val.text2}</Typography>
                                    {/* // read more part  */}
                                    <span className='py-1.5 px-2 font-bold rounded-[50px] grid gap-2'>
                                        {val.readMore}
                                    </span>
                                </div>
                            </div>
                        ))
                    }

                </div>

            </div>
        </div>
    )
}

export default InvestorQuestion
