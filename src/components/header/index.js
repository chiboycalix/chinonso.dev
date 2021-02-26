/** @format */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Sidebar from '../drawer';
import './styles/header.css';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));

export default function Header() {
	const classes = useStyles();
	const matches = useMediaQuery('(max-width:768px)');
	const [anchorEl, setAnchorEl] = React.useState(null);
	const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	});

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const toggleDrawer = (anchor, open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};
	return (
		<div className={classes.root}>
			<AppBar position={!matches ? 'sticky' : 'fixed'}>
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
						onClick={toggleDrawer('left', true)}>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						Igwe Chinonso
					</Typography>
					<div></div>
				</Toolbar>
			</AppBar>

			<Sidebar toggleDrawer={toggleDrawer} state={state} />
		</div>
	);
}
