// function to simulate api request

const apiRequest = (id, time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Request${id} completed in ${time}ms`);
    }, time);
  });
};

// Throttled execution function
const throttledAPI = (requests, maxConcurrent) => {
  const results = [];
  let running = 0;
  let currentIndex = 0;

  return new Promise((resolve) => {
    // Function to process the next request
    const processNext = () => {
      if (currentIndex >= requests.length && running === 0) {
        resolve(results); // Resolve when all request are prosceesed
        return;
      }
      if (running < maxConcurrent && currentIndex < requests.length) {
        running++; // Increment running count
        const index = currentIndex;
        const req = requests[currentIndex];
        currentIndex++;

        req().then((result) => {
          results[index] = result; // Store the result
          running--;
          processNext();
        });
      }
    };
    // Start the initial batch
    for (let i = 0; i < maxConcurrent; i++) {
      processNext();
    }
  });
};

// Create an array of simulated API request
const request = [
  () => apiRequest(1, 1000),
  () => apiRequest(1, 500),
  () => apiRequest(1, 1500),
  () => apiRequest(1, 100),
  () => apiRequest(1, 2000),
];

// Run the thorttled API with a limit of 2 concurrent req
throttledAPI(request, 2).then((results) => {
  console.log("Resuls: ", results);
});
