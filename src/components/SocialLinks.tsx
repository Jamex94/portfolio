import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'

interface SocialLinkProps {
  className?: string
}

export function ResumeLink ({ className = '' }: SocialLinkProps): JSX.Element {
  return (
    <motion.a
      href='https://drive.google.com/file/d/1Wg5T4en-tzO4zMoIzR0yRN1Fp4-KEvnY/view?usp=drive_link'
      target='_blank'
      rel='noopener noreferrer'
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={'View James\'s resume'}
      className={className}
    >
      Resume
    </motion.a>
  )
}

export function GithubLink ({ className = '' }: SocialLinkProps): JSX.Element {
  return (
    <motion.a
      href='https://github.com/jamex94'
      target='_blank'
      rel='noopener noreferrer'
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title={'Go to James\'s GitHub'}
      className={className}
    >
      <FaGithub />
    </motion.a>
  )
}

export function LinkedinLink ({ className = '' }: SocialLinkProps): JSX.Element {
  return (
    <motion.a
      href='https://linkedin.com/in/jamextrudeau'
      target='_blank'
      rel='noopener noreferrer'
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title='Connect with James on LinkedIn'
      className={className}
    >
      <FaLinkedin />
    </motion.a>
  )
}

export function MailLink ({ className = '' }: SocialLinkProps): JSX.Element {
  return (
    <motion.a
      href='mailto:alex.trudeau@engineer.com'
      target='_blank'
      rel='noopener noreferrer'
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      title='Send James an email'
      className={className}
    >
      <IoIosMail style={{ transform: 'scale(1.2)' }} />
    </motion.a>
  )
}
