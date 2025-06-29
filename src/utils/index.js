export const getDateDifferenceFromNow = (fromDate) => {
  let difference = new Date() - new Date(fromDate); // মিলিসেকেন্ড

  difference = difference / 1000; // সেকেন্ডে

  const year = Math.floor(difference / (365 * 24 * 3600));
  difference -= year * 365 * 24 * 3600;

  const month = Math.floor(difference / (30 * 24 * 3600));
  difference -= month * 30 * 24 * 3600;

  const week = Math.floor(difference / (7 * 24 * 3600));
  difference -= week * 7 * 24 * 3600;

  const day = Math.floor(difference / (24 * 3600));
  difference -= day * 24 * 3600;

  const hour = Math.floor(difference / 3600);
  difference -= hour * 3600;

  const minute = Math.floor(difference / 60);
  difference -= minute * 60;

  const second = Math.floor(difference);

  let message = "";

  if (year) message += `${year}y `;
  if (month) message += `${month}mos `;
  if (week) message += `${week}w `;
  if (day) message += `${day}d `;
  if (hour) message += `${hour}h `;
  if (minute) message += `${minute}m `;
  if (second) message += `${second}s`;

  return message.trim() || "Just now";
};
