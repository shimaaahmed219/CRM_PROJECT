/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const KPIBox = ({ title, value, subtext, color, icon }) => {
    return (
        <>


            <div className="flex flex-col items-center justify-center  2xl:h-[202px] h-[180px] bg-supMaps text-white p-4 rounded-[15px] 2xl:rounded-[20px] ">
              <div className=" w-full">  {icon}</div>
                <h3 className=" text-main-text font-cairo mb-5 font-bold">{title}</h3>
                <div className="text-center">
                    <p className={`text-2xl font-bold ${color} font-bold 2xl:text-[48px] text-[35px] lg:text-[40px] font-roboto`}>{value}</p>
                    <p className="text-xs text-target mt-[5px]">{subtext}</p>
                </div>

            </div>
        </>

    );
};

export default KPIBox;