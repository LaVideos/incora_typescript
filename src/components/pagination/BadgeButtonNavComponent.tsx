import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {styled} from "@mui/material";
import {grey} from "@mui/material/colors";

import {IBadgeButtonNavProps} from "../../interfaces";
import "./modules/BadgeButtonNavComponent.css";

import cn from "classnames";


const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(grey[500]),
    backgroundColor: grey[500],
    '&:hover': {
        backgroundColor: grey[700],
    }
}));

export default function BadgeButtonNavComponent({data,disabled,onclick,classes}:IBadgeButtonNavProps) {
    return (
        <Stack>
            <ColorButton variant="contained" disabled={disabled} onClick={onclick} className={cn(disabled?classes?.btn:classes?.activeBtn)}>{data}</ColorButton>
        </Stack>
    );
}