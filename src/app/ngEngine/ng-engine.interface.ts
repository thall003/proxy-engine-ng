export interface NgEngineConfiguration {
  environment?: any,
  appConfig?: any
}

export const NgEngineConfiguration: NgEngineConfiguration = {
  environment: {
    development: true,
    staging: false,
    testing: false,
    production: false
  },
  appConfig: {}
}
