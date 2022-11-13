import React from "react";
import styles from "./index.module.scss";

interface IProps {
  a: number;
  b: string;
}
export default function Welcome(props: IProps) {
  return <div className={styles.welcome}>Welcome</div>;
}
