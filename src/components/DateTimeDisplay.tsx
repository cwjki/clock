const DateTimeDisplay = ({
  value,
  type,
  isDanger,
}: {
  value: number;
  type: number;
  isDanger: boolean;
}) => {
  return (
    <div className={isDanger ? "countdown danger" : "countdown"}>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay