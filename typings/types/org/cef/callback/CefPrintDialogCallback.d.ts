import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefPrintSettings } from '../../../org/cef/misc/CefPrintSettings.d.ts'
export interface CefPrintDialogCallback extends Object{
    Continue(arg0: CefPrintSettings): void;
    cancel(): void;
}