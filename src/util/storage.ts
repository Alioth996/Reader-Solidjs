export function setLocal<T>(key: T, item: any) {
  localStorage.setItem(String(key), JSON.stringify(item))
}

export function getLocal(key: string): string {
  return localStorage.getItem(key)
}
