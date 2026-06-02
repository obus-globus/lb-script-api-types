import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefBrowser } from '../../../org/cef/browser/CefBrowser.d.ts'
import type { CefBeforeDownloadCallback } from '../../../org/cef/callback/CefBeforeDownloadCallback.d.ts'
import type { CefDownloadItem } from '../../../org/cef/callback/CefDownloadItem.d.ts'
import type { CefDownloadItemCallback } from '../../../org/cef/callback/CefDownloadItemCallback.d.ts'
import type { CefDownloadHandler } from '../../../org/cef/handler/CefDownloadHandler.d.ts'
export abstract class CefDownloadHandlerAdapter extends Object implements CefDownloadHandler {
    constructor()
    onBeforeDownload(arg0: CefBrowser, arg1: CefDownloadItem, arg2: string, arg3: CefBeforeDownloadCallback): boolean;
    onDownloadUpdated(arg0: CefBrowser, arg1: CefDownloadItem, arg2: CefDownloadItemCallback): void;
}