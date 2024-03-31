function get_headers() {
  const config = {
    withCredentials: true,
    credentials: "include",
    baseURL: "https://two4-03-24.onrender.com",
    headers: {
      "Content-Type": "application/json",
      'Accept':'Application/json'
    },
  };
  return config;
}
function multi_methods_headers() {
  const config = {
    withCredentials: true,
    credentials: "include",
    baseURL: "https://two4-03-24.onrender.com",
    headers: {
      "Content-Type": "application/json",
      'Accept':'Application/json'
    },
  };
  return config;
}

export { get_headers, multi_methods_headers };
