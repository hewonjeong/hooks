import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { useEffectOnce } from '..'
import ConsoleStory from './util/ConsoleStory'

const Demo = () => {
  useEffectOnce(() => {
    console.log('Running effect once on mount')

    return () => {
      console.log('Running clean-up of effect on unmount')
    }
  })

  return <ConsoleStory />
}

storiesOf('Lifecycle|useEffectOnce', module).add('Demo', () => <Demo />)
