import { FaEdit } from 'react-icons/fa';
import { motion } from 'framer-motion';

const DailyProgress = () => {
  const progressPercentage = 13.6;
  const overallProgress = { current: 33, total: 242 };

  return (
    <div className="bg-supMaps flex flex-col justify-between pb-8 text-white p-4 sm:rounded-[20px] rounded-[10px] md:w-[40%]  h-[261px]">
      <div className="flex items-center justify-between">
        <h3 className="font-cairo font-semibold">Daily Progress</h3>
        <FaEdit className="text-green-text text-[20px] cursor-pointer" />
      </div>

      <div className="text-center mt-6">
        <p className="text-[45px] font-roboto font-bold leading-8">{progressPercentage}%</p>
        <p className="text-secondry-text font-roboto leading-8 mt-2 text-sm">of {`today's`} target</p>
      </div>

      <div className="mt-6">

        <div className="flex justify-between my-2 text-secondry-text text-xs mt-1">
          <span>Overall Progress</span>
          <span className='text-white'>{overallProgress.current}/{overallProgress.total}</span>
        </div>

        <div className="bg-progress rounded-full h-2 w-full">

          <motion.div
            className="bg-main-green h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(overallProgress.current / overallProgress.total) * 100}%` }}
            transition={{ duration: 1 }}
          ></motion.div>
        </div>

      </div>
    </div>
  );
};

export default DailyProgress;
