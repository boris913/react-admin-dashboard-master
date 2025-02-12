import { User } from "lucide-react";
import SettingSection from "./SettingSection";

const Profile = () => {
	return (
		<SettingSection icon={User} title={"Profil"}>
			<div className='flex flex-col sm:flex-row items-center mb-6'>
				<img
					src='profile.jpg'
					alt='Profil'
					className='rounded-full w-20 h-20 object-cover mr-4'
				/>

				<div>
					<h3 className='text-lg font-semibold text-gray-100'>Baudouin Dev</h3>
					<p className='text-gray-400'>baud@gmail.com</p>
				</div>
			</div>

			<button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto'>
				Modifier le Profil
			</button>
		</SettingSection>
	);
};

export default Profile;