import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div>
      <h2 className="font-bold mt-10 mb-5">Find on social media</h2>
      <div className="flex flex-col border border-gray-200 rounded-lg shadow-sm overflow-hidden">
        {/* Facebook Item */}
        <div className="flex items-center gap-4 p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <FaFacebookF className="text-blue-700" />
          </div>
          <span className="text-gray-700 font-medium">Facebook</span>
        </div>

        {/* Twitter Item */}
        <div className="flex items-center gap-4 p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <FaTwitter className="text-sky-400" />
          </div>
          <span className="text-gray-700 font-medium">Twitter</span>
        </div>

        {/* Instagram Item */}
        <div className="flex items-center gap-4 p-4 hover:bg-gray-50 cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <FaInstagram className="text-pink-600" />
          </div>
          <span className="text-gray-700 font-medium">Instagram</span>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
