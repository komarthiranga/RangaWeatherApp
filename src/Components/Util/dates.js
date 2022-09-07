export const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  
  export const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  
  const pad = (num, size) => {
    return ("0" + num).substr(-size);
  };
  
  export const getDisplayTime = timestamp => {
    const time = new Date(timestamp * 1000);
    return `${pad(time.getHours(), 2)}:${pad(time.getMinutes(), 2)}`;
  };
  
  export const getDisplayDayAndDate = timestamp => {
    const time = new Date(timestamp * 1000);
    return `${days[time.getDay()]}, ${months[time.getMonth()]} ${time.getDate()}`;
  };
  