import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LayersIcon from '@mui/icons-material/Layers';
import AppRegistrationOutlinedIcon from '@mui/icons-material/AppRegistrationOutlined';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardCustomizeOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AppRegistrationOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Apps" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <GroupAddOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Groups" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Secrets" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <KeyOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Keys" />
    </ListItemButton>
  </React.Fragment>
);

