"use client";

import { useState, useEffect } from "react";
import CookiePreferencesModal from "./CookiePreferencesModal";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  return (
    <>
      {visible && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 md:p-6 border-t z-50">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-lg text-gray-700">
              We use cookies to improve your experience. You can accept, reject,
              or choose your preferences.
            </p>

            <div className="flex flex-col md:flex-row gap-2">
              <button
                onClick={handleAccept}
                className="px-4 py-2 bg-black text-white text-sm rounded"
              >
                Accept
              </button>

              <button
                onClick={handleReject}
                className="px-4 py-2 bg-gray-700 text-white text-sm rounded"
              >
                Reject
              </button>

              <button
                onClick={() => setShowPreferences(true)}
                className="px-4 py-2 text-lg text-black underline"
              >
                Preferences
              </button>
            </div>
          </div>
        </div>
      )}

      {showPreferences && (
        <CookiePreferencesModal onClose={() => setShowPreferences(false)} />
      )}
    </>
  );
}
