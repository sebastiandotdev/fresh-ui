type MergeableObject = Record<string | symbol, unknown>
type MergeOptions = {
  clone?: boolean
  arrayMerge?: (
    target: unknown[],
    source: unknown[],
    options: MergeOptions,
  ) => unknown[]
  isMergeableObject?: (value: unknown) => value is MergeableObject
  customMerge?: (
    key: string,
  ) => ((x: unknown, y: unknown, options: MergeOptions) => unknown) | undefined
}

export function emptyTarget(val: unknown): unknown[] | MergeableObject {
  return Array.isArray(val) ? [] : {}
}
