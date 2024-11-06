import React from "react";
const Invitation = () => {
	return (
		<div className="min-h-screen flex items-center justify-center bg-background bg-cover bg-center px-4 sm:px-6 lg:px-8">
			<div className="w-full max-w-lg p-6 sm:p-8 bg-white rounded-lg shadow-lg">
				<h1 className="text-3xl sm:text-4xl font-bold text-center mb-4">
					Friendsgiving!
				</h1>
				<p className="text-center text-gray-700 mb-6 text-base sm:text-lg">
					Join us for a cozy Friendsgiving dinner
					with family and friends. Let’s celebrate
					friendship and gratitude!
				</p>
				<div className="text-center mb-4 space-y-2">
					<p className="text-base sm:text-lg">
						📅 <strong>Date:</strong> November
						25, 2024
					</p>
					<p className="text-base sm:text-lg">
						📍 <strong>Location:</strong> Atlas
						236, 23511 56th Ave W, Mountlake
						Terrace.
					</p>
					<p className="text-base sm:text-lg">
						<strong>Note:</strong> Dial 320 at
						the call box to get let in.
					</p>
					<p className="text-base sm:text-lg">
						⏰ <strong>Time:</strong> 3:30 PM -
						9:00 PM
					</p>
					<p className="text-base sm:text-lg">
						🍽️ <strong>Bring a Dish:</strong>{" "}
						Please bring a dish to share!
					</p>
					<p className="text-base sm:text-lg">
						🎩 <strong>Attire:</strong> Dressy
					</p>
				</div>
			</div>
		</div>
	);
};

export default Invitation;
