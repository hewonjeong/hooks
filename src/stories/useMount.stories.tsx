import * as React from 'react'
import { useMount } from '..'
import ConsoleStory from './utils/ConsoleStory'

export const Default = () => {
  useMount(() => console.log('MOUNTED'))

  return <ConsoleStory />
}

// storiesOf('Lifecycle|useMount', module).add('Demo', () => <Demo />)

export default {
  title: 'Lifecycle/useMount',
  component: Default,
}
