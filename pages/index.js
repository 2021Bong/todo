import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import TodoList from "./components/TodoList/TodoList"

/**
 * 
 * @returns 
 * - Header
 * - Calendar
 * - TodoList
 * - Month Challenge
 */
export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Calendar /> */}
      <TodoList />
      {/* <MonthChallenge /> */}
    </div>
  )
}
