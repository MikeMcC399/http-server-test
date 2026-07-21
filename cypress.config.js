import { defineConfig } from 'cypress'

export default defineConfig({
  allowCypressEnv: false,
  video: false,
  fixturesFolder: false,
  e2e: {
    supportFile: false,
  },
})
