import { useCallback, useState } from 'react';

function SendMessage() {

    const [phonenum, setPhonenumber] = useState('');
    const [validnum, setValidnum] = useState(false);

    const handleChangePhone = useCallback((e: string) => {
        const re = /^\d{0,11}$/;
        const re_pass = /^\d{11}$/;
        const value = e
        if (value === '' || re.test(value)) {
            setPhonenumber((e) as string)
        } 
        setValidnum(false)
        if (re_pass.test(value)) {
            setValidnum(true)
        }
    }, [phonenum]);

    return(<> 
            <div className='w-full h-full flex flex-col items-center pb-8 justify-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
                <div className='headerpage'>
                    <h1 className='text-header-color mt-16 md:text-7xl text-3xl font-serif'>Contact Information</h1>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 container mt-12 gap-4 w-11/12'>
                        <div className='p-2 rounded-lg text-sm bg-p-color w-full '>
                            <p className='font-bitter font-semibold text-lg text-button-color mb-2'> Hubungi Kami: </p>
                            <div className='flex flex-col'>
                                <label className="text-xs font-medium text-theme-color mb-1"> Nama </label>
                                <input className='w-full p-2 rounded-lg border' type='text' placeholder='Nama sesuai nomor Whatsapp'/>
                            </div>
                            <div className='flex flex-col mt-3'>
                                <label htmlFor="phonenum" className="text-xs font-medium text-theme-color">
                                No. Whatsapp
                                </label>
                                <div className='flex flex-row items-center w-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 46.35 32.3"><g fill-rule="nonzero"><path fill="#fff" stroke="#CCC" stroke-width=".19" stroke-miterlimit="2.613" d="M2.63.09h41.09c1.39 0 2.53 1.15 2.53 2.54v27.04c0 1.39-1.13 2.53-2.52 2.54H2.61a2.553 2.553 0 0 1-2.52-2.54V2.63C.09 1.24 1.24.09 2.63.09z"/><path fill="red" d="M2.72.18h40.91c1.44-.04 2.53 1.1 2.53 2.54v13.43H.18V2.72C.18 1.28 1.27.14 2.72.18z"/></g></svg>
                                    <p className='mx-2 text-sm font-medium text-gray-700 '>+62</p>
                                    <input
                                    id="phonenum"
                                    type="tel"
                                    value={phonenum} 
                                    onChange={(e) => {handleChangePhone(e.target.value)}}
                                    className={`mt-2 rounded-lg mb-2 border px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full ${
                                        validnum ? 'border-correct-color' : 'border-wrong-color'
                                    }`}
                                    placeholder=''
                                    />
                                </div>
                            </div>
                            <div className='flex flex-col gap-1 mt-1'>
                                <label className="text-xs font-medium text-theme-color"> Message </label>
                                <textarea className='w-full p-2 rounded-lg border h-48' placeholder='Masukkan Pesan'/>
                            </div>
                            <div className='flex items-center justify-center'>
                                <button className='w-full border-2 border-button-color hover:bg-button-color text-white rounded-lg p-2 mt-2'> Kirim Pesan </button>
                            </div>
                        </div>
                        
                        <div className='p-2 rounded-lg text-md text-align-left border border-link-color'>
                            <p className='text-button-color font-bitter font-medium'> Alamat:  </p>
                            <p className='text-sm font-bitter text-p-color font-thin '> Jl. Dago Asri II No. D12, Dago, Kecamatan Coblong, Bandung, 40135 </p>
                            <a className="text-link-color text-xs font-bitter " href="https://maps.app.goo.gl/veB5JtB2jRawmb3G6"> Open in Google Maps </a>
                            <p className='mt-2 font-bitter font-medium text-button-color'> Email:  </p>
                            <p className='text-sm font-bitter font-thin text-p-color'> kosmemorialview@gmail.com</p>
                            <p className='mt-2 font-bitter font-medium text-button-color'> Nomor Telepon:  </p>
                            <p className='text-sm font-bitter font-thin text-p-color'> 08122222222</p>
                        </div>
                        
                    </div>
                
                
            </div>
    </>)
}

export default SendMessage;