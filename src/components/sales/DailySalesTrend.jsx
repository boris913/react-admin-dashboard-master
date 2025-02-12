import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const dailySalesData = [
	{ nom: "Lun", ventes: 1000 },
	{ nom: "Mar", ventes: 1200 },
	{ nom: "Mer", ventes: 900 },
	{ nom: "Jeu", ventes: 1100 },
	{ nom: "Ven", ventes: 1300 },
	{ nom: "Sam", ventes: 1600 },
	{ nom: "Dim", ventes: 1400 },
];

const DailySalesTrend = () => {
	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.4 }}
		>
			<h2 className='text-xl font-semibold text-gray-100 mb-4'>Tendance des Ventes Quotidiennes</h2>

			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<BarChart data={dailySalesData}>
						<CartesianGrid strokeDasharray='3 3' stroke='#374151' />
						<XAxis dataKey='nom' stroke='#9CA3AF' />
						<YAxis stroke='#9CA3AF' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Bar dataKey='ventes' fill='#10B981' />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};

export default DailySalesTrend;