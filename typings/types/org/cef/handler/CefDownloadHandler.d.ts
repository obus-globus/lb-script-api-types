import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefBrowser } from '../../../org/cef/browser/CefBrowser.d.ts'
import type { CefBeforeDownloadCallback } from '../../../org/cef/callback/CefBeforeDownloadCallback.d.ts'
import type { CefDownloadItem } from '../../../org/cef/callback/CefDownloadItem.d.ts'
import type { CefDownloadItemCallback } from '../../../org/cef/callback/CefDownloadItemCallback.d.ts'
export interface CefDownloadHandler extends Object{
    onBeforeDownload(arg0: CefBrowser, arg1: CefDownloadItem, arg2: string, arg3: CefBeforeDownloadCallback): boolean;
    onDownloadUpdated(arg0: CefBrowser, arg1: CefDownloadItem, arg2: CefDownloadItemCallback): void;
}