import './styles/amenities.css'
import Footer from '../components/footer';
import { useState } from 'react';

function Contact() {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index: any) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const faqData = [
        { question: "Question 1", answer: "Answer 1 this is my answer. To be tryly honest i don't think of a nything else.  This is jst for the  animation in tha paragraf. I want to see how it looks l ike if it's very very long okya? don't mind this sentences it's just nothing nothing wrong kok." },
        { question: "Question 2", answer: "Answer 2" },
        { question: "Question 3", answer: "Answer 3" },
        { question: "Question 4", answer: "Answer 4" },
        { question: "Question 5", answer: "Answer 5" },
        { question: "Question 6", answer: "Answer 6" },
        { question: "Question 7", answer: "Answer 7" },
        { question: "Question 8", answer: "Answer 8" },
        { question: "Question 9", answer: "Answer 9" },
        { question: "Question 10", answer: "Answer 10" },
        // ... more FAQ items
      ];


    return(<> 
            <div className='w-full h-full flex flex-col items-center justify-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>

                <div className='grid md:grid-cols-2 grid-cols-1 gap-4 w-11/12 mt-28 mb-8'>
                    <div>
                        <h1 className='text-header-color md:text-5xl mt-8 text-3xl font-serif'>FAQs</h1>
                        <div className="w-full ">
                            {faqData.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleItemClick(index)}
                                    className='cursor-pointer'
                                >
                                    <div className='flex flex-row'>
                                        <div className='text-xl text-header-color mr-3 mt-4 w-3'>
                                            {activeIndex === index ? (<div> - </div>) : (<div> + </div>)}
                                        </div>
                                        <div className=' w-full'>
                                            <div className="text-2xl text-p-color py-3">{item.question}</div>
                                            
                                            <div className={`${activeIndex === index? 'max-h-full': 'max-h-0'} border-b border-button-color ease-in-out transition-all duration-700 overflow-hidden text-md text-p-color pb-1`}>{item.answer}</div>
                                        </div>                                
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className='p-2 rounded-lg text-md text-align-left border border-link-color w-3/5 h-96 self-center justify-self-center mb-8'>
                        <h1 className='text-header-color md:text-5xl text-3xl font-serif'>Contact Information</h1>
                            <div className='mt-12'>
                                <p className='text-button-color font-bitter font-medium'> Alamat:  </p>
                                <p className='text-sm font-bitter text-p-color font-thin '> Jl. Dago Asri II No. D12, Dago, Kecamatan Coblong, Bandung, 40135 </p>
                                <a className="text-link-color text-xs font-bitter " href="https://maps.app.goo.gl/VaSEDV9ib97FYF9RA?g_st=iw"> Open in Google Maps </a>
                                <p className='mt-2 font-bitter font-medium text-button-color'> Email:  </p>
                                <p className='text-sm font-bitter font-thin text-p-color'> kosmemorialview@gmail.com</p>
                                <p className='mt-2 font-bitter font-medium text-button-color'> Nomor Telepon:  </p>
                                <p className='text-sm font-bitter font-thin text-p-color'> 08122222222</p>
                            </div>
                    </div>
                </div>
            </div>
            
            <Footer/>
    </>)
}

export default Contact;