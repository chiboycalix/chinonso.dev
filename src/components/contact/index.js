/** @format */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.03), 0 3px 1px -2px rgba(0, 0, 0, 0.03), 0 1px 5px 0 rgba(0, 0, 0, 0.03)',
		padding: '2rem 0',
		textAlign: 'center',
	},
	paper: {
		height: 140,
		width: 100,
	},
	control: {
		padding: theme.spacing(2),
	},
	Icons: {
		fontSize: '3rem',
		cursor: 'pointer',
	},
	facebook: {
		cursor: 'pointer',
		'&:hover': {
			color: '#4267B2',
		},
	},
	twitter: {
		'&:hover': {
			color: '#1DA1F2',
		},
	},
	linkedin: {
		'&:hover': {
			color: '#0072b1',
		},
	},
	github: {
		'&:hover': {
			color: '#211F1F',
		},
	},
	socialLinks: {
		textDecoration: 'none',
		color: 'rgba(0,0,0, .5)',
	},
}));

export default function Contact() {
	const classes = useStyles();

	return (
		<div id="contact__section">
			<Card style={{ backgroundColor: 'transparent', border: 'none', outline: 'none', boxShadow: 'none' }}>
				<Typography variant="h4" gutterBottom>
					Contact
				</Typography>
				<Card className={classes.root}>
					<Typography gutterBottom>Find me on:</Typography>
					<Grid container spacing={2} className={classes.IconWrapper}>
						<Grid item xs={12}>
							<Grid container justify="center" spacing={2}>
								<Grid key="1" item className={`${classes.icon} ${classes.facebook}`}>
									<Tooltip title="Facebook" placement="bottom">
										<a
											href="https://www.facebook.com/chinonsoi2"
											target="_blank"
											rel="noreferrer"
											className={classes.socialLinks}>
											<FacebookIcon className={classes.Icons} />
										</a>
									</Tooltip>
								</Grid>
								<Grid key="2" item className={`${classes.icon} ${classes.twitter}`}>
									<Tooltip title="Twitter" placement="bottom">
										<a
											href="https://twitter.com/thorsgardian_"
											target="_blank"
											rel="noreferrer"
											className={classes.socialLinks}>
											<TwitterIcon className={classes.Icons} />
										</a>
									</Tooltip>
								</Grid>
								<Grid key="3" item className={`${classes.icon} ${classes.linkedin}`}>
									<Tooltip title="LinkedIn" placement="bottom">
										<a
											href="https://www.linkedin.com/in/chinonso-igwe-2bb9a6140/"
											target="_blank"
											rel="noreferrer"
											className={classes.socialLinks}>
											<LinkedInIcon className={classes.Icons} />
										</a>
									</Tooltip>
								</Grid>
								<Grid key="4" item className={`${classes.icon} ${classes.github}`}>
									<Tooltip title="Github" placement="bottom">
										<a
											href="https://github.com/chiboycalix"
											target="_blank"
											rel="noreferrer"
											className={classes.socialLinks}>
											<GitHubIcon className={classes.Icons} />
										</a>
									</Tooltip>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Card>
			</Card>
		</div>
	);
}
