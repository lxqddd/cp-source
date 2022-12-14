import * as fs from 'fs-extra'
import path from 'path'
import { mkDestination } from '../utils'


export function cpFile(source: string, destination: string) {
  const [newSource, newDestination] = mkDestination(source, destination)
  fs.copyFileSync(newSource, newDestination)
}

export function cpDir(source: string, destination: string) {
  const [newSource, newDestination] = mkDestination(source, destination)

  function createDir(dirPath: string) {
    fs.mkdirSync(dirPath)
  }

  if (!fs.existsSync(newDestination)) createDir(newDestination)
  const files = fs.readdirSync(newSource, {
    withFileTypes: true
  })
  for (let i = 0; i < files.length; i++) {
    if (files[i].isFile()) {
      cpFile(path.resolve(newSource, files[i].name), newDestination)
    } else {
      cpDir(path.resolve(newSource, files[i].name), newDestination)
    }
  }
}

export function cpSource(source: string | string[], destination: string) {
  if (typeof source === 'string') {
    const isDir = fs.statSync(source).isDirectory()
    if (isDir) {
      cpDir(source, destination)
    } else {
      cpFile(source, destination)
    }
  } else if (source instanceof Array) {
    for (let i = 0; i < source.length; i++) {
      const isDir = fs.statSync(source[i]).isDirectory()
      if (isDir) {
        cpDir(source[i], destination)
      } else {
        cpFile(source[i], destination)
      }
    }
  } else {
    throw new Error('The resource source path can only be a file path or a directory path.')
  }
}
