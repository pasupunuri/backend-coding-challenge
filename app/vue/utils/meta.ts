export const getMetaEnvString = (key: string): string | undefined => {
  const metaElement = document.querySelector(`meta[name="ENV_${key}"]`)
  if (metaElement === null) {
    return undefined
  }
  return metaElement.getAttribute('content') || undefined
}

export const getMetaEnvJson = (key: string): string | undefined => {
  const metaElement = document.querySelector(`meta[name="ENV_${key}"]`)
  if (metaElement === null) {
    return undefined
  }
  const contentRaw = metaElement.getAttribute('content')
  if (!contentRaw) {
    return undefined
  }

  const contentDecoded = decodeURI(contentRaw)
  return JSON.parse(contentDecoded)
}
