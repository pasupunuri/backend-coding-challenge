export enum Environment {
  DEVELOPMENT = 'development',
  STAGING = 'staging',
  PRODUCTION = 'production',
}

export const getCurrentEnvironment = (): Environment => {
  if (window.location.hostname === 'dbl-scaffold.com') {
    return Environment.PRODUCTION
  }

  if (window.location.hostname === 'dbl-scaffold.cloud') {
    return Environment.STAGING
  }

  return Environment.DEVELOPMENT
}
