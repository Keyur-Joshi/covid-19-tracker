import React from 'react';
import { Card, CardContent, Typography} from "@mui/material";

function InfoBox({title, cases, total}) {
  return (
    <Card className= "infoBox">
        <CardContent>
            <Typography className="infoBox__title" color="textSecondary">
                {title}
            </Typography>
            
            <h2 className="infoBox__Cases">{cases}</h2>
            
            <Typography className="infoBox__total" color="textSecondary">
                {total} Total
            </Typography>

        </CardContent>
    </Card>
  )
}

export default InfoBox


// Title: Corona Virus Cases
// 120 K no. of cases
// 1.2 M  total