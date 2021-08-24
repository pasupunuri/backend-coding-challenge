import axios from 'axios'

import { camelizeKeys, decamelizeKeys } from '~utils/humps'
import { getMetaEnvString } from '~utils/meta'

// Some defaults
axios.defaults.baseURL = getMetaEnvString('API_BASE_URL')
axios.defaults.headers.common['X-CSRF-Token'] = document.getElementsByName('csrf-token')[0].getAttribute('content')
axios.defaults.headers.common['Content-Type'] = 'application/json'

// Transform under_score <-> camelCase
axios.defaults.transformRequest = [
  (data) => decamelizeKeys(data),
  ...axios.defaults.transformRequest as [],
]

axios.defaults.transformResponse = [
  ...axios.defaults.transformResponse as [],
  (data) => camelizeKeys(data),
]

export default axios
