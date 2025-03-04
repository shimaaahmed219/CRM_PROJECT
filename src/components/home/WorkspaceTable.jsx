

import { Link } from "react-router-dom";
import edit from "../../assets/mage_edit-fill (1).svg"

const workspacesData = [
    { workspace: "Workspace 17", currentOutput: "33/290", efficiency: "11.4%" },
    { workspace: "Workspace 14", currentOutput: "163/790", efficiency: "20.6%" },
    { workspace: "Workspace 02", currentOutput: "48/230", efficiency: "20.9%" },
    { workspace: "Workspace 14", currentOutput: "163/790", efficiency: "20.6%" },
    { workspace: "Workspace 17", currentOutput: "33/290", efficiency: "11.4%" },
];

export default function WorkspaceTable() {
    return (
        <div className="md:w-[47%] w-full max-h-[400px] overflow-auto min-h-[300px]  bg-supMaps rounded-[20px] p-[20px]">
            <div className="flex justify-between items-center">
                <h6 className="font-bold font-cairo md:text-[16px] text-[14px]">Poorest Performing Workspaces</h6>
                <Link to="" className="sm:w-[115px] w-[85px] cursot-pointer font-cairo sm:text-[16px] text-[14px] px-[15px] py-[2px] h-[34px] flex justify-center items-center rounded-[100px] bg-red-button">
                    Leaderboard
                </Link>
            </div>
            <div className=" ">
                <table className="w-full mt-[30px] ">
                    <thead className="text-gray-200 h-[32px]  ">
                        <tr className="w-full border-b border-stroke  ">
                            <th className="font-extralight py-[10px] w-[25%] text-[14px] text-start">Workspace</th>
                            <th className="font-extralight text-[14px] w-[35%]  text-start">Current Output / Ideal Output</th>
                            <th className="font-extralight text-[14px] w-[22%]  text-start">Efficiency</th>

                        </tr>
                    </thead>
                    <tbody>
                        {workspacesData.map((item, index) => (
                            <tr key={index} className={`sm:text-[14px] text-[12px] text-start font-roboto text-main-text `}>
                                <td className=" py-[10px] border-b border-stroke">{item.workspace}</td>
                                <td className=" py-[10px] border-b border-stroke">{item.currentOutput}</td>
                                <td className=" py-[10px] border-b border-stroke flex items-center justify-between">{item.efficiency}
                                    <Link to="#">  <img src={edit} alt="img" /></Link>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}

