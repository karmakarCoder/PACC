import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaCheckCircle } from "react-icons/fa";
import ValidSvg from "../assets/Svg/ValidSvg";

export default function CertificateModal({ isOpen, onClose, onVerify }) {
  const [passportNumber, setPassportNumber] = useState("");
  const [certificateSerial, setCertificateSerial] = useState("");
  const [loading, setLoading] = useState(false);
  const [certificateData, setCertificateData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setCertificateData(null);

    try {
      const result = await onVerify(passportNumber, certificateSerial);

      // Simulate API delay
      setTimeout(() => {
        setCertificateData(result);
        setLoading(false);
      }, 1200);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setPassportNumber("");
    setCertificateSerial("");
    setCertificateData(null);
    onClose();
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed left-0 top-0 w-full h-full flex-col bg-black/40 flex items-center justify-center md:justify-start z-[555] p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg shadow-xl w-full max-w-[500px]"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 pb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Check certificate validity
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 text-xl hover:rotate-90 duration-200 p-1"
          >
            <RxCross2 />
          </button>
        </div>

        {/* Loading Spinner */}
        {loading && (
          <div className="flex justify-center items-center h-52">
            <div className="w-10 h-10 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* Certificate Result */}
        {!loading && certificateData && (
          <div className="p-6 pt-2">
            <div className="bg-[#f2f9f9] rounded-xl p-6">
              <div className="flex items-center gap-1 font-medium mb-3">
                <ValidSvg />
                <span>Valid</span>
              </div>

              <p className="text-sm text-gray-500">
                Certificate Serial Number:
              </p>
              <h3 className="text-xl font-medium mb-4">
                {certificateData.serial}
              </h3>

              <div className="grid grid-cols-2 gap-y-5 text-sm pt-4 border-t-[0.5px] border-t-[#daf1f1]">
                <div>
                  <p className="text-gray-500">Passport Number:</p>
                  <p className="font-medium">{certificateData.passport}</p>
                </div>
                <div>
                  <p className="text-gray-500">Valid Until:</p>
                  <p className="font-medium">{certificateData.validUntil}</p>
                </div>
                <div>
                  <p className="text-gray-500">Occupation:</p>
                  <p className="font-medium">{certificateData.occupation}</p>
                </div>
                <div>
                  <p className="text-gray-500">Labor Name:</p>
                  <p className="font-medium">{certificateData.laborName}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-6 gap-3">
              <button
                onClick={() => setCertificateData(null)}
                className="px-6 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Back
              </button>
              <button
                onClick={handleCancel}
                className="px-6 py-2 text-sm font-medium text-white bg-teal-600 rounded-md hover:bg-teal-700"
              >
                Done
              </button>
            </div>
          </div>
        )}

        {/* Input Form */}
        {!loading && !certificateData && (
          <form onSubmit={handleSubmit} className="px-6 pb-6">
            <div className="space-y-4">
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
                  placeholder="Enter Certificate Serial Number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none text-sm"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                type="button"
                onClick={handleCancel}
                className="px-6 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 text-sm font-medium text-white bg-teal-600 rounded-md hover:bg-teal-700"
              >
                Verify
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
