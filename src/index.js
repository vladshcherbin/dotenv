import dotenv from 'dotenv-safe'

export default function loadEnv(directory) {
  dotenv.config({
    path: `${directory}/.env`,
    sample: `${directory}/.env.example`
  })
}
