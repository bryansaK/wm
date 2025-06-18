export function formatRelativeDate(dateStr: string): string {
  const inputDate = new Date(dateStr);
  const now = new Date();

  const input = new Date(
    inputDate.getFullYear(),
    inputDate.getMonth(),
    inputDate.getDate(),
    inputDate.getHours(),
    inputDate.getMinutes()
  );

  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const diffTime = input.getTime() - today.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  const hours = inputDate.getHours().toString().padStart(2, "0");
  const minutes = inputDate.getMinutes().toString().padStart(2, "0");
  const timeStr = `${hours}h${minutes === "00" ? "" : minutes}`;

  if (diffDays === 0) {
    return `Aujourd'hui à ${timeStr}`;
  } else if (diffDays === 1) {
    return `Demain à ${timeStr}`;
  } else {
    return `Le ${inputDate.getDay() + '/' + inputDate.getMonth()} à ${timeStr}`;
  }
}
