// This file is shared across the demos.

import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from 'material-ui-icons/MoveToInbox';
import DeleteIcon from 'material-ui-icons/Delete';
import ReportIcon from 'material-ui-icons/Report';
import Divider from 'material-ui/Divider';
export const mailFolderListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <InboxIcon />
            </ListItemIcon>
            <ListItemText style={{fontSize:16}} primary="Inbox" />
        </ListItem>
        <Divider />
            <ListItem button>
                <ListItemIcon>
                    <DeleteIcon />
                </ListItemIcon>
                <ListItemText primary="Trash" />
            </ListItem>
            <ListItem button>
                <ListItemIcon>
                    <ReportIcon />
                </ListItemIcon>
                <ListItemText primary="Spam" />
            </ListItem>
    </div>

);

