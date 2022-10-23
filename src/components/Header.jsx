import React from 'react'
import { BsSunFill } from 'react-icons/bs';
import './Header.css'

export default function Header() {
  return (
    <>
    <BsSunFill />
    <span>All</span>
    <span>Active</span>
    <span>Completed</span>
    </>
  )
}
