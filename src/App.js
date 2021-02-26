/** @format */
import React from 'react';
import Container from '@material-ui/core/Container';

import { Header, About, Divider, WhatIDo, Projects, Contact, Footer, Particles } from './components';
import './App.scss';

function App() {
	return (
		<div className={`app`}>
			<div className="banner"></div>
			<Particles />
			<div className="wrapper">
				<Container>
					<Header />
					<Divider />
					<About />
					<Divider />
					<WhatIDo />
					<Divider />
					<Projects />
					<Divider />
					<Contact />
					<Divider />
					<Footer />
					<Divider />
				</Container>
			</div>
		</div>
	);
}

export default App;
