/*
 * MIT License
 *
 * Copyright (c) 2023 Staatsbibliothek zu Berlin - Preußischer Kulturbesitz
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

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
  Unit extends string
> {
  eventTarget: EventTarget
  // a typesafe wrapper of eventTarget.addEventListener
  addEventListener: <T extends keyof Events>(
    type: T,
    listener: (event: Events[T]) => void
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
