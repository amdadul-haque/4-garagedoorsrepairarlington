import React from 'react';
import SectionTitle from './SectionTitle';

const Installation = () => {
  const installationData = [
    {
      title: "Garage Door Installation Company Arlington Can Count On",
      description: "The proper installation of a garage door takes great care and requires the expert services of a garage door installation company that truly knows the business. Our company is one such company that goes the extra mile and who always provides customers with a garage door installer who has years of experience in this type of work. For quality garage door sales and installation, Arlington homeowners and business owners should turn to our company for the best work in the industry. Few companies can compare to what our company is able to accomplish with each and every garage door project we work on in the Arlington area. Getting this type of work done right the first time around is what our installers are all about."
    },
    {
      title: "The Decision-Making Process",
      description: "Our company always makes it a point to incorporate the use of name brand products that are of the highest quality. In addition, we ensure that all of our installers are expertly trained and highly qualified in all aspects of the installation process with regard to garage doors. When considering the installation of a garage door, consumers should understand that they have a number of options. For example, they may decide upon an aluminum door, a wood door, or several other variations of garage doors. Also part of the decision-making process is deciding on whether or not to use an insulated garage door. While an uninsulated garage door will be slightly less costly than an insulated garage door, each customer can decide on their own specific needs."
    },
    {
      title: "Top-Quality Service",
      description: "We are the industry leader in garage door sales and installation; giving the Arlington community some of the best garage door work in the industry. We always provide clean work and fully guaranteed installations. As a company we are never satisfied until our customers are completely satisfied. While the cost of installation of a garage door can vary greatly, one thing is certain, and that is that we will provide top-quality service regardless of your choice of installation. In addition, our professionally trained installers are always prompt, courteous and friendly in addition to being highly qualified and skilled. Having the right company for something as important as the installation of a garage door is key to having a successful installation."
    }
  ];


  return (
    <div className='py-16 pt-20' id='installation'>
      <SectionTitle title="Installation" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {installationData.map((item, index) => (
          <div key={index} className={`flex items-center bg-gray-50 p-4 py-6 rounded-md shadow-md ${index == 2 && 'md:col-span-2 lg:w-1/2 lg:mx-auto xl:w-full xl:col-span-1'}`}>
            <div>
              <h3 className="text-xl text-text-dark font-semibold">{item.title}</h3>
              <p className="text-text-light mt-4">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
