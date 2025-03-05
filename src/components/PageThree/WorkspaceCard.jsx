import { useState, useEffect } from "react";
import img from "../../assets/Rectangle 58.svg"
const WorkspaceCard = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });


  const formattedTime = currentDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  return (
    <div className="md:flex justify-between text-white p-4 rounded-lg w-full mx-auto">
      <div className="md:w-[50%]">
        <div className="font-cairo 2xl:font-bold font-semibold text-[14px] text-secondry-text">
          Zones / Cutting Zone / Plant 1 / Line 6 Workspace 17
        </div>

        <div className="lg:flex items-center justify-between mt-2">
          <h2 className="2xl:text-[24px] leading-[45px] md:text-[20px] text-[18px] ">Line 6 Workspace 17</h2>
          <span className="text-secondry-text text-sm">{formattedDate}</span>
          <div className="md:flex-row flex-col gap-y-5 flex md:items-center space-x-2">
          
            <div className="text-secondry-text text-sm flex items-center gap-x-2">
            <div className="w-2 h-2 bg-main-green rounded-full"></div>
              {formattedTime}</div>
            <div className="bg-button-green w-[103px] h-[30px] rounded-full text-green-text text-xs px-2 py-1 flex justify-center items-center cursor-pointer">Day Shift</div>
          </div>
        </div>
      </div>

      <div className="mt-4 md:w-[40%]">
        <img
          src={img}
          alt="Camera Feed"
          className=" h-auto w-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default WorkspaceCard;
