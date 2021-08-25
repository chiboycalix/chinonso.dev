/** @format */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Tooltip from '@material-ui/core/Tooltip';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import CheckIcon from '@material-ui/icons/Check';
import AutorenewIcon from '@material-ui/icons/Autorenew';

import Db from '../../assets/img/dp.jpeg';

const useStyles = makeStyles({
	root: {
		padding: 0,
		borderRadius: 1,
		boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.03), 0 3px 1px -2px rgba(0, 0, 0, 0.03), 0 1px 5px 0 rgba(0, 0, 0, 0.03);',
	},
	bullet: {
		display: 'inline-block',
		margin: '0 5px 0 15px',
		transform: 'scale(0.8)',
	},
	gridContainer: {
		display: 'flex',
		'@media(max-width: 768px)': {
			flexDirection: 'column',
			justifyContent: 'Center',
			alignItems: 'center',
		},
	},
	gridItemLeft: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		margin: '-2rem 0 4rem 0',

		'@media(max-width: 768px)': {
			flexGrow: 1,
			margin: '1rem 0',
		},
	},
	socialLinks: {
		textDecoration: 'none',
		color: 'rgba(0,0,0, .5)',
	},
	dispalyImage: {
		borderRadius: '50%',
	},
	IconWrapper: {
		margin: '1rem 0',
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
	devto: {
		'&:hover': {
			color: '#211F1F',
		},
	},
	devTo: {
		width: "25px",
		height: "25px"
	},
	gridItemRight: {
		margin: '4rem 0',
		flexGrow: 1,
		'@media(max-width: 768px)': {
			flexGrow: 1,
			margin: '0rem 0',
			textAlign: 'center',
		},
	},
	skills: {
		fontWeight: 'bold',
		fontSize: '10',
		color: '#848484',
	},
	buttonWrapper: {
		margin: '2rem 0',
	},
	downloadBtn: {
		background: '#37214A',
		color: 'white',
		padding: '.5rem 1rem',
		fontWeight: 'normal',
		marginRight: '1rem',

		'&:hover': {
			background: '#37214A',
		},
	},
	contactBtn: {
		padding: '.5rem 1rem',
		background: '#F2F6F8',
		fontWeight: 'normal',
	},
	ListItem: {
		margin: 0,
		padding: 0,
		display: 'flex',
	},
	avatar: {
		width: 20,
		height: 20,
	},
	avatarIcon: {
		width: 10,
		height: 10,
	},
	listItemText: {
		marginLeft: '-2rem',
	},
	span: {
		opacity: 0.5,
		marginLeft: '.5rem',
		marginBottom: '.1rem',
		display: 'inline-block',
	},
});

