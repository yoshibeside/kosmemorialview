import './styles/amenities.css'
import Footer from '../components/footer';
import { useState } from 'react';

function Contact() {

    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index: any) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const faqData = [
        { question: "Minimal waktu sewa berapa?", answer: "Masa sewa minimal adalah 1 tahun" },
        { question: "Pembayaran setiap berapa bulan?", answer: "Sekali pembayaran adalah setiap 2 bulan. Dengan pembayaran pertama kali adalah 3 bulan yang mana 1 bulan merupakan deposit yang akan dikembalikan pada masa akhir sewa. Jika penghuni keluar sebelum masa akhir sewa, uang deposit hangus." },
        { question: "Apakah sudah termasuk listrik?", answer: "Tidak, listrik setiap kamar menggunakan token" },
        { question: "Fasilitas yang tersedia pada setiap lantai apa?", answer: "Communal area, dapur, kulkas, dispenser, dan microwave (untuk setiap 2 lantai)" },
        { question: "Boleh membawa teman yang bukan lawan jenis ke kamar?", answer: "Tamu yang datang sebaiknya dilaporkan terlebih dahulu. Dilarang membawa masuk kamar teman lawan jenis." },
        { question: "Apakah parkiran gratis?", answer: "Tidak, parkiran untuk mobil Rp200.000/bulan, untuk motor 100.000/bulan" },
        { question: "Apakah tersedia jasa laundry?", answer: "Iya, jasa laundry dan cleaning service sepaket dengan harga Rp 150.000/bulan" },
      ];


    return(<> 
            <div className='w-full h-full flex flex-col items-center justify-center bgcontact'>

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