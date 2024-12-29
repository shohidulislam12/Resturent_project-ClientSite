import React from 'react';

const SectionTitle = ({heading,subheading}) => {
    return (
        <div className="text-center mt-10 mb-20">
        <span className="block text-sm  text-red-600">
          ----{subheading}-----
        </span>
        <span className="block text-2xl w-1/3 mx-auto my-6 p-3  border-y-4 uppercase font-semibold text-gray-800">
    {heading}
        </span>
    </div>
    );
};

export default SectionTitle;