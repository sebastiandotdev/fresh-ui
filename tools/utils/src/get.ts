// deno-lint-ignore-file
/**
 * ! This functions inspired by lodash get function
 * @see https://lodash.com/docs/4.17.15#get
 */

/**
 * @param obj source object
 * @param path path to get value
 * @returns value from object
 */
export function get<T, K extends keyof any>(obj: T, path: K) {
  if (!obj || typeof obj !== 'object') {
    return undefined
  }

  const keys = String(path).split('.')
  let result: any = obj

  for (const key of keys) {
    if (result[key] === undefined) {
      return undefined
    }
    result = result[key]
  }

  return result
}