export default function About() {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;

	return (
		<div id="about__section">
			<Card className={classes.root}>
				<CardContent style={{ padding: '0', margin: '0' }}>
					<Grid container>
						<Grid item xs={12}>
							<Grid container justify="center" xs={12} className={classes.gridContainer}>
								<Grid key="1" item xs={5} className={classes.gridItemLeft}>
									<img src={Db} alt="db" className={classes.dispalyImage} />

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

												<Grid key="5" item className={`${classes.icon} ${classes.devto}`}>
													<Tooltip title="Dev.to" placement="bottom" target="_blank"
														rel="noreferrer">
														<a href="https://dev.to/cigwe416" className={classes.socialLinks}>
															<img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="cigwe416's DEV Community Profile" height="30" width="30" className={classes.devTo} />
														</a>
													</Tooltip>
												</Grid>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
								<Grid key="2" item xs={7} className={classes.gridItemRight}>
									<Typography variant="h3" component="h3" gutterBottom>
										Igwe Chinonso
									</Typography>
									<Typography gutterBottom className={classes.skills}>
										Software Engineer
										{bull} Learner
										{bull} Engineer
									</Typography>
									<div className={classes.buttonWrapper}></div>
									<div>
										<List>
											<ListItem className={classes.ListItem}>
												<ListItemAvatar>🎓</ListItemAvatar>
												<ListItemText className={classes.listItemText}>
													Experience Level: {<span className={classes.span}>3+ years</span>}
												</ListItemText>
											</ListItem>

											<ListItem className={classes.ListItem}>
												<ListItemAvatar>🧩</ListItemAvatar>
												<ListItemText className={classes.listItemText}>
													Tools:
													{
														<span className={classes.span}>
															<Chip label="React" size="small" icon={<CheckIcon style={{ color: 'green' }} />} />
														</span>
													}
													{
														<span className={classes.span}>
															<Chip label="Typescript" size="small" icon={<CheckIcon style={{ color: 'green' }} />} />
														</span>
													}
													{
														<span className={classes.span}>
															<Chip label="Redux" size="small" icon={<CheckIcon style={{ color: 'green' }} />} />
														</span>
													}
													{
														<span className={classes.span}>
															<Chip label="NodeJS" size="small" icon={<CheckIcon style={{ color: 'green' }} />} />
														</span>
													}
													{
														<span className={classes.span}>
															<Chip label="GraphQL" size="small" icon={<CheckIcon style={{ color: 'green' }} />} />
														</span>
													}
													{
														<span className={classes.span}>
															<Chip label="ES6" size="small" icon={<CheckIcon style={{ color: 'green' }} />} />
														</span>
													}
													{
														<span className={classes.span}>
															<Chip label="HTML5" size="small" icon={<CheckIcon style={{ color: 'green' }} />} />
														</span>
													}
													{
														<span className={classes.span}>
															<Chip label="CSS3" size="small" icon={<CheckIcon style={{ color: 'green' }} />} />
														</span>
													}
													{
														<span className={classes.span}>
															<Chip label="SEO" size="small" icon={<CheckIcon style={{ color: 'green' }} />} />
														</span>
													}
													{
														<span className={classes.span}>
															<Chip label="Material UI" size="small" icon={<CheckIcon style={{ color: 'green' }} />} />
														</span>
													}
													{
														<span className={classes.span}>
															<Chip label="Ant Design" size="small" icon={<CheckIcon style={{ color: 'green' }} />} />
														</span>
													}
												</ListItemText>
											</ListItem>

											<ListItem className={classes.ListItem}>
												<ListItemAvatar>👍</ListItemAvatar>
												<ListItemText className={classes.listItemText}>
													Interested In:{' '}
													{
														<span className={classes.span}>
															<Chip label="Technology" size="small" icon={<CheckIcon style={{ color: 'green' }} />} />
														</span>
													}
													{
														<span className={classes.span}>
															<Chip
																label="Web Development"
																size="small"
																icon={<CheckIcon style={{ color: 'green' }} />}
															/>
														</span>
													}
													{
														<span className={classes.span}>
															<Chip
																label="Satelite Communication"
																size="small"
																icon={<CheckIcon style={{ color: 'green' }} />}
															/>
														</span>
													}
													{
														<span className={classes.span}>
															<Chip
																label="Artificial Intelligence"
																size="small"
																icon={<CheckIcon style={{ color: 'green' }} />}
															/>
														</span>
													}
													{
														<span className={classes.span}>
															<Chip label="Space Travel" size="small" icon={<CheckIcon style={{ color: 'green' }} />} />
														</span>
													}
												</ListItemText>
											</ListItem>

											<ListItem className={classes.ListItem}>
												<ListItemAvatar>💻</ListItemAvatar>
												<ListItemText className={classes.listItemText}>
													Currently Learning:{' '}
													{
														<span className={classes.span}>
															<Chip label="UI/UX" size="small" icon={<AutorenewIcon style={{ color: 'green' }} />} />
														</span>
													}
													{
														<span className={classes.span}>
															<Chip label="Vue" size="small" icon={<AutorenewIcon style={{ color: 'green' }} />} />
														</span>
													}
												</ListItemText>
											</ListItem>

											<ListItem className={classes.ListItem}>
												<ListItemAvatar>⚡</ListItemAvatar>
												<ListItemText className={classes.listItemText}>
													Fun Fact:{' '}
													{
														<span className={classes.span}>
															<Chip
																label="I Love Playing Drums 🥁"
																size="small"
																icon={<CheckIcon style={{ color: 'green' }} />}
															/>
														</span>
													}
												</ListItemText>
											</ListItem>
										</List>
									</div>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</div>
	);
}
