import './styles/amenities.css'
import Footer from '../components/footer';
import { useState } from 'react';
import Navbar from '../components/navbar';

function Contact() {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index: any) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const faqData = [
        { question: "Minimal waktu sewa berapa?", answer: "Masa sewa minimal adalah 1 tahun" },
        { question: "Pembayaran setiap berapa bulan?", answer: "Pembayaran minimal adalah 2 bulan. Dengan pembayaran pertama kali adalah 3 bulan yang mana 1 bulan merupakan deposit yang akan dikembalikan pada masa akhir sewa. Jika penghuni keluar sebelum masa akhir sewa, uang deposit hangus." },
        { question: "Fasilitas yang tersedia pada setiap lantai apa?", answer: "Communal area, dapur, kulkas, dispenser, dan microwave (untuk setiap 2 lantai)" },
        { question: "Boleh membawa teman yang bukan lawan jenis ke kamar?", answer: "Dilarang membawa masuk kamar teman lawan jenis. Tamu yang datang sebaiknya dilaporkan terlebih dahulu." },
        { question: "Apakah tersedia parkiran mobil/motor?", answer: "Iya, tersedia parkiran luas dan dijaga 24/7" },
        { question: "Apakah tersedia jasa laundry?", answer: "Iya, jasa laundry dan cleaning service sepaket dengan harga Rp 150.000/bulan" },        
    ];

    return(<> 
            <Navbar />
            <div className='w-full h-full flex flex-col items-center justify-center bgcontact'>

                <div className='grid md:grid-cols-2 grid-cols-1 gap-4 w-11/12 mt-28 mb-8'>
                    <div>
                        <h1 className='text-header-color md:text-5xl mt-8 text-3xl font-martionmono font-semibold'>FAQs</h1>
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
                    
                    <div className='p-2 rounded-lg text-md text-align-left border border-link-color w-4/5 h-96 self-center justify-self-center mb-8'>
                        <h1 className='text-header-color md:text-5xl text-3xl font-martionmono font-semibold'>Contact Information</h1>
                            <div className='mt-12'>
                                <p className='text-button-color text-lg font-martionmono font-semibold'> Alamat:  </p>
                                <p className='text-sm font-martionmono text-p-color '> Jl. Dago Asri II No. D12, Dago, Kecamatan Coblong, Bandung, 40135 </p>
                                <a className="text-link-color text-xs font-bitter " href="https://maps.app.goo.gl/veB5JtB2jRawmb3G6"> Open in Google Maps </a>
                                <p className='mt-2 text-lg font-martionmono font-semibold text-button-color'> Email:  </p>
                                <p className='text-sm font-martionmono text-p-color'> kosmemorialview@gmail.com</p>
                                <p className='mt-2 text-lg font-martionmono font-semibold text-button-color'> Nomor Telepon:  </p>
                                <p className='text-sm font-martionmono text-p-color'> +6287782983096</p>
                            </div>
                    </div>
                </div>
            </div>
            
            <Footer/>
    </>)
}

export default Contact;