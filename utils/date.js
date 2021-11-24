function getDayOfTheWeek(utc) {
  const date = new Date(utc * 1000);
  const dayIndex = date.getDay();
  let day;

  switch (dayIndex) {
    case 0:
      day = "Duminică";
      break;
    case 1:
      day = "Luni";
      break;
    case 2:
      day = "Marți";
      break;
    case 3:
      day = "Miercuri";
      break;
    case 4:
      day = "Joi";
      break;
    case 5:
      day = "Vineri";
      break;
    case 6:
      day = "Sâmbătă";
      break;
    default:
      throw new Error("Indexul trebuie sa fie intre 0 si 6.");
  }


  return day;
}

function getHour(utc) {
  const date = new Date(utc * 1000);
  let hours = date.getHours();
  if (hours < 10) {
    hours = "0" + hours;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return `${hours}:${minutes}`;
}
