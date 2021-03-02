import moment from "moment";

export function formatDate(date: string): string {
  return moment(date).format('MMMM Do YYYY, h:mm a');
};


export function convertNumToTime(time: number): { hours: number, minutes: number } {
  let hours = 0;
  let minutes = 0;

  if (time) {
    if (time % 1 === 0) {
      hours = Math.floor(time)
    } else {
      hours = Math.floor(time)
      const diff = time - hours;
      minutes = Math.ceil(60 * diff);
    }
  }
  return { hours, minutes }
}