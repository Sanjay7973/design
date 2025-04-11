
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Typography, Button } from '@mui/material'
import React from 'react'

const Home = () => {
    return (
        <div className='w-full flex justify-center pt-[54px] '>
            <div className='w-[75%] h-[654px] grid grid-cols-2 justify-center gap-[62px]'>
                <div className=' h-[654px] text-start pt-4 pb-4 grid rounded-[20px]'>
                    <Typography variant='h4' color='primary' className='h-[40px]text-start'>Investing in Relait</Typography>
                    <Typography variant='body1'>At [Company Name], we are focused on delivering sustainable growth and long-term value. With a strong track record of execution, high-quality assets, and a clear strategy for the future, we are well-positioned to capitalise on new opportunities and drive shareholder returns.</Typography>
                    <Typography variant='body1'>Our commitment to operational excellence, innovation, and responsible growth underpins everything we do. As we continue to expand, we invite you to explore our latest updates and see why [Company Name] is an exciting investment opportunity.</Typography>
                    <Typography variant='body1'>At [Company Name], we are focused on delivering sustainable growth and long-term value. With a strong track record of execution, high-quality assets, and a clear strategy for the future, we are well-positioned to capitalise on new opportunities and drive shareholder returns.</Typography>
                    <Typography variant='body1'>Our commitment to operational excellence, innovation, and responsible growth underpins everything we do. As we continue to expand, we invite you to explore our latest updates and see why [Company Name].</Typography>
                    {/* // logo part  */}
                    <div className='w-[120px] h-[64px] rounded-[110px] grid grid-cols-2 pt-4 gap-2'>
                        <div>
                            <AccountCircleIcon sx={{ fontSize: '46px' }} />
                        </div>
                        <div className='w-[110px] h-[48px] '>
                            <Typography variant='subtitle1' className='h-[28px]'>Charlie Calzoni</Typography>
                            <Typography variant='caption' className='h-[20px]'>CEO, Relait</Typography>
                        </div>
                    </div>
                    {/* // button  */}
                    <div className='mt-2 mb-2 '>
                        <Button
                            variant="contained"
                            size="large" sx={{borderRadius:"100px", backgroundColor:"#07004D",padding:"8px 22px"}}>
                            Join our investor community
                        </Button>
                    </div>

                </div>
                <div className='h-[546px] pt-[82px] grid gap-4'>
                    <img
                        className="rounded-[20px]  grid gap-5 h-[464px] object-cover"
                        src="https://t3.ftcdn.net/jpg/03/10/46/56/360_F_310465670_Wy4QCEfxYU2ziHjbeZsNAumKhaZzZS1w.jpg"
                        alt="Background"
                    />
                </div>
            </div>
        </div>

    )
}

export default Home
