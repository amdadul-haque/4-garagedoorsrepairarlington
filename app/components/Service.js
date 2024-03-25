
import SectionTitle from './SectionTitle';
import { FaTools, FaUserCheck, FaClipboardCheck, FaStar } from 'react-icons/fa';


const Service = () => {
  const services = [
    {
      name: "Arlington Garage Door Repair Service that Exceeds Expectations",
      description: "Our company exceeds expectations in every facet of garage door repair. We offer highly skilled garage door technicians that understand the proper way to repair a garage door and its related components.",
      icon: FaTools
    },
    {
      name: "Ensure That Homeowners Get the Right Product",
      description: "To ensure that homeowners get the right product for their particular needs is the first step in having fully satisfied clients. Our expertly trained staff will carefully plan and prepare for a complete garage door replacement.",
      icon: FaUserCheck
    },
    {
      name: "Alignment and Careful Calibration",
      description: "Perfect alignment and careful calibration will ensure that your garage door will seal your garage from the outdoor elements, as well as open and close on command perfectly every time.",
      icon: FaClipboardCheck
    },
    {
      name: "Expert Service in Arlington TX, Call For a Free Estimation!",
      description: "The text highlights the company's exceptional service and reputation in Arlington, emphasizing their expertise, fair pricing, and commitment to meeting community expectations. They offer affordability and encourage customers to request a free in-home estimate.",
      icon: FaStar
    },
    
  ];
  return (
    <div className='py-16 pt-20' id="service">
      <SectionTitle title="Service" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((feature, index) => (
          <div
            key={index}
            className="flex items-center space-x-4"
          >
            <div className="p-4 bg-gray-100 rounded-full">
              {<feature.icon className="text-2xl md:text-3xl text-brand-main" />}
            </div>
            <div>
              <h3 className="textlg md:text-xl text-text-dark font-semibold mb-3">{feature.name}</h3>
              <p className="text-base text-text-light">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Service




// const serviceData = [
//   {
//     name: "Exceeding Expectations",
//     description: "Arlington residents looking for a trusted garage door repair service in the community should know that our company exceeds expectations in every facet of garage door repair. We exceed expectations primarily because we take pride in the work that we do and offer highly skilled garage door technicians that understand the proper way to repair a garage door and its related components.",
//     icon: FaTools
//   },
//   {
//     name: "Ensure That Homeowners Get the Right Product",
//     description: "Other garage door businesses can say that they deliver quality work at an affordable price, but our company goes above and beyond and delivers on every single job we accept. For example, when considering garage door replacement homeowners should understand that they have a number of options that are technicians will go over with them in detail. To ensure that homeowners get the right product for their particular needs is the first step in having fully satisfied clients. Once a customer has decided on the right product for their particular needs our expertly trained staff will carefully plan and prepare for a complete garage door replacement. This includes removing and disposing of the old garage door.",
//     icon: FaUserCheck
//   },
//   {
//     name: "Alignment and Careful Calibration",
//     description: "Once the old garage door has been discarded technicians will clean and prepare the area in preparation for the new garage door installation. Technicians will then begin to install your new garage door carefully and with great attention to detail. Perfect alignment and careful calibration will ensure that your garage door will seal your garage from the outdoor elements, as well as open and close on command perfectly every time. Technicians will then painstakingly test and check every component of your new garage door to ensure that it is working to and exceeding industry standards. In addition, technicians will always be more than willing to return to a job after initial installation to ensure that everything is functioning perfectly.",
//     icon: FaClipboardCheck
//   },
// ];