import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Acordion() {
  return (
    <div  data-aos="flip-left" data-aos-duration="3000" className='cont'>
        <div className=' bg-[#272727] dark:bg-white'> 
            <div>
                <h1 className='text-[70px] text-white dark:text-[#272727]'>FAQ</h1>
            </div>
      <Accordion className=' bg-[#272727] dark:bg-white dark:text-black' sx={{background:"#272727", color:'white'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='dark:text-black text-white'/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>The largest and oldest Quotations Page on the Web with about 30 categories</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque augue elit, rutrum sit amet commodo vel, porta quis purus. Nullam faucibus, odio eu bibendum auctor, eros dolor aliquet purus, sit amet pellentesque neque est id tortor. In egestas, erat a dapibus dapibus, mi augue ornare lorem, nec pretium ligula purus nec tellus. Aenean a scelerisque nisi. Nullam pretium fermentum nunc, feugiat placerat urna rutrum eget. Nullam mattis justo consequat risus. Donec imperdiet enim id efficitur pharetra. Nam sollicitudin at est eget auctor. Ut sed ante quis nulla tincidunt auctor. Quisque accumsan pretium tincidunt. Etiam viverra ultrices est vitae suscipit. Pellentesque elementum purus non nisl pharetra consequat. Nunc in venenatis orci.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className=' bg-[#272727] dark:bg-white dark:text-black' sx={{background:"#272727", color:'white'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='dark:text-black text-white' />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>A huge collection of inspirational quotes, thoughts of greatest minds in history</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque augue elit, rutrum sit amet commodo vel, porta quis purus. Nullam faucibus, odio eu bibendum auctor, eros dolor aliquet purus, sit amet pellentesque neque est id tortor. In egestas, erat a dapibus dapibus, mi augue ornare lorem, nec pretium ligula purus nec tellus. Aenean a scelerisque nisi. Nullam pretium fermentum nunc, feugiat placerat urna rutrum eget. Nullam mattis justo consequat risus. Donec imperdiet enim id efficitur pharetra. Nam sollicitudin at est eget auctor. Ut sed ante quis nulla tincidunt auctor. Quisque accumsan pretium tincidunt. Etiam viverra ultrices est vitae suscipit. Pellentesque elementum purus non nisl pharetra consequat. Nunc in venenatis orci.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className=' bg-[#272727] dark:bg-white dark:text-black' sx={{background:"#272727", color:'white'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  className='dark:text-black text-white'/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Quotations from the great works of literature</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque augue elit, rutrum sit amet commodo vel, porta quis purus. Nullam faucibus, odio eu bibendum auctor, eros dolor aliquet purus, sit amet pellentesque neque est id tortor. In egestas, erat a dapibus dapibus, mi augue ornare lorem, nec pretium ligula purus nec tellus. Aenean a scelerisque nisi. Nullam pretium fermentum nunc, feugiat placerat urna rutrum eget. Nullam mattis justo consequat risus. Donec imperdiet enim id efficitur pharetra. Nam sollicitudin at est eget auctor. Ut sed ante quis nulla tincidunt auctor. Quisque accumsan pretium tincidunt. Etiam viverra ultrices est vitae suscipit. Pellentesque elementum purus non nisl pharetra consequat. Nunc in venenatis orci.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className=' bg-[#272727] dark:bg-white dark:text-black' sx={{background:"#272727", color:'white'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  className='dark:text-black text-white'/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Collected quotes from Albert Einstein</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque augue elit, rutrum sit amet commodo vel, porta quis purus. Nullam faucibus, odio eu bibendum auctor, eros dolor aliquet purus, sit amet pellentesque neque est id tortor. In egestas, erat a dapibus dapibus, mi augue ornare lorem, nec pretium ligula purus nec tellus. Aenean a scelerisque nisi. Nullam pretium fermentum nunc, feugiat placerat urna rutrum eget. Nullam mattis justo consequat risus. Donec imperdiet enim id efficitur pharetra. Nam sollicitudin at est eget auctor. Ut sed ante quis nulla tincidunt auctor. Quisque accumsan pretium tincidunt. Etiam viverra ultrices est vitae suscipit. Pellentesque elementum purus non nisl pharetra consequat. Nunc in venenatis orci.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className=' bg-[#272727] dark:bg-white dark:text-black' sx={{background:"#272727",color:'white'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon  className='dark:text-black text-white'/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Read quotes and sayings from famous people in history</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque augue elit, rutrum sit amet commodo vel, porta quis purus. Nullam faucibus, odio eu bibendum auctor, eros dolor aliquet purus, sit amet pellentesque neque est id tortor. In egestas, erat a dapibus dapibus, mi augue ornare lorem, nec pretium ligula purus nec tellus. Aenean a scelerisque nisi. Nullam pretium fermentum nunc, feugiat placerat urna rutrum eget. Nullam mattis justo consequat risus. Donec imperdiet enim id efficitur pharetra. Nam sollicitudin at est eget auctor. Ut sed ante quis nulla tincidunt auctor. Quisque accumsan pretium tincidunt. Etiam viverra ultrices est vitae suscipit. Pellentesque elementum purus non nisl pharetra consequat. Nunc in venenatis orci.
          </Typography>
        </AccordionDetails>
      </Accordion>
      </div>
    </div>
  );
}