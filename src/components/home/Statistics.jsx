import Avrage from "./Avrage"
import LineOutput from "./LineOutput"
import WorkspaceTable from "./WorkspaceTable"
import UnderperformingWorkspaces from "./UnderperformingWorkspaces"
import HourlyOutputChart from "./HourlyOutputChart"


function Statistics() {
    return (
        <div
            className="2xl:mt-[60px] mt-[30px] bg-maps
                   w-full 2xl:min-h-[calc(100vh-170px)]
                   min-h-[calc(100vh-110px)] 
                   md:p-[30px] sm:p-[20px] p-[17px] rounded-[50px]
                   ">
            <h6 className="text-gray-400 text-[12px]  my-5 mx-2 font-cairo">Zones / Cutting Zone</h6>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 gap-y-[17px] md:gap-[30px]">
                <LineOutput />
                <UnderperformingWorkspaces />
                <Avrage />
            </div>
            <div className=" md:flex-row flex-col gap-y-5 md:gap-y-0 flex justify-between 
            md:mt-[30px] mt-[17px] text-white items-center gap-x-[30px]">
                <WorkspaceTable />
                <HourlyOutputChart/>
            </div>

        </div>
    )
}

export default Statistics