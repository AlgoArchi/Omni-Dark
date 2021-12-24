import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
	paper: {
		backgroundColor: "#0f1f3deb !important",
		color: "#fff !important",
    borderRadius: '12px !important'
	},
  dailogheader: {
    padding: '1.6rem !important'
  }
}));

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	"& .MuiDialogContent-root": {
		padding: theme.spacing(3),

	},
	"& .MuiDialogActions-root": {
		padding: theme.spacing(1),
	},
}));

const BootstrapDialogTitle = (props) => {
  const classes = useStyles();
	const { children, onClose, ...other } = props;

	return (
		<DialogTitle className={classes.dailogheader} {...other}>
			{children}
			{onClose ? (
				<IconButton
					aria-label='close'
					onClick={onClose}
					sx={{
						position: "absolute",
						right: 18,
						top: 18,
						color: (theme) => theme.palette.grey[500],
					}}
				>
					<CloseIcon />
				</IconButton>
			) : null}
		</DialogTitle>
	);
};

BootstrapDialogTitle.propTypes = {
	children: PropTypes.node,
	onClose: PropTypes.func.isRequired,
};

const CustomDialog = ({ open, handleClose, children, title, size='sm' }) => {
  const classes = useStyles();
	return (
		<BootstrapDialog
    maxWidth={'md'}
			onClose={handleClose}
			aria-labelledby='customized-dialog-title'
			open={open}
      classes={{
        paper: classes.paper,
      }}
      maxWidth={size}
		>
			{title && (
				<BootstrapDialogTitle
					id='customized-dialog-title'
					onClose={handleClose}
				>
					{title}
				</BootstrapDialogTitle>
			)}
			<DialogContent>{children}</DialogContent>
		</BootstrapDialog>
	);
};

export default CustomDialog;
