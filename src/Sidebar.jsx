import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider'


function valueslider(value: earthquake) {
  return ;
}

export const Sidebar = ({earthquake}) => (
  <div className="aside">
    <aside>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          ausgewähltes Erdbeben
        </Typography>
        <Typography>Stärke: {earthquake.properties?.mag??""}</Typography>
        <Typography>Zeitpunkt: {earthquake.properties?.time
  ? new Date(earthquake.properties.time).toLocaleString()
  : ""}</Typography>
        <Typography>Lage:</Typography>
        <Typography>Lat: {earthquake.geometry?.coordinates?.[1] ?? ""}</Typography>
        <Typography>Lon: {earthquake.geometry?.coordinates?.[0] ?? ""}</Typography>
        <Typography>Epizentrum: {earthquake.properties?.place??""}</Typography>
        </CardContent>
        </Card>

        <Slider
        aria-label="Kreisradius"
        defaultValue={30}
        getAriaValueText={earthquake}
        valueLabelDisplay="auto"
        shiftStep={30}
        step={10}
        marks
        min={10}
        max={110}
      />
      <Slider defaultValue={30} step={10} marks min={10} max={110} disabled />
    
      </aside>
  </div>
);





    
        
      
