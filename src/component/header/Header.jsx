import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import TabPanel from "./TabPanel";

const Header = ({ isExpanded }) => {
    return (
        <div className="fixed top-0 w-full p-4 pb-0 bg-[#f5f5f8] z-50">
            {
                isExpanded ? (
                    <div className="h-[367px] relative rounded-[20px] flex flex-col justify-between duration-1000 ease-in-out p-4" style={{ backgroundImage: "url(https://t3.ftcdn.net/jpg/03/10/46/56/360_F_310465670_Wy4QCEfxYU2ziHjbeZsNAumKhaZzZS1w.jpg)" }}>


                        {/* // image bg opactity  */}
                        <div className="bg-blue-900 rounded-[20px] absolute inset-0 opacity-75"></div>

                        <div className='relative px-2 flex justify-between text-white'>
                            {/* first part  */}
                            <div className="text-3xl font-bold">
                                <AcUnitIcon className="mb-1 mr-1" /><span >Relai</span>
                            </div>
                            {/* // second part  */}
                            <div className='flex gap-4'>
                                <div>
                                    <h1 className='text-sm'>ASX:RLAIT</h1>
                                    <span className="text-[20px] font-bold">$1.06<span className="w-[24px] text-green-700"><ArrowDropUpIcon className="text-green-600" />2%</span>
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <AccountCircleIcon sx={{ fontSize: '40px' }} />
                                    </span>
                                </div>
                            </div>


                        </div>
                        {/* // center part  */}
                        <div className="relative text-white self-center text-6xl">
                            Relait Investor Centre
                        </div>
                        {/* // nav part  */}
                        <div className="relative text-white ">
                            <div className=" h-[45px] flex gap-3.5 justify-center items-center  rounded-[10px]  pr-[24px] pl-[24px]">
                                <TabPanel />
                            </div>

                        </div>
                    </div>
                ) :
                    // else part 
                    (
                        <div className="flex h-[86px] p-10  duration-1000 ease-in-out justify-between bg-[#07004D]
                    rounded-[20px]">
                            {/* // logo part  */}
                            <div className="text-3xl self-center font-bold text-white">
                                <AcUnitIcon className="mb-1 mr-1" /><span >Relai</span>
                            </div>
                            {/* // second part  */}
                            <div className=" self-center">
                                <TabPanel />
                            </div>
                            {/* // third part  */}
                            <div className='flex gap-4 self-center text-white'>
                                <div>
                                    <h1 className='text-sm'>ASX:RLAIT</h1>
                                    <span className="text-[20px] font-bold">$1.06<span className="w-[24px] text-green-700"><ArrowDropUpIcon className="text-green-600" />2%</span>
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        <AccountCircleIcon sx={{ fontSize: '40px' }} />
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
            }
        </div>
    );
};

export default Header;
