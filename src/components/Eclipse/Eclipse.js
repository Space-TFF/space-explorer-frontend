import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { MapConfig } from './MapConfig';

const containerStyle = {
	width: '80vw',
	height: '80vh',
	margin: '4em auto',
};

//TODO: This will be the user's current location (make sure to ask permission)
const center = {
	lat: 41.97111725808147,
	lng: -91.6563726642888,
};

const locations = [
	{
		name: 'DeltaV Code School',
		location: {
			lat: 41.971187159763886,
			lng: -91.6559992135134,
		},
	},
	{
		name: 'Palisades-Kepler State Park',
		location: {
			lat: 41.92751487030226,
			lng: -91.5055285794566,
		},
	},
	{
		name: 'Custom Event Location!',
		location: {
			lat: 41.95690820284285,
			lng: -91.68765411996654,
		},
	},
];

class Eclipse extends Component {
	render() {
		return (
			<LoadScript googleMapsApiKey={process.env.REACT_APP_MAP_KEY}>
				<GoogleMap
					mapContainerStyle={containerStyle}
					center={center}
					zoom={10}
					options={{ styles: MapConfig.stylesArray }}>
					{/* Child components, such as markers, info windows, etc. */}
					<>
						{locations.map((location) => {
							return (
								<Marker
									key={location.name}
									position={location.location}
								/>
							);
						})}
					</>
				</GoogleMap>
			</LoadScript>
		);
	}
}

export default Eclipse;
