# Upload Slack App Manifest Github Action

A github action to upload a local slack app manifest file.

## Inputs

### `token`

**REQUIRED** The bot token of your Slack app.

### `app_id`

**REQUIRED** The ID of the app whose configuration you want to update.

### `manifest_path`

The path of the manifest file to upload. Must be JSON. Default is `manifest.json`.

## Example usage

```yml
uses: isfopo/upload-slack-app-manifest-github-action@main
with:
  token: <your-bot-token>
  app_id: <your-app-id>
```
