const allTime = [
  "4:00am",
  "4:30am",
  "5:00am",
  "5:30am",
  "6:00am",
  "6:30am",
  "7:00am",
  "7:30am",
  "8:00am",
  "8:30am",
  "9:00am",
  "9:30am",
  "10:00am",
  "10:30am",
  "11:00am",
  "11:30am",
  "12:00pm",
  "12:30pm",
  "1:00pm",
  "1:30pm",
  "2:00pm",
  "2:30pm",
  "3:00pm",
  "3:30pm",
  "4:00pm",
  "4:30pm",
  "5:00pm",
  "5:30pm",
  "6:00pm",
  "6:30pm",
  "7:00pm",
  "7:30pm",
  "8:00pm",
  "8:30pm",
  "9:00pm",
  "9:30pm",
  "10:00pm",
  "10:30pm",
  "11:00pm",
  "11:30pm",
  "12:00am",
  "12:30am",
  "1:00am",
  "1:30am",
];

const objDay = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

const date = () => {
  const returnArr = [];
  const date = new Date();
  let dateNum = date.getDay();
  while (dateNum >= 0) {
    const tempDate = new Date();
    const thing = tempDate.setDate(tempDate.getDate() - dateNum);
    returnArr.push(new Date(thing));
    dateNum--;
  }
  dateNum = 1;
  while (dateNum < 7 - date.getDay()) {
    const tempDate = new Date();
    const thing = tempDate.setDate(tempDate.getDate() + dateNum);
    returnArr.push(new Date(thing));
    dateNum++;
  }

  return returnArr;
};

export { date, allTime, objDay };
