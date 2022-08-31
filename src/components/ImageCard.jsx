import React from 'react';
import { MDBCol } from 'mdb-react-ui-kit';

export default function ImageCard({title,price,imageUrl}) {
  return (
    <MDBCol lg='4' md='12' className='mb-4'>
        <img src={imageUrl} className='img-fluid rounded' alt='' />
      </MDBCol>
  );
}
