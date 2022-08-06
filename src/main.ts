import * as core from '@actions/core'
import {existsSync, readFileSync} from 'fs'
import axios from 'axios'

async function run(): Promise<void> {
  try {
    const token: string = core.getInput('token')
    const app_id: string = core.getInput('app_id')
    const manifest_path = core.getInput('manifest_path')

    const exists = existsSync(manifest_path)

    if (!exists) {
      throw new Error('Manifest file not found')
    }

    const manifest = readFileSync(manifest_path).toString()

    const res = await axios.post('https://slack.com/api/apps.manifest.update', {
      token,
      app_id,
      manifest
    })

    if (res.status === 200) {
      core.debug('App manifest successfully uploaded')
    } else {
      core.setFailed(res.data)
    }
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
