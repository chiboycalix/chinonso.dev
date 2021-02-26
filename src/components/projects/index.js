/** @format */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import GSIProject from '../../assets/img/gsi.png';
import SVM from '../../assets/img/svm.png';
import MCASH from '../../assets/img/mCash.png';
import Covid from '../../assets/img/covid.png';
import Netflix from '../../assets/img/netflix.png';
import AuthorHaven from '../../assets/img/authorHaven.png';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	gridContainer: {
		display: 'flex',
		'@media(max-width: 768px)': {
			flexDirection: 'column',
			justifyContent: 'Center',
			alignItems: 'center',
		},
	},
	paper: {
		boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.03), 0 3px 1px -2px rgba(0, 0, 0, 0.03), 0 1px 5px 0 rgba(0, 0, 0, 0.03);',
	},
	projectLink: {
		color: '#0E092A',
	},
}));

export default function Projects() {
	const classes = useStyles();
	const matches = useMediaQuery('(max-width:768px)');

	return (
		<div id="projects__section">
			<Card style={{ backgroundColor: 'transparent', border: 'none', outline: 'none', boxShadow: 'none' }}>
				<Typography variant="h4" gutterBottom>
					Projects and works
				</Typography>
				<Grid item spacing={1}>
					<Grid container item xs={12} justify="space-between" className={classes.gridContainer} spacing={1}>
						<Grid item xs={!matches ? 4 : 12}>
							<Card className={classes.paper}>
								<CardActionArea>
									<CardMedia component="img" alt="AuthorHaven" height="180" image={AuthorHaven} title="AuthorHaven" />
								</CardActionArea>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Authors Haven
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p">
										A Social platform for the creative at heart. It has all the functionalities of the popular reading
										platform meduim.com
									</Typography>
								</CardContent>
								<CardActions>
									<Button size="small" color="primary">
										<a
											href="https://ah-commando-react.herokuapp.com/"
											target="_blank"
											rel="noreferrer"
											className={classes.projectLink}>
											Link to Project
										</a>
									</Button>
								</CardActions>
							</Card>
						</Grid>

						<Grid item xs={!matches ? 4 : 12}>
							<Card className={classes.paper}>
								<CardActionArea>
									<CardMedia component="img" alt="netflix" height="180" image={Netflix} title="netflix" />
								</CardActionArea>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Netflix Clone
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p">
										A Netflix clone built with React, firebase and styled-components. The app was also tested using
										react testing library and jest
									</Typography>
								</CardContent>
								<CardActions>
									<Button size="small" color="primary">
										<a
											href="https://youthful-bassi-8468a1.netlify.app/"
											target="_blank"
											rel="noreferrer"
											className={classes.projectLink}>
											Link to Project
										</a>
									</Button>
								</CardActions>
							</Card>
						</Grid>

						<Grid item xs={!matches ? 4 : 12}>
							<Card className={classes.paper}>
								<CardActionArea>
									<CardMedia component="img" alt="covid" height="180" image={Covid} title="Covid-19 Tracker" />
								</CardActionArea>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										Covid-19 Tracker
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p">
										A Covid-19 tracking app built with React and SCSS. You can view Worldwide New Cases, Recoverd Cases
										and New Deaths and also per country. I used the covid-19 realtime API
									</Typography>
								</CardContent>
								<CardActions>
									<Button size="small" color="primary">
										<a
											href="https://flamboyant-allen-16bc5f.netlify.app/"
											target="_blank"
											rel="noreferrer"
											className={classes.projectLink}>
											Link to Project
										</a>
									</Button>
								</CardActions>
							</Card>
						</Grid>

						<Grid item xs={!matches ? 4 : 12}>
							<Card className={classes.paper}>
								<CardActionArea>
									<CardMedia component="img" alt="mCash" height="180" image={MCASH} title="mCash" />
								</CardActionArea>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										mCash Portal
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p">
										mCASH is an innovative payment solution designed to facilitate retail payments to Merchants.
									</Typography>
								</CardContent>
								<CardActions>
									<Button size="small" color="primary">
										<a
											href="https://mcashsupportportal.nibss-plc.com.ng/"
											target="_blank"
											rel="noreferrer"
											className={classes.projectLink}>
											Link to Project
										</a>
									</Button>
								</CardActions>
							</Card>
						</Grid>

						<Grid item xs={!matches ? 4 : 12}>
							<Card className={classes.paper}>
								<CardActionArea>
									<CardMedia component="img" alt="SVM" height="180" image={SVM} title="SVM" />
								</CardActionArea>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										SVM
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p">
										A Smart visitors management application that manages and keep record of visitors. It has a lot of
										rich functionality
									</Typography>
								</CardContent>
								<CardActions>
									<Button size="small" color="primary">
										Accessed through a VPN
									</Button>
								</CardActions>
							</Card>
						</Grid>
						<Grid item xs={!matches ? 4 : 12}>
							<Card className={classes.paper}>
								<CardActionArea>
									<CardMedia component="img" alt="gsi" height="180" image={GSIProject} title="GSI" />
								</CardActionArea>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										GSI Portal
									</Typography>
									<Typography variant="body2" color="textSecondary" component="p">
										Helps to reduce non-performing loans in the nigerian banking system. This helps in watch-listing
										consitent load defaulters
									</Typography>
								</CardContent>
								<CardActions>
									<Button size="small" color="primary">
										Accessed through a VPN
									</Button>
								</CardActions>
							</Card>
						</Grid>
					</Grid>
				</Grid>
			</Card>
		</div>
	);
}
