import set from 'lodash/set'
import map from 'lodash/map'
import transform from 'lodash/transform'
import isObjectLike from 'lodash/isObjectLike'
import isPlainObject from 'lodash/isPlainObject'
import isArray from 'lodash/isArray'
import camelCase from 'lodash/camelCase'
import snakeCase from 'lodash/snakeCase'

type Converter = (key: string) => string

function createIteratee(converter: Converter, self: any) {
  return (result: any, value: any, key: any) => set(result, converter(key), isObjectLike(value) ? self(value) : value)
}

function createHumps(keyConverter: Converter) {
  return function humps(node: any) {
    if (isArray(node)) {
      return map(node, humps as any)
    }
    if (isPlainObject(node)) {
      return transform(node, createIteratee(keyConverter, humps))
    }
    return node
  }
}

export const camelizeKeys = createHumps(camelCase)
export const decamelizeKeys = createHumps(snakeCase)
