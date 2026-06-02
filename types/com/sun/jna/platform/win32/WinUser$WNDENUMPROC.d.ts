import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { WinDef$HWND } from '../../../../../com/sun/jna/platform/win32/WinDef$HWND.d.ts'
import type { StdCallLibrary$StdCallCallback } from '../../../../../com/sun/jna/win32/StdCallLibrary$StdCallCallback.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface WinUser$WNDENUMPROC extends StdCallLibrary$StdCallCallback, Object{
    callback(arg0: WinDef$HWND, arg1: Pointer): boolean;
}