const logs = `[INFO] 2023-07-05 10:00:00 - User john logged in
[ERROR] 2023-07-05 10:01:05 - Failed login for user mark
[INFO] 2023-07-05 10:02:15 - User mark logged out
`;
const splittedLogs = logs.split("\n");
const res = [];
for (let i = 0; i < splittedLogs.length - 1; i++) {
  const splitedLine = splittedLogs[i].split(" - ");
  const levelAndTimeArray = splitedLine[0].split(" ");
  const levelString = levelAndTimeArray[0];
  const levelLength = levelString.length;
  const level = levelString.slice(1, levelLength-1)

  const timeStamp = `${levelAndTimeArray[1]} ${levelAndTimeArray[1]}`;
  const message = splitedLine[1];
  res.push({
    level,
    timeStamp,
    message,
  });
}

console.log(res);
