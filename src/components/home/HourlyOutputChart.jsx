/* eslint-disable react/prop-types */
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, ReferenceLine, Cell } from 'recharts';

const data = [
    { hour: '9AM', units: 15 },
    { hour: '10AM', units: 25 },
    { hour: '11AM', units: 18 },
    { hour: '12PM', units: 22 },
    { hour: '1PM', units: 16 },
    { hour: '2PM', units: 26 },
    { hour: '3PM', units: 14 },
    { hour: '4PM', units: 8 },
    { hour: '5PM', units: 12 },
    { hour: '6PM', units: 17 },
];

const targetUnits = 25;

const CustomTooltip = ({ payload }) => {
    if (!payload || payload.length === 0) return null;

    const { hour, units } = payload[0].payload;
    return (
        <div className="custom-tooltip p-2 bg-white  rounded">
            <p className='text-gray-400'><strong>Hour:</strong> {hour}</p>
            <p className={`text-[#06b6d4]`}><strong>Units:</strong> {units}</p>
        </div>
    );
};

const HourlyOutputChart = () => {
    return (
        <div className="bg-supMaps  max-h-[400px] min-h-[355px] w-full md:w-[53%] rounded-[20px] mx-auto">
            <h2 className="font-bold text-white font-cairo text-center">Hourly Line Output</h2>
            <div className="h-64 mt-[40px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <XAxis dataKey="hour" stroke="#fff" />
                        {/* <YAxis stroke="#fff" />/ */}
                        <Tooltip content={<CustomTooltip />} />


                        <ReferenceLine y={targetUnits} stroke="white" strokeDasharray="3 3" />


                        <Bar
                            dataKey="units"
                            fill="#fff"
                            radius={[5, 5, 0, 0]}
                            barSize={30}
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={index}
                                    fill={entry.units >= targetUnits ? '#06b6d4' : '#fff'}
                                />
                            ))}
                        </Bar>
                        ~
                    </BarChart>
                    <div className="text-right text-gray-400 text-sm">Target: {targetUnits} units/hr</div>
                </ResponsiveContainer>
            </div>

        </div>
    );
};

export default HourlyOutputChart;
