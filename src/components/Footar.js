import React from 'react';

const  Footar = () => {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '50vh',
      };
    return (
        <div  style={containerStyle}>
           <div className='py-8'>
              <div className='flex justify-center text-center items-center'>
                Made with ❤️ by Lohit
               </div>

            
            </div>
        </div>
    )
}
export default Footar;