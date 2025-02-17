interface Page {
  path: string
  children?: Record<string, Page>
}

export interface ConfigRouter {
  auth: Page
}
