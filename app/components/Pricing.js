import React from 'react';
import SectionTitle from './SectionTitle';


const pricing = [
  {
    zipCode: "76001",
    serviceCallAndEstimate: "Free Estimate / No Charge",
    repair: "$120-$385",
    springReplacement: "$175-$360",
    openerInstall: "$575-$850",
    garageDoorInstalled: "$1450 - $1750"
  },
  {
    zipCode: "76002",
    serviceCallAndEstimate: "Free Estimate / No Charge",
    repair: "$120-$385",
    springReplacement: "$175-$360",
    openerInstall: "$575-$850",
    garageDoorInstalled: "$1450 - $1750"
  },
  {
    zipCode: "76003",
    serviceCallAndEstimate: "Free Estimate / No Charge",
    repair: "$120-$385",
    springReplacement: "$175-$360",
    openerInstall: "$575-$850",
    garageDoorInstalled: "$1450 - $1750"
  },
  {
    zipCode: "76004",
    serviceCallAndEstimate: "Free Estimate / No Charge",
    repair: "$120-$385",
    springReplacement: "$175-$360",
    openerInstall: "$575-$850",
    garageDoorInstalled: "$1450 - $1750"
  },
  {
    zipCode: "76005",
    serviceCallAndEstimate: "Free Estimate / No Charge",
    repair: "$120-$385",
    springReplacement: "$175-$360",
    openerInstall: "$575-$850",
    garageDoorInstalled: "$1450 - $1750"
  },
  {
    zipCode: "76006",
    serviceCallAndEstimate: "Free Estimate / No Charge",
    repair: "$120-$385",
    springReplacement: "$175-$360",
    openerInstall: "$575-$850",
    garageDoorInstalled: "$1450 - $1750"
  },
  {
    zipCode: "76007",
    serviceCallAndEstimate: "Free Estimate / No Charge",
    repair: "$120-$385",
    springReplacement: "$175-$360",
    openerInstall: "$575-$850",
    garageDoorInstalled: "$1450 - $1750"
  },
  {
    zipCode: "76010",
    serviceCallAndEstimate: "Free Estimate / No Charge",
    repair: "$120-$385",
    springReplacement: "$175-$360",
    openerInstall: "$575-$850",
    garageDoorInstalled: "$1450 - $1750"
  },
  {
    zipCode: "76011",
    serviceCallAndEstimate: "Free Estimate / No Charge",
    repair: "$120-$385",
    springReplacement: "$175-$360",
    openerInstall: "$575-$850",
    garageDoorInstalled: "$1450 - $1750"
  },
  {
    zipCode: "76012",
    serviceCallAndEstimate: "Free Estimate / No Charge",
    repair: "$120-$385",
    springReplacement: "$175-$360",
    openerInstall: "$575-$850",
    garageDoorInstalled: "$1450 - $1750"
  },
  {
    zipCode: "76013",
    serviceCallAndEstimate: "Free Estimate / No Charge",
    repair: "$120-$385",
    springReplacement: "$175-$360",
    openerInstall: "$575-$850",
    garageDoorInstalled: "$1450 - $1750"
  },
  {
    zipCode: "76014",
    serviceCallAndEstimate: "Free Estimate / No Charge",
    repair: "$120-$385",
    springReplacement: "$175-$360",
    openerInstall: "$575-$850",
    garageDoorInstalled: "$1450 - $1750"
  },
  {
    zipCode: "76015",
    serviceCallAndEstimate: "Free Estimate / No Charge",
    repair: "$120-$385",
    springReplacement: "$175-$360",
    openerInstall: "$575-$850",
    garageDoorInstalled: "$1450 - $1750"
  },
  {
    zipCode: "76016",
    serviceCallAndEstimate: "Free Estimate / No Charge",
    repair: "$120-$385",
    springReplacement: "$175-$360",
    openerInstall: "$575-$850",
    garageDoorInstalled: "$1450 - $1750"
  },
  {
    zipCode: "76017",
    serviceCallAndEstimate: "Free Estimate / No Charge",
    repair: "$120-$385",
    springReplacement: "$175-$360",
    openerInstall: "$575-$850",
    garageDoorInstalled: "$1450 - $1750"
  },
  {
    zipCode: "76018",
    serviceCallAndEstimate: "Free Estimate / No Charge",
    repair: "$120-$385",
    springReplacement: "$175-$360",
    openerInstall: "$575-$850",
    garageDoorInstalled: "$1450 - $1750"
  },
  {
    zipCode: "76094",
    serviceCallAndEstimate: "Free Estimate / No Charge",
    repair: "$120-$385",
    springReplacement: "$175-$360",
    openerInstall: "$575-$850",
    garageDoorInstalled: "$1450 - $1750"
  },
  {
    zipCode: "76096",
    serviceCallAndEstimate: "Free Estimate / No Charge",
    repair: "$120-$385",
    springReplacement: "$175-$360",
    openerInstall: "$575-$850",
    garageDoorInstalled: "$1450 - $1750"
  }
];


const tableHead = [
  "Zip Code",
  "Service Call & Estimate",
  "Repair",
  "Spring Replacement",
  "7' Liftmaster Opener Install (LM)",
  "16x7 Garage Door Installed (25G)"
];



const Pricing = () => {
  return (
    <div className="my-20 mb-28 ">
      <SectionTitle title="Price Range for Garage Door Service in the City of Arlington Texas" />
      <div className='w-full overflow-x-scroll lg:overflow-hidden'>
        <table className="border-collapse border border-gray-400 mx-auto"

        >
          <thead className='w-full overflow-x-scroll'>
            <tr className="bg-brand-main text-white">
              {
                tableHead.map((item, index) => (
                  <th className="text-sm sm:text-base border border-gray-400 px-2 sm:px-4 py-2 text-center">{item}</th>
                ))
              }
            </tr>
          </thead>

          <tbody className='w-full'>
            {pricing.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100 hover:bg-gray-200' : 'bg-white hover:bg-gray-200'}>
                <td className="text-sm sm:text-base border border-gray-400 px-2 sm:px-4 py-2 text-center break-keep">{item.zipCode}</td>
                <td className="text-sm sm:text-base border border-gray-400 px-2 sm:px-4 py-2 text-center break-keep">{item.serviceCallAndEstimate}</td>
                <td className="text-sm sm:text-base border border-gray-400 px-2 sm:px-4 py-2 text-center break-keep">{item.repair}</td>
                <td className="text-sm sm:text-base border border-gray-400 px-2 sm:px-4 py-2 text-center break-keep">{item.springReplacement}</td>
                <td className="text-sm sm:text-base border border-gray-400 px-2 sm:px-4 py-2 text-center break-keep">{item.openerInstall}</td>
                <td className="text-sm sm:text-base border border-gray-400 px-2 sm:px-4 py-2 text-center break-keep">{item.garageDoorInstalled}</td>
              </tr>
            ))}
          </tbody>
        </table >
      </div>

    </div>
  );
};

export default Pricing;
