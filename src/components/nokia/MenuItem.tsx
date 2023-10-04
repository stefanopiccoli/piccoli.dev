import Image from "next/image";

export default function MenuItem({
  title,
  src,
  action,
}: {
  title: string;
  src: string;
  action: Function;
}) {
  return (
    <>
      <h3>{title}</h3>
      <Image src={src} alt="icon" width={100} height={100} />
    </>
  );
}
