import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";

export default function ResultModal({ isOpen, onClose, onVerify }) {
  const [passportNumber, setPassportNumber] = useState("");
  const [certificateSerial, setCertificateSerial] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onVerify(passportNumber, certificateSerial);
  };

  const handleCancel = () => {
    setPassportNumber("");
    setCertificateSerial("");
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <div
      onClick={onClose}
      className="fixed top-0 left-0 w-full h-full bg-black/40 flex items-center  flex-col justify-center md:justify-start z-[555] p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg shadow-xl w-full max-w-[500px] mx-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 pb-8">
          <h2 className="text-lg font-semibold text-gray-900">
            Check labor result
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 duration-100 hover:rotate-90 p-1"
            aria-label="Close modal"
          >
            <RxCross2 />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 pb-6">
          <div className="space-y-4">
            {/* Passport Number Field */}
            <div>
              <label
                htmlFor="passportNumber"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Passport Number
              </label>
              <input
                type="text"
                id="passportNumber"
                value={passportNumber}
                onChange={(e) => setPassportNumber(e.target.value)}
                placeholder="Enter Passport Number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-sm"
              />
            </div>

            {/* Occupation Key
             */}
            <div>
              <label
                htmlFor="certificateSerial"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Occupation Key
              </label>
              <input
                type="text"
                id="certificateSerial"
                value={certificateSerial}
                onChange={(e) => setCertificateSerial(e.target.value)}
                placeholder="Enter Occupation Key"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-sm"
              />
            </div>

            {/* Nationality Code */}
            <div>
              <label
                htmlFor="certificateSerial"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Nationality Code
              </label>
              <input
                type="text"
                id="certificateSerial"
                value={certificateSerial}
                onChange={(e) => setCertificateSerial(e.target.value)}
                placeholder="Enter Nationality Code"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-sm"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={handleCancel}
              className="px-6 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 text-sm font-medium text-white bg-teal-600 border border-transparent rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors"
            >
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
