interface ReactElement {
  $$typeof: typeof REACT_ELEMENT_TYPE
}

const canUseSymbol = typeof Symbol === 'function' && Symbol.for
const REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7

function isNonNullObject<T>(value: T) {
  return !!value && typeof value === 'object'
}

function isSpecial<T extends RegExp | Date | ReactElement | unknown>(
  value: T,
): boolean {
  const stringValue = Object.prototype.toString.call(value)

  return stringValue === '[object RegExp]' ||
    stringValue === '[object Date]' ||
    isReactElement(value as ReactElement)
}

function isReactElement(value: ReactElement): value is ReactElement {
  return value.$$typeof === REACT_ELEMENT_TYPE
}

export function isMergeableObject<T>(value: T): boolean {
  return isNonNullObject(value) && !isSpecial(value)
}
