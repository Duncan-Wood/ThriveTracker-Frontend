import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";

export default function TimeTracker() {
  const navigate = useNavigate();
  const { timeTrackers, setSelectedTimeTracker } = useContext(AppContext);

  const showTimeTracker = (id) => {
    const selectedTimeTracker = timeTrackers.find(
      (timeTracker) => timeTracker.id === id
    );
    setSelectedTimeTracker(selectedTimeTracker);
    navigate(`/timetracker/details/${id}`);
  };
  const handleCreateTimeTracker = () => {
    navigate("/createtimetracker");
  };

  return (
    <>
      <div>
        <h3 className="text-2xl font-bold mb-4">Time Trackers</h3>
        <button
          onClick={handleCreateTimeTracker}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
        >
          Create Time Tracker
        </button>{" "}
        {timeTrackers ? (
          timeTrackers.map((timeTracker, id) => {
            return (
              <div
                key={id}
                className="bg-white rounded-lg shadow-md p-4 mb-4 flex justify-between items-center"
              >
                <div>
                  <h4 className="text-lg font-semibold">
                    {timeTracker.addiction}
                  </h4>
                  <p className="text-gray-500">
                    {timeTracker.addiction_description}
                  </p>
                </div>
                <button
                  className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md"
                  onClick={() => showTimeTracker(timeTracker.id)}
                >
                  View Details
                </button>
              </div>
            );
          })
        ) : (
          <p>Loading time trackers...</p>
        )}
      </div>
    </>
  );
}
