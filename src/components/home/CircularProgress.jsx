import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgress = () => {
  const [progressData, setProgressData] = useState({
    value: 0,   // عدد الأسطر المنفذة
    total: 100, // العدد الكلي
  });

  useEffect(() => {
    // هنا سيموليشن إنك بتجيبي الداتا من API
    const fetchData = async () => {
      // مثلا API بيرجعلك الداتا دي
      const dataFromAPI = { value: 121, total: 275 };
      setProgressData(dataFromAPI);
    };

    fetchData();
  }, []);

  const percentage = (progressData.value / progressData.total) * 100;

  return (
    <>
      <h6 className=" text-center md:text-[14px] text-[12px] text-white md:my-[40px] my-[10px]">Line Output</h6>
      <div className=" flex items-center justify-center ">
        <div className="md:w-37 md:h-37 sm:w-25 sm:h-25 w-20 h-20 md:relative ">
          <CircularProgressbar
            value={percentage}
            text={`${percentage.toFixed(1)}%`}
            styles={buildStyles({
              pathColor: "#00bcd4",
              textColor: "#fff",
              trailColor: "#fff",
              backgroundColor: "#222",
              textSize: "16px",

            })}
          />
          <p className="text-gray-300 mb-2 md:absolute md:top-[90px] md:left-[50px] font-thin text-[14px] text-center mt-2">
            {progressData.value}/{progressData.total}
          </p>
        </div>

      </div>

    </>

  );
};

export default CircularProgress;