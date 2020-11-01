import * as React from 'react'
import { useEffectOnce } from '..'
import ConsoleStory from './utils/ConsoleStory'

export const Default = () => {
  useEffectOnce(() => {
    console.log('Running effect once on mount')

    return () => {
      console.log('Running clean-up of effect on unmount')
    }
  })

  return <ConsoleStory />
}

export default {
  title: 'Lifecycle/useEffectOnce',
  component: Default,
}
