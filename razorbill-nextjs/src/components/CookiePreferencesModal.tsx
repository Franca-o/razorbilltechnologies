"use client";

import { useState } from "react";

export default function CookiePreferencesModal({
  onClose,
}: {
  onClose: () => void;
}) {
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  const savePreferences = () => {
    const preferences = {
      analytics,
      marketing,
    };

    localStorage.setItem("cookie-consent", "custom");
    localStorage.setItem("cookie-preferences", JSON.stringify(preferences));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-xl">
        <h2 className="text-lg text-black font-semibold mb-4">Cookie Preferences</h2>

        <div className="space-y-4">
          <label className="flex items-center gap-3 text-black">
            <input
              type="checkbox"
              checked={analytics}
              onChange={(e) => setAnalytics(e.target.checked)}
            />
            <span>Analytics cookies</span>
          </label>

          <label className="flex items-center gap-3 text-black">
            <input
              type="checkbox"
              checked={marketing}
              onChange={(e) => setMarketing(e.target.checked)}
            />
            <span>Marketing cookies</span>
          </label>
        </div>

        <div className="flex justify-end mt-6 gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-black rounded"
          >
            Cancel
          </button>

          <button
            onClick={savePreferences}
            className="px-4 py-2 bg-black text-white rounded"
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
}
