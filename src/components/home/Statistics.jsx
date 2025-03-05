import Avrage from "./Avrage"
import LineOutput from "./LineOutput"
import WorkspaceTable from "./WorkspaceTable"
import UnderperformingWorkspaces from "./UnderperformingWorkspaces"
import HourlyOutputChart from "./HourlyOutputChart"

import { IoMdArrowDropdown } from "react-icons/io";
function Statistics() {
    return (
        <div
            className="2xl:mt-[60px] mt-[30px] bg-maps
                   w-full 2xl:min-h-[calc(100vh-170px)]
                   min-h-[calc(100vh-110px)] 
                   md:p-[30px] sm:p-[20px] p-[17px] md:rounded-[50px] sm:rounded-[30px] rounded-[10px]
                   ">
            <div className="flex justify-between md:mb-[30px] mb-[17px]  items-center">
                <h6 className="text-gray-400  mx-2 text-[14px] font-cairo">Zones / Cutting Zone</h6>
                <button className="rounded-[10px] flex justify-between items-center py-[5px] w-[152px] h-[36px] cursor-pointer text-[14px] px-5 bg-supMaps text-white" >
                    Cutting Zone
                    <IoMdArrowDropdown className="text-[18px]" />
                </button>

            </div>

            <div className="grid  lg:grid-cols-3 md:grid-cols-2 grid-col-1 gap-y-[17px] md:gap-[30px]">
                <LineOutput />
                <UnderperformingWorkspaces />
                <Avrage />
            </div>
            <div className=" md:flex-row flex-col gap-y-5 md:gap-y-0 flex justify-between 
            md:mt-[30px] mt-[17px] text-white items-center gap-x-[30px]">
                <WorkspaceTable />
                <HourlyOutputChart />
            </div>

        </div>
    )
}

export default Statistics