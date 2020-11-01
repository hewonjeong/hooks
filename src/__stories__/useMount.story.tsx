import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { useMount } from '..'
import ConsoleStory from './util/ConsoleStory'

const Demo = () => {
  useMount(() => console.log('MOUNTED'))

  return <ConsoleStory />
}

storiesOf('Lifecycle|useMount', module).add('Demo', () => <Demo />)
