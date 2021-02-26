/** @format */

import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Tooltip from '@material-ui/core/Tooltip';
import Db from '../../assets/img/dp.jpeg';
import { Typography } from '@material-ui/core';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import CodeIcon from '@material-ui/icons/Code';
import EmailIcon from '@material-ui/icons/Email';
import WorkIcon from '@material-ui/icons/Work';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';

const useStyles = makeStyles({
	list: {
		width: 250,
	},
	socialLinks: {
		textDecoration: 'none',
		color: 'rgba(255,255,255,.5) !important',
	},
	fullList: {
		width: 'auto',
	},
	imageWrapper: {
		width: '100%',
		textAlign: 'center',
		padding: '2rem 0',
		backgroundColor: 'rgb(34,53,74)',
	},
	dispalyImage: {
		borderRadius: '50%',
		width: '40%',
	},
	icon: {
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
	Icon: {
		fontSize: '1rem',
	},
	sectionLink: {
		color: 'rgba(255,255,255,.5)',
		textDecoration: 'none',
	},
});

export default function Sidebar({ toggleDrawer, state }) {
	const classes = useStyles();

	const list = (anchor) => (
		<div
			className={clsx(classes.list, {
				[classes.fullList]: anchor === 'top' || anchor === 'bottom',
			})}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}>
			<div className={classes.imageWrapper}>
				<img src={Db} alt="db" className={classes.dispalyImage} />
				<Typography gutterBottom variant="h6" style={{ color: 'white' }}>
					Igwe Chinonso
				</Typography>
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
			</div>
			<Divider />
			<List>
				<a href="#about__section" className={classes.sectionLink}>
					<ListItem button key="1">
						<ListItemIcon>
							<BorderColorIcon />
						</ListItemIcon>
						<ListItemText>About</ListItemText>
					</ListItem>
				</a>
				<a href="#portfolio__section" className={classes.sectionLink}>
					<ListItem button key="2">
						<ListItemIcon>
							<WorkIcon />
						</ListItemIcon>
						<ListItemText>Portfolio</ListItemText>
					</ListItem>
				</a>
				<a href="#interest__section" className={classes.sectionLink}>
					<ListItem button key="3">
						<ListItemIcon>
							<LocalCafeIcon />
						</ListItemIcon>
						<ListItemText>Interest</ListItemText>
					</ListItem>
				</a>
				<a href="#projects__section" className={classes.sectionLink}>
					<ListItem button key="4">
						<ListItemIcon>
							<CodeIcon />
						</ListItemIcon>
						<ListItemText>Projects</ListItemText>
					</ListItem>
				</a>
				<a href="#contact__section" className={classes.sectionLink}>
					<ListItem button key="5">
						<ListItemIcon>
							<EmailIcon />
						</ListItemIcon>
						<ListItemText>Contact</ListItemText>
					</ListItem>
				</a>
			</List>
		</div>
	);

	return (
		<React.Fragment key="left">
			<Drawer
				anchor="left"
				open={state['left']}
				onClose={toggleDrawer('left', false)}
				className={classes.Drawer}
				variant="persistent">
				{list('left')}
			</Drawer>
		</React.Fragment>
	);
}
