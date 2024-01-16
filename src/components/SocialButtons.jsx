import React from 'react';

const SocialButtons = () => {
  return (
    <div className="flex justify-center items-center space-x-4">
      <a href="https://www.facebook.com/profile.php?id=100016196253279&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600">
        <img src="/fb.png" alt="Facebook" className="w-5 h-5 object-cover" />
      </a>
      <a href="https://www.instagram.com/f._.malik?igsh=dWs5dDN5bGhsdmxs&utm_source=qr" target="_blank" rel="noopener noreferrer" className="bg-pink-500 text-white rounded-full p-2 hover:bg-pink-600">
        <img src="/instagram.png" alt="Instagram" className="w-5 h-5 object-cover" />
      </a>
      <a href="YOUR_LINKEDIN_LINK" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700">
        <img src="/linkedin.png" alt="LinkedIn" className="w-5 h-5 object-cover" />
      </a>
      <a href="https://github.com/faizanmalik2023" target="_blank" rel="noopener noreferrer" className="bg-gray-600 text-white rounded-full p-2 hover:bg-gray-700">
        <img src="/github.png" alt="GitHub" className="w-5 h-5 object-cover" />
      </a>
    </div>
  );
};

export default SocialButtons;
