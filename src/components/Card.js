import React from 'react'
import Rate from './Rate'
import CardSlide from './CardSlide'
import Sale from "./Sale"


function Card() {
    return (
        <div className="relative flex flex-row object-contain space-x-4 p-4 rounded-2xl bg-white shadow-xl max-w-2xl ">
            <Sale/>
            <div className="flex flex-col w-1/2">
                <img className="" src="./assets/images/image.jpg"></img>
                <CardSlide/>
            </div>
            <div className="flex w-1/2 flex flex-col">
                <Rate/>
                <h3 className="text-red-600 font-sans text-xl pt-2">Khóa học: Tiếng Nhật Cơ Bản </h3>
                <h1 className="text-black font-sans text-sm">Trung tâm: Paracel Project Education</h1>
                <ul className="text-xs text-blue-800 font-sans list-disc p-5">
                    <li>Cam kết thành thạo giao tiếp sau khóa học</li>
                    <li>100% Giáo viên nước ngoài</li>
                    <li>Học phí: 4,000.000 VNĐ</li>
                    <li>Thời gian: 4 tháng</li>
                    <li>Hình thức học: Offline</li>
                </ul>
                <button class="bg-yellow-400 hover:bg-yellow-500 text-white shadow-xl font-bold text-sm p-1 m-1 rounded-lg w-1/3">Button</button>
            </div>
        </div>
    )
}

export default Card
