import React from 'react'
import SectionTitle from './SectionTitle';

import { FaTools, FaWrench, FaCog } from 'react-icons/fa';
const springData = [
  {
    title: "Arlington Garage Door Springs You Can Trust",
    description: "Few people truly understand exactly what a garage door type spring is and what its primary function is with regard to proper garage door operation. Garage door torsion type springs are the muscle that helps to drive a garage door through its up-and-down cycles. Because a garage door can be a heavy object that is made of either aluminum or wood it can easily weigh several hundred pounds. It is the job of the torsion type spring to assist in lifting a heavy garage door multiple times without failing. However, broken garage door spring situations do arise that require the help and assistance of a highly qualified garage door repairman. Our company offers a number of garage door torsion springs for sale that are intended primarily as replacement parts for existing door systems. We always stock brand name products that ensure all of our work is done to precise specifications.",
    icon: FaTools,
  },
  {
    title: "We Will Have the Right Part for your Specific Job",
    description: "Also important to note is that consumers should avoid handling or taking apart a torsion spring assembly. This is primarily due to the fact that garage door type springs are dangerous and can cause harm or injury to those who are not familiar with their operation. A broken garage door type spring should be worked on or disassemble only by a qualified and experienced garage door service technician. This will ensure that homeowners and business owners alike are not subjected to undue danger that could cause bodily injury. Because we offer a number of torsion type springs for sale, our customers can be sure that we will have the right part for their specific job. In addition, our company is always proud to offer complete and unconditional warranties on all parts, as well as guarantees on all services rendered. We are indeed a company that goes out of its way to deliver ultimate customer satisfaction.",
    icon: FaWrench,
  },
  {
    title: "A Garage Door is a Complicated Piece of Machinery",
    description: "Because springs in a garage door are such a vital part of its overall operation it is critical to be certain that this particular component is always functioning properly. Our garage poor technicians understand each and every component of the garage door system and will have your garage door functioning right in a short time and at an affordable price point. We know that the dependable operation of your garage door is important, so we make every effort to be certain that your system functions perfectly before we sign off on any completed job. A garage door is a complicated piece of machinery that is able to protect a home from the elements and offer homeowners quick and easy access to their garage without exposing themselves to the elements. For this very reason it is important that a homeowner has a dependable garage door repair business they can call on when needed. We are indeed such a company and offer trustworthy and respected service for residents of the Arlington area. Our company has a proven track record of exceptional service and unsurpassed customer satisfaction.",
    icon: FaCog,
  }
];


const Spring = () => {

  return (
    <div className='py-16 pt-20' id='springs'>
      <SectionTitle
        title='Springs'
      />
      <div className='grid gap-10 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'>
        {springData.map((item, index) => (
          <div key={index} className='flex flex-col items-center border hover:border-brand-main px-4 py-6 gap-6 hover:shadow-lg  hover:scale-105 transition-all duration-300'>
            <item.icon className='text-[40px] text-brand-main' />
            <h4 className='text-center text-text-dark font-semibold text-2xl'>{item.title}</h4>
            <p className='text-center text-text-light'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Spring

