import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {SiHackerrank} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/pravincoder/' ><BsLinkedin/></a>
        <a href='https://github.com/pravincoder'  ><AiFillGithub/></a>
        <a href='https://www.hackerrank.com/pravincoder' ><SiHackerrank/></a>
    </div>
  )
}
export default HeaderSocials