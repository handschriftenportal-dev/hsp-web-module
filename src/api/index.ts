export type WebModuleLanguage = 'de' | 'en'

export interface WebModuleLocation {
  pathname: string
  search: string
  hash: string
}

export interface WebModuleConfig {
  createAbsoluteURL?: (location: WebModuleLocation) => URL
  classNamePrefix?: string
  enableRouting?: boolean
  customFetch?: typeof fetch
}

export interface WebModuleEvents<State> {
  stateChanged: CustomEvent<State>
  linkClicked: CustomEvent<URL>
}

export interface WebModule<
  Config extends WebModuleConfig,
  State extends any,
  Events extends WebModuleEvents<State>,
  // Enumeration of available module units, e.g. `'menu' | 'content' | 'toolBar'`
  Unit extends string,
> {
  eventTarget: EventTarget
  // a typesafe wrapper of eventTarget.addEventListener
  addEventListener: <T extends keyof Events>(
    type: T,
    listener: (event: Events[T]) => void,
  ) => () => void
  getConfig: () => Required<Config>
  // E.g. mount({ menu: document.getElementById('menuContainer') })
  mount: (containers: Partial<Record<Unit, HTMLElement>>) => Promise<void>
  unmount: () => boolean
  isMounted: () => boolean
  getState: () => State
  setState: (state: State) => void
  getLocation: () => WebModuleLocation
  setLocation: (location: WebModuleLocation) => void
  getLanguage: () => WebModuleLanguage
  setLanguage: (lang: WebModuleLanguage) => void
  setFeatures?: (flags: Record<string, boolean>) => void
}

export type AnyWebModule = WebModule<
  WebModuleConfig,
  any,
  WebModuleEvents<any>,
  string
>
