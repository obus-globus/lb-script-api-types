import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefBrowserSettings } from '../../../org/cef/CefBrowserSettings.d.ts'
import type { CefClient } from '../../../org/cef/CefClient.d.ts'
import type { CefBrowser } from '../../../org/cef/browser/CefBrowser.d.ts'
import type { CefRequestContext } from '../../../org/cef/browser/CefRequestContext.d.ts'
export class CefBrowserFactory extends Object {
    static create(paramarg0: CefClient, paramarg1: string, paramarg2: boolean, paramarg3: CefRequestContext, paramarg4: CefBrowserSettings): CefBrowser;
    constructor()
}