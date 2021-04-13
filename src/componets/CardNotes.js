import React from "react";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { Card, IconButton} from "@material-ui/core";
import {DeleteOutlined} from '@material-ui/icons';
import Typography from '@material-ui/core/Typography'

function CardNotes({note,handleDelete}) {
  return (
    <div>
      <Card>
        <CardHeader
        action=
        {
          <IconButton  onClick={() => handleDelete(note.id)}>
            <DeleteOutlined />
          </IconButton>
        }
        title={note.title}
        subheader={note.category}
        >
          
        </CardHeader>
        <CardContent>
          <Typography variant="body1" color="textSecondary">
            { note.details }
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default CardNotes;
