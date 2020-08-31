// This is where the form data is handled
import { WeatherAPI } from "./WeatherAPI";
import { handleError } from "./HandlePromiseError";

const HandleFormData = async (data) => {
  const formData = new FormData(data);
  let weatherErrorHandled = handleError(WeatherAPI);
  let weather = await weatherErrorHandled(formData.get("location"));

  return weather;
};

export { HandleFormData };
