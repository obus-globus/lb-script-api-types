import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefBrowser } from '../../../org/cef/browser/CefBrowser.d.ts'
import type { CefFileDialogCallback } from '../../../org/cef/callback/CefFileDialogCallback.d.ts'
import type { CefDialogHandler$FileDialogMode } from '../../../org/cef/handler/CefDialogHandler$FileDialogMode.d.ts'
export interface CefDialogHandler extends Object{
    onFileDialog(arg0: CefBrowser, arg1: CefDialogHandler$FileDialogMode, arg2: string, arg3: string, arg4: string[], arg5: string[], arg6: string[], arg7: CefFileDialogCallback): boolean;
}