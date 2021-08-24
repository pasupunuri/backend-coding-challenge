export default function loadScript(src: string, options = { async: false, defer: true }): Promise<void> {
  const { async = false, defer = true } = options
  return new Promise((resolve, reject) => {
    const s = document.createElement('script')
    s.async = !!async
    s.defer = !!defer
    s.src = src
    s.onload = () => resolve()
    s.onerror = () => reject()

    document.head.appendChild(s)
  })
}
