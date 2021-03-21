import path from 'path'
import url from 'url'
import dotenv from 'dotenv-safe'

const dirname = path.dirname(url.fileURLToPath(import.meta.url))

export default function loadEnv(directory = dirname) {
  dotenv.config({
    path: `${directory}/.env`,
    sample: `${directory}/.env.example`
  })
}
