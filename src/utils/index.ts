import path from 'path'

export function resolvePath(source: string) {
  if (!path.isAbsolute(source)) {
    return path.resolve(__dirname, source)
  }
  return source
}

export function mkDestination(source: string, destination: string) {
  source = resolvePath(source)
  destination = path.resolve(resolvePath(destination), path.basename(source))
  return [source, destination]
}