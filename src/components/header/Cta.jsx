import React from 'react';
import { GrDocument } from 'react-icons/gr';

// Import the PDF file
import cvPDF from './my-cv.pdf'; // Adjust the path as needed

const Cta = () => {
  return (
    <div className='Cta'>
      <a
        href={cvPDF}
        className='btn'
        download="sandeep.pdf" // Specify the desired file name for the downloaded file
      >
        Download CV <GrDocument size={15} />
      </a>
      <a href='https://cal.com/sandeepkumar' className='btn btn-primary'>
        Discuss Something?
      </a>
    </div>
  );
};

export default Cta;
