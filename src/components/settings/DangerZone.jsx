import { motion } from "framer-motion";
import { Trash2 } from "lucide-react";

const DangerZone = () => {
	return (
		<motion.div
			className='bg-red-900 bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg rounded-xl p-6 border border-red-700 mb-8'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.2 }}
		>
			<div className='flex items-center mb-4'>
				<Trash2 className='text-red-400 mr-3' size={24} />
				<h2 className='text-xl font-semibold text-gray-100'>Zone de Danger</h2>
			</div>
			<p className='text-gray-300 mb-4'>Supprimez définitivement votre compte et tout votre contenu.</p>
			<button
				className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200'
			>
				Supprimer le Compte
			</button>
		</motion.div>
	);
};

export default DangerZone;