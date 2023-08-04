'use client';
import { toastSuccess } from '@/utils/toastUtils';
import { useState } from 'react';
import { Slide, ToastContainer, toast } from 'react-toastify';
// import tostify css
import 'react-toastify/dist/ReactToastify.css';

const CreateWebSearch = () => {
  //handle the form submission
  const [siteName, setSiteName] = useState('');
  const [isSiteAvailable, setIsSiteAvailable] = useState(false);

  //handle input siteNameChange
  const handleSiteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSiteName(event.target.value);
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // Do something with the form data, such as sending it to your server
    checkSite(siteName);
    console.log('Form submitted with sitename:', siteName);
  };

  const checkSite = async (siteName: string) => {
    const response = await fetch('/api/site-check', {
      method: 'POST',
      body: JSON.stringify({ siteName }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log('Site check response:', data.status);
    setIsSiteAvailable(data.status);
    if (data.status) {
      toast.success(data.message, toastSuccess);
    }
    // Do something with the response data, such as updating the UI
  };

  return (
    <>
      {/* {isSiteAvailable ? <ToastContainer /> : <p>Site is not available</p>} */}
      <div className='form-control flex flex-row items-center justify-center'>
        <input
          type='text'
          placeholder='Create your own unique URL.'
          className='input input-bordered w-24 md:w-auto'
          value={siteName}
          onChange={handleSiteChange}
        />
        <button className='btn btn-primary ml-2' onClick={handleClick}>
          Let's Encrypt!{' '}
        </button>
      </div>
    </>
  );
};

export default CreateWebSearch;
