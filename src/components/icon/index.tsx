type IconProps = {
  name?: string;
  className?: string;
  size?: number | string;
  color?: string;
};

export default function Icon(props: IconProps) {
  return (
    <i
      className={`bi-${props.name} ${props.className}`}
      style={{
        fontSize: props.size ? props.size + "px" : "inherit",
        color: props.color || "inherit",
      }}
    ></i>
  );
}
