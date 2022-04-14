import Image from "next/image";
import utilStyles from "../styles/utils.module.css";

export default function Custom404() {
  return <Image
  priority
  src="/images/404.png"
  className={utilStyles.borderCircle}
  alt='404'
  height={400}
  width={400}
/>
}