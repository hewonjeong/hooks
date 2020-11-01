import { useEffect } from 'react'
import useLatest from './useLatest'

const events = ['mousedown', 'touchstart'] as const

type HandledEvents = typeof events
type HandledEventsType = HandledEvents[number]
type PossibleEvent = {
  [Type in HandledEventsType]: HTMLElementEventMap[Type]
}[HandledEventsType]
type Handler = (event: PossibleEvent) => void

const getOptions = (event: HandledEventsType) => {
  if (event !== 'touchstart') {
    return
  }

  return { passive: true }
}

const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  handler: Handler | null
) => {
  const handlerRef = useLatest(handler)

  useEffect(() => {
    if (!handler) {
      return
    }

    const listener = (event: PossibleEvent) => {
      if (
        !ref.current ||
        !handlerRef.current ||
        ref.current.contains(event.target as Node)
      ) {
        return
      }

      handlerRef.current(event)
    }

    events.forEach((event) => {
      const options = getOptions(event) as EventListenerOptions
      document.addEventListener(event, listener, options)
    })

    return () => {
      events.forEach((event) => {
        const options = getOptions(event) as EventListenerOptions
        document.removeEventListener(event, listener, options)
      })
    }
  }, [!handler]) // eslint-disable-line react-hooks/exhaustive-deps
}

export default useClickOutside
