

const UnderperformingWorkspaces = () => {
  return (
    <div className=" max-h-[270px] bg-supMaps sm:py-0 py-6 md:rounded-[20px] rounded-[10px]  flex flex-col items-center ">
      <p className="text-white font-cairo md:text-[16px] text-[14px]  mt-[30px]">Underperforming Workspaces</p>
      <div className="w-full h-full items-center flex justify-center">
        <p className="text-red text-[35px] font-bold font-roboto py-2 ">19<span className="text-white  font-light text-[20px] ">/19</span></p>
      </div>


    </div>
  );
};

export default UnderperformingWorkspaces;