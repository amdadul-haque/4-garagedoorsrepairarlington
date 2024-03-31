import React from 'react';
import SectionTitle from './SectionTitle';

const Repair = () => {
  const sections = [
    {
      title: "The Finest Garage Door Repairs For Arlington Homeowners",
      description: "Residents of Arlington who may find that they have a broken or non-functioning garage door should seek the services of an outstanding business that provides garage door repairs. We are one such company in the Arlington area that provides exceptionally good high quality repairs, maintenance and servicing for a wide range of garage doors. In addition, we are always standing by and ready to deal with any emergency garage door repair Arlington residents find themselves needing. No job is too large or too small, and no time of day is the wrong time of day for our expert garage door service agents. We employ a staff of highly skilled and expertly trained garage door technicians. Each of our technicians brings years of experience to the table and are always committed to clean work and attention to detail. From garage door panel repair to garage door opener repair and every other imaginable repair related to garage doors we are the company of choice."
    },
    {
      title: "Free Estimates on All Upcoming Jobs",
      description: "Because Arlington residents expect the best in garage door type service and repair, they always return to our company for help with all their door related work. This is evident by our long list of regular customers and clients. It is true that many of our customers are repeat customers who have been highly satisfied with the work we perform. Few companies in the industry can deliver the track record and proven performance our company is able to deliver. The repairing of garage doors as well as routine maintenance and inspections is something that we take pride in, and offer each of our customers regardless of where they located in the Arlington community.Our company is also proud to offer free estimates on all upcoming jobs as well as same day guaranteed service. The ultimate goal of our company is always complete customer satisfaction. In addition, we have some of the best pricing on garage door parts and services in the industry."
    },
    {
      title: "Emergency Garage Systems and Door Repair",
      description: "From simple repairs to garage door panel repairs and torsion springs we offer every type of repair and maintenance imaginable with regard to garage doors. One key feature of our company is our emergency garage systems and door repairs. We are always able to dispatch a technician to your home regardless of the time of day to ensure that when an emergency arises that you will have a technician who can service your garage door immediately. Getting stranded outside of your home when your garage door fails is not an enjoyable experience, and that is why our technicians are always ready to assist our customers in emergency situations."
    }
  ];


  return (
    <div className="py-16 pt-20" id='repair'>
      <SectionTitle title="Repair" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map((section, index) => (
          <div key={index} className={`border border-gray-200 py-5 px-5 rounded-lg shadow-md`}>
            <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
            <p className="text-text-gray ">{section.description}</p>
          </div>
        ))}
        <div>
          <a href="https://veterangaragedoor.com/garage-door-repair-grand-prairie-tx/" target='_blank'>
            <img src="./images/slider/3.jpg" alt="slider" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Repair;
