/** @format */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		height: 140,
		boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.03), 0 3px 1px -2px rgba(0, 0, 0, 0.03), 0 1px 5px 0 rgba(0, 0, 0, 0.03);',
	},
}));

export default function Interests() {
	const classes = useStyles();

	return (
		<div>
			<h1> Interests</h1>
			<Grid container className={classes.root} spacing={2}>
				<Grid item xs={12}>
					<Grid container justify="space-between" spacing={2}>
						<Grid key="1" item>
							<Paper className={classes.paper}>d</Paper>
						</Grid>
						<Grid key="2" item>
							<Paper className={classes.paper}>d</Paper>
						</Grid>
						<Grid key="3" item>
							<Paper className={classes.paper}>d</Paper>
						</Grid>
						<Grid key="4" item>
							<Paper className={classes.paper}>d</Paper>
						</Grid>
						<Grid key="5" item>
							<Paper className={classes.paper}>d</Paper>
						</Grid>
						<Grid key="6" item>
							<Paper className={classes.paper}>d</Paper>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}
