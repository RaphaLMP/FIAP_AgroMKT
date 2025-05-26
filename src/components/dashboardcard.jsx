import React from 'react';

const DashboardCard = ({ imageSrc, title, value, valueDescription, buttonText, additionalInfo }) => {
  return (
    <div className="flex items-stretch">
      <div className="card w-full bg-white shadow-md rounded-lg border border-gray-500">
        <div className="card-header p-4 bg-green-600 text-white flex justify-center items-center rounded-t-lg">
          <img
            src={imageSrc}
            alt={title}
            className="w-12 h-12 rounded-full mr-2 border-2 border-gray-700"
          />
          <h4 className="text-lg font-semibold">{title}</h4>
        </div>
        <div className="card-body p-4 text-center">
          <h1 className="text-2xl font-bold text-gray-600">
            {value}<small className="text-sm text-gray-500">{valueDescription}</small>
          </h1>
          <ul className="mt-3 mb-4 text-gray-600">
            {additionalInfo && additionalInfo.map((info, index) => <li key={index}>{info}</li>)}
          </ul>
          {/* <button className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">
            {buttonText}
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
