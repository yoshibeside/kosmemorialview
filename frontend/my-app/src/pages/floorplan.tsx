import './styles/floorplan.css'
import { useState, useEffect } from 'react';
function Floorplan() {

    const [select, setSelect] = useState(-1)
    const [currentPlan, setCurrentPlan] = useState(0)
    const [typeRoom, setTypeRoom] = useState('A')
    const [indexPicRoom, setIndexPicRoom] = useState(0)
    const [stateButtons, setStateButtons] = useState(Array(9).fill(false))
    const [isOpen, setIsOpen] = useState(false);
    const [categoriesF, setCategoriesF] = useState(['Floor 1', 'Floor 2'])
    const [categoriesM, setCategoriesM] = useState(['Floor 3', 'Floor 4'])
    const [selected, setSelected] = useState('Floor 1')


    const datarooms = {
        floor1: {
            amount: 9,
            content: [0,9,8,7,6,5,4,3,2,1]
        },
        floor4: {
            amount: 4,
            content: [1,2,3,4]
        }
    }

    const roomtype = {
        roomA: {
            fasilitas: ['Ukuran: 24 x 5', 'Kamar mandi dalam', 'AC', 'Queen Bed', 'Internet', '2 lemari', 'Meja belajar', 'Kursi', 'Balkoni']
        },
        roomB: {
            fasilitas: ['Ukuran: 24 x 5', 'Kamar mandi dalam', 'AC', 'Queen Bed', 'Internet', '2 lemari', 'Meja belajar', 'Kursi', 'Balkoni']
        },
        roomC: {
            fasilitas: ['Ukuran: 24 x 5', 'Kamar mandi dalam', 'AC', 'Queen Bed', 'Internet', '2 lemari', 'Meja belajar', 'Kursi', 'Balkoni']
        },
    }

    const img_denah = {
        typeA:
        ['./bg-dark1.png', './bg-dark2.png', './campusITB.jpeg', './campusITB_BG.png'],
        typeB:
        ['./bg-dark1.png', './bg-dark2.png', './campusITB.jpeg', './campusITB_BG.png'],
        typeC:
        ['./bg-dark1.png', './bg-dark2.png', './campusITB.jpeg', './campusITB_BG.png'],
    }
    

    const onEnterMouse = (index: number) => {
        setSelect(index)
    }

    const onLeaveMouse = () => {
        setSelect(-1)
    }

    const hoverStyle = (index: number) => {
        if (currentPlan === index) {
            return (
                <div className='bg-button-color w-full h-1'></div>
            )
        } else if  (index === select) {
            return (
                <div className='bg-button-color w-full h-1'></div>
            )
        }
    }

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const pickOne = (item: string) => {
        setSelected(item);
        setIsOpen(false);
    }

    const imgFloor = () => {
        if (selected === 'Floor 1') {
            return (
                <img src='./denah1.jpg' alt='floorplan' className='w-10/12'/>
            )
        } else if (selected === 'Floor 2') {
            return (
                <img src='./denah2.jpg' alt='floorplan' className='w-10/12'/>
            )
        } else if (selected === 'Floor 3') {
            return (
                <img src='./denah3.jpg' alt='floorplan' className='w-10/12'/>
            )
        } else if (selected === 'Floor 4') {
            return (
                <img src='./denah4.jpg' alt='floorplan' className='w-10/12'/>
            )
        }
    }

    useEffect(() => {
        setStateButtons((prevStates) => { // Use a callback function with previous state
            const updatedStates = [...prevStates];
            updatedStates[0] = true
            for (let i = 1; i < 9; i++) {
                updatedStates[i] = false
            }
            return updatedStates;
        });
    }, [categoriesF, categoriesM])

    useEffect(() => {
        if (selected !== 'Floor 4') {
            roomClick('A')
        } else {
            roomClick('C')
        }
    }, [selected])


    const imgRoom = () => {
        var roomup = []
        var roomdown = []
        var level = 'A'
        if (selected === 'Floor 2') {
            level = 'B'
        } else if (selected === 'Floor 3') {
            level = 'C'
        } else if (selected === 'Floor 4') {
            level = 'D'
        }
        if (selected !== 'Floor 4') {
            datarooms.floor1.content.forEach((i)=> {
                if (i == 0) {
                    roomup.push(<div key={0} className='border-2 border-header-color text-p-color w-24 text-center h-36 content-center'>Common Room</div>)
                }
                else if (i > 5) {
                    roomup.push(
                        <button  key={i} onClick={(e) => {roomClick('A'); buttonClick(i)}}  className={`${stateButtons[i] ? 'bg-header-color': ''} border-y-2 border-r-2 border-header-color text-p-color w-24 text-center h-36 content-center hover:bg-header-color`}>{level}0{i}</button>
                    )
                } else if (i === 5) {
                    roomdown.push(
                        <button key={i} onClick={(e) => {roomClick('A'); buttonClick(i)}} className={`${stateButtons[i] ? 'bg-header-color': ''} border-2 border-header-color text-p-color w-24 text-center h-36 content-center hover:bg-header-color`}>{level}0{i}</button>
                    )
                } else {
                    roomdown.push(
                        <button key={i} onClick={(e) => {roomClick('A'); buttonClick(i)}} className={`${stateButtons[i] ? 'bg-header-color': ''} border-y-2 border-r-2 border-header-color text-p-color w-24 text-center h-36 content-center hover:bg-header-color`}>{level}0{i}</button>
                    )
                }
            })
        } 
        else {
            datarooms.floor4.content.forEach((i) => {
                if (i == 0) {
                    roomup.push(<div key={i} className='border-2 border-header-color text-p-color w-24 text-center h-36 content-center'>{level}0{i}</div>)
                } else {
                    roomup.push(
                        <button key={i} onClick={(e) => {roomClick('C'); buttonClick(i)}} className={`${stateButtons[i] ? 'bg-header-color': ''} border-2 border-header-color text-p-color w-24 text-center h-36 content-center hover:bg-header-color`}>{level}0{i}</button>
                    )
                }
            })
        }
        roomup.push(<></>)
        roomdown.push(<></>)
        
        return (
            <>
                <div className='flex justify-center flex-row items-center mb-4 mx-2 align-center '>
                    {roomup}
                </div>
                <div className='flex justify-center flex-row items-center mb-4 mx-2 align-center '>
                    {roomdown}
                </div>
            </>
        )
    }

    const roomTypes = () => {

        if (selected != 'Floor 4') {
            return (
                roomtype.roomC.fasilitas.map((item, index) => (
                    <li key={index} className='mx-4 text-p-color text-sm '>{item}</li>
                ))
            )
        } else {
            return (
                roomtype.roomA.fasilitas.map((item, index) => (
                    <li key={index} className='mx-4 text-p-color text-sm '>{item}</li>
                ))
            )
        }
    }
    const roomTypePrice = () => {
        if (selected != 'Floor 4') {
            return (
                <li className='mx-4 text-p-color text-sm '>Rp. 3.500.000</li>
            )
        } else {
            return (
                <li className='mx-4 text-p-color text-sm '>Rp. 3.700.000</li>
            )
        }
    }

    const imgRoomType = (num: any) => {
        if (typeRoom === 'A') {
            return (
                <img src={img_denah.typeA[num]} alt='floorplan' className='md:h-72 md:w-96 h-64 w-72'/>
            )
        } else if (typeRoom === 'B') {
            return (
                <img src={img_denah.typeB[num]} alt='roomB' className='md:h-72 md:w-96 h-64 w-72'/>
            )
        } else if (typeRoom === 'C') {
            return (
                <img src={img_denah.typeC[num]} alt='roomC' className='md:h-72 md:w-96 h-64 w-72'/>
            )
        }
    }

    const picIndex = () => {
        var pics = []
        if (typeRoom === 'A') {
            for (let i = 0; i < img_denah.typeA.length; i++) {
                if (i === indexPicRoom) {
                    pics.push(
                    <svg className='w-3 mt-2' viewBox="0 0 111 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="55.5" cy="55.5" r="47.5" fill='#8B8383' stroke="#8B8383" strokeWidth="16"/>
                    </svg>
                )
                } else {
                    pics.push(
                        <svg className='w-3 mt-2' viewBox="0 0 111 111" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="55.5" cy="55.5" r="47.5" stroke="#8B8383" strokeWidth="16"/>
                        </svg>
                    )
                }
            }
        }
        return pics
    }

    const rightClick = () => {
        if (typeRoom === 'A') {
            if (indexPicRoom < img_denah.typeA.length - 1) {
                setIndexPicRoom(indexPicRoom + 1)
            } else {
                setIndexPicRoom(0)
            }
        }
    }

    const leftClick = () => {
        if (typeRoom === 'A') {
            if (indexPicRoom - 1 < 0) {
                setIndexPicRoom(img_denah.typeA.length - 1)
            } else {
                setIndexPicRoom(indexPicRoom - 1)
            }
        }
    }

    const roomClick = (type: string) => {
        setTypeRoom(type)
        setIndexPicRoom(0)
    }

    
    const buttonClick = (num: any) => {
        const updatedState = [...stateButtons]
        for (let i = 0; i < 10; i++) {
            updatedState[i] = false
        }
        updatedState[num] = true
        setStateButtons(updatedState);
    }


    return(<> 
            <div className='w-full h-full pb-12' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>

                <div className='headerpage'>
                    <h1 className='text-header-color md:text-7xl text-5xl font-serif'>Floor Plans </h1>
                    <div id='gendercategory' className="mt-8 grid grid grid-cols-2 gap-4 bg-text-link-color text-p-color">
                        <button className='text-center' onMouseEnter={()=>{onEnterMouse(0)}} onMouseLeave={()=>{onLeaveMouse()}} onClick={()=>{setCurrentPlan(0); setSelected('Floor 1');}}>
                            <p>Female Floors</p>
                            {hoverStyle(0)}
                        </button>
                        <button className='text-center' onMouseEnter={()=>{onEnterMouse(1)}} onMouseLeave={()=>{onLeaveMouse()}} onClick={()=>{setCurrentPlan(1); setSelected('Floor 3');}}>
                            <p>Male Floors</p>
                            {hoverStyle(1)}
                        </button>
                    </div>

                    {/* dropdown */}
                    <div className="relative mt-3">
                        <button
                            onClick={toggleDropdown}
                            className="flex items-center py-2 px-4 text-sm font-medium text-center text-gray-500 bg-p-color border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-offset-0 dark:focus:ring-gray-600"
                        >
                            {selected}
                            <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                            </svg>
                        
                        </button>
                        {isOpen && (
                            <ul className="absolute top-full left-0  bg-white border border-gray-300 rounded-md shadow-md overflow-hidden dark:bg-gray-800 dark:border-gray-700">
                                {currentPlan === 0 ? categoriesF.map((item) => (
                                    <button key={item} onClick={()=>{pickOne(item)}} className="block bg-p-color w-full px-4 py-2 text-sm text-black hover:bg-gray-100 dark:hover:bg-gray-700">
                                    {item}
                                    </button>
                                )) : categoriesM.map((item) => (
                                    <button key={item} onClick={()=>{pickOne(item)}} className="block bg-p-color w-full px-4 py-2 text-sm text-black hover:bg-gray-100 dark:hover:bg-gray-700">
                                    {item}
                                    </button>
                                ))}
                            </ul>
                        )}
                    </div>
                    

                    <div className='flex justify-center mt-8 md:flex-row flex-col gap-10'>
                        <div className='md:w-2/5 w-full'>
                            <div className='border-4 border-link-color p-2 flex flex-col justify-center items-center'>
                                <p className='mb-2 text-p-color text-2xl'> Rooms </p>
                                {imgFloor()}
                            </div>
                            
                            <div className='pt-4 border-x-4 border-b-4 border-link-color '>
                                {imgRoom()}
                            </div>
                        </div>

                        <div className='md:w-2/5 w-full'>
                            <div className='border-4 border-link-color p-2 flex flex-col justify-center items-center'>
                                <p className='mb-2 text-p-color text-2xl'> Room Type {typeRoom}</p>

                                <div className='flex flex-row items-center justify-between'>
                                    <button className='h-min' onClick={()=>{leftClick()}}>
                                        <svg className='w-8 hover:bg-hover-gray-color p-2 items-center rounded-lg ' viewBox="0 0 79 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M2.16495 68.9545L71.7265 2.01792C74.2677 -0.427395 78.5 1.37355 78.5 4.9002V27.2636C78.5 28.3713 78.0407 29.4293 77.2315 30.1857L35.8912 68.8299C34.1054 70.4993 34.2215 73.366 36.1365 74.8855L76.9863 107.299C77.9426 108.058 78.5 109.212 78.5 110.432V131.773C78.5 135.196 74.4816 137.038 71.889 134.804L2.32746 74.8671C0.542233 73.3288 0.466908 70.5884 2.16495 68.9545Z" fill="#8B8383" stroke="#8B8383"/>
                                        </svg>
                                    </button>
                                    {imgRoomType(indexPicRoom)}
                                    <button className='h-min' onClick={()=>rightClick()}>
                                        <svg className='w-8 hover:bg-hover-gray-color p-2 items-center rounded-lg ' viewBox="0 0 80 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M77.3351 68.0455L7.77352 134.982C5.23232 137.427 1 135.626 1 132.1L1 109.736C1 108.629 1.4593 107.571 2.26846 106.814L43.6088 68.1701C45.3946 66.5007 45.2785 63.634 43.3635 62.1145L2.5137 29.7011C1.55743 28.9423 1 27.7884 1 26.5677V5.22656C1 1.80429 5.01839 -0.0376129 7.61101 2.19627L77.1725 62.1329C78.9578 63.6712 79.0331 66.4116 77.3351 68.0455Z" fill="#8B8383" stroke="#8B8383"/>
                                        </svg>
                                    </button>
                                </div>
                                <div className='flex justify-center items-center gap-2'>
                                    {picIndex()}
                                </div>
                            </div>
                            
                            <div className='py-4 border-x-4 border-b-4 border-link-color '>
                                <p className='mx-4 text-p-color text-lg '> Fasilitas: </p>
                                {roomTypes()}
                                <p className='mx-4 text-p-color text-lg '> Harga: </p>
                                {roomTypePrice()}
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
            
            
</>)

}

export default Floorplan;