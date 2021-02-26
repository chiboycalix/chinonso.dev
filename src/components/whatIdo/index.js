/** @format */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CodeIcon from '@material-ui/icons/Code';
import Typography from '@material-ui/core/Typography';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import PeopleIcon from '@material-ui/icons/People';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	gridContainer: {
		display: 'flex',
		'@media(max-width: 768px)': {
			flexDirection: 'column',
			justifyContent: 'Center',
			alignItems: 'center',
		},
	},
	gridItem: {
		'@media(max-width: 768px)': {
			width: '100%',
		},
	},
	paper: {
		boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.03), 0 3px 1px -2px rgba(0, 0, 0, 0.03), 0 1px 5px 0 rgba(0, 0, 0, 0.03);',
		textAlign: 'center',
		padding: '4rem 3rem',
	},
	cardIcon: {
		fontSize: '60px',
	},
	PeopleIcon: {
		color: '#37224A',
	},
	CodeIcon: {
		color: '#9BEA85',
	},
	MusicNoteIcon: {
		color: '#FFDB69',
	},
}));

export default function SpacingGrid() {
	const classes = useStyles();
	const matches = useMediaQuery('(max-width:768px)');

	return (
		<div id="portfolio__section">
			<Card style={{ backgroundColor: 'transparent', border: 'none', outline: 'none', boxShadow: 'none' }}>
				<Typography variant="h4" gutterBottom>
					What I do
				</Typography>
				<Grid item xs={12}>
					<Grid container justify="space-between" className={classes.gridContainer} spacing={1}>
						<Grid key="1" item xs={!matches ? 4 : 12} className={classes.gridItem}>
							<Card className={classes.paper}>
								<CodeIcon className={`${classes.cardIcon} ${classes.CodeIcon}`} />
								<Typography variant="h6" gutterBottom>
									Developer
								</Typography>
								<Typography>
									I am a Frontend Developer. Some of the languages and technologies I have worked on: HTML, CSS,
									Javascript, React, GraphQL, Typescript, NodeJS, SQL, Sequelize, Postgres, MysQL, Material UI.
								</Typography>
							</Card>
						</Grid>
						<Grid key="2" item xs={!matches ? 4 : 12}>
							<Card className={classes.paper}>
								<PeopleIcon className={`${classes.cardIcon} ${classes.PeopleIcon}`} />
								<Typography variant="h6" gutterBottom>
									Mentor
								</Typography>
								<Typography>
									As Part of Our SImulations Period in one of the companies I worked for (Andela), I was assigned some
									Junior Developers to Mentor. I also review their codes for better Quality.
								</Typography>
							</Card>
						</Grid>
						<Grid key="3" item xs={!matches ? 4 : 12}>
							<Card className={classes.paper}>
								<MusicNoteIcon className={`${classes.cardIcon} ${classes.MusicNoteIcon}`} />
								<Typography variant="h6" gutterBottom>
									Drummer
								</Typography>
								<Typography>
									This is one of my side skills and talent. I also mentor upcoming drummers by holding sessions, both
									remote and physically. This is a free service and I do it just to help Beginner drummers.
								</Typography>
							</Card>
						</Grid>
					</Grid>
				</Grid>
			</Card>
		</div>
	);
}
