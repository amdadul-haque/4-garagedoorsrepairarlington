import React from 'react';
import SectionTitle from './SectionTitle';

const openerData = [
  {
    title: "Affordable Arlington Garage Door Opener Repair",
    description: "It seems so easy to take the simple little device known as the garage door opener for granted yet when it fails we find ourselves unable to access our garage. That is why finding affordable Arlington garage door opener type repair service is so useful to residents of the Arlington area. While this simple little device may seem easy to fix, there are in fact a number of items that must be addressed when looking at a garage door type opener.Our expert garage door staff can quickly assess your door opener and repair it quickly and affordable From simple replacement of batteries to more complex circuit board repair our technicians will have your remote control or wall mounted opener for your garage door working at peak performance in short order."
  },
  {
    title: "Name Brand Products at the Most Affordable Price",
    description: "Our company is not limited to simply the repair of openers for garage doors but includes a long list of expert services including new door installations, existing door replacements, track alignments, garage door spring type replacements, as well as a host of other garage door system issues. When considering a new garage door type installation, homeowners will usually be required to decide on either aluminum or wood styled doors, as well as insulated or un-insulated type configurations. Whatever a consumers decides, we have the name brand products at the most affordable price in the Arlington area. We always guarantee expert installation and timely completion of all projects. In addition, customers can expect a fully unlimited guarantee and warranty on all parts, components and products."
  },
  {
    title: "Repair Work for your Remote Garage Door Opener",
    description: "While a typical garage door opener installation cost can sometimes be higher than expected, our company goes out of the way to ensure that we offer the best prices for the highest quality products. When consumers in the Arlington area are looking for garage door opener installation that is fair, reasonable and efficient they call our company above all others. Our staff is well versed in all aspects of opener installation, as well as a wide range of other installation services."
  }
];

const Opener = () => {
  return (
    <div className='py-16 pt-20' id='opener'>
      <SectionTitle
        title='Opener'
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-8">
        {openerData.map((opener, index) => (
          <div key={index} className={`bg-gray-100 p-6 rounded-lg shadow-md ${index == 2 && 'md:col-span-2 lg:w-1/2 lg:mx-auto xl:w-full xl:col-span-1'}`}>
            <h2 className="text-xl font-semibold mb-4">{opener.title}</h2>
            <p className="text-gray-700">{opener.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Opener;
