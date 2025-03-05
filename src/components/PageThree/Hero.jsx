import DailyProgress from "./DailyProgress";
import HourlyOutputChart from "./HourlyOutputChart";
import KPIBox from "./KPIBox";
import WorkspaceCard from "./WorkspaceCard";
import { FaEdit } from 'react-icons/fa';

export default function Hero() {
    return (
        <div
            className="2xl:mt-[60px] mt-[30px] bg-maps
           w-full 2xl:min-h-[calc(100vh-170px)]
           min-h-[calc(100vh-110px)] 
           md:p-[20px] sm:p-[19px] p-[17px] md:rounded-[50px] sm:rounded-[30px] rounded-[10px]
           ">
            <WorkspaceCard />
            <div className="mt-20px gap-x-[20px] md:flex-row flex flex-col justify-between md:gap-y-0 gap-y-[20px] ">
                <DailyProgress />
                <HourlyOutputChart />
            </div>
            <div className="grid xl:grid-cols-5 sm:grid-cols-2 gap-5 my-[20px]">

                <KPIBox
                    title="Pieces Lost"
                    value="-257"
                    subtext="Behind ideal output: 250"
                    color="text-red-500"
                />
                <KPIBox
                    title="Efficiency"
                    value="11.4%"
                    subtext="Target: 85%"
                    color="text-red-500"
                />
                <KPIBox
                    title="Electrical Usage"
                    value="2.5"
                    subtext="Standard: 22.0"
                    color="text-red-500"
                />
                <KPIBox
                    title="Cycle Time"
                    value="129.2s"
                    subtext="Standard: 165.5s"
                    color="text-main-green"
                    icon={<FaEdit className="text-green-text ms-auto text-[20px] cursor-pointer" />}
                />
                <KPIBox
                    title="Rank"
                    value="19"
                    subtext="of 22"
                    color="text-yellow-400"
                />
            </div>

            <div className="grid xl:grid-cols-4 sm:grid-cols-2 gap-5 my-[20px]">

            <KPIBox
                    title="Setup Time"
                    value="-257"
                    subtext="Standard: 165.0s"
                    color="text-red-500"
                    icon={<FaEdit className="text-green-text ms-auto text-[20px] cursor-pointer" />}
                />
                <KPIBox
                    title="Actual Working Time"
                    value="24h"
                    subtext="Standard: 24h"
                    color="text-green-text"
                />
                <KPIBox
                    title="Setup Parameter"
                    value="2.5"
                    subtext="Standard: 22.0"
                    color="text-red-500"
                />
                <KPIBox
                    title="Material Used"
                    value="Wood"
                    subtext="Standard: wood, metal"
                    color="text-main-green"
                    icon={<FaEdit className="text-green-text ms-auto text-[20px] cursor-pointer" />}
                />
              
            </div>
        </div>
    )
}
