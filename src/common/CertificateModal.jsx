import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

export default function CertificateModal({ isOpen, onClose, onVerify }) {
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

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 pb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Check certificate validity
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
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
                placeholder="A04252094"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
              />
            </div>

            {/* Certificate Serial Number Field */}
            <div>
              <label
                htmlFor="certificateSerial"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Certificate Serial Number
              </label>
              <input
                type="text"
                id="certificateSerial"
                value={certificateSerial}
                onChange={(e) => setCertificateSerial(e.target.value)}
                placeholder="168998740"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
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
