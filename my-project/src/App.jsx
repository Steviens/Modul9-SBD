import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0 && count % 10 === 0) {
      alert(`${count} is divisible by 10`);
    }
  }, [count]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">
      <div className="bg-white p-10 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Counter Demo</h2>
        <div className="text-center text-5xl font-bold text-gray-900 mb-6">{count}</div>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setCount(count - 1)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold"
          >
            -
          </button>
          <button
            onClick={() => setCount(0)}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold"
          >
            Reset
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
