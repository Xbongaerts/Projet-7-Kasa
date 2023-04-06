// bannière 
import './banner.scss'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Banner() {
	// appel de useState 
	const [aboutPage, setAboutPage] = useState(false);

	const location = useLocation();
	// appel de useEffect
	useEffect(() => {
		if(location.pathname === '/about'){
			setAboutPage(true)
		};
		// eslint-disable-next-line
	}, [])

	return (
		<section className={aboutPage ? 'banner_about' : 'banner'}>
			{!aboutPage && <p>Chez vous, partout et ailleurs</p>}
		</section>
	)
}