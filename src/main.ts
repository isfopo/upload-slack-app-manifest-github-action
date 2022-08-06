import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    const token: string = core.getInput('token')
    const manifest_path: string = core.getInput('manifest_path')
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
