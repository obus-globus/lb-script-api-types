import type { WinDef$HWND } from '../../../../../com/sun/jna/platform/win32/WinDef$HWND.d.ts'
import type { WinDef$LPARAM } from '../../../../../com/sun/jna/platform/win32/WinDef$LPARAM.d.ts'
import type { WinDef$LRESULT } from '../../../../../com/sun/jna/platform/win32/WinDef$LRESULT.d.ts'
import type { WinDef$WPARAM } from '../../../../../com/sun/jna/platform/win32/WinDef$WPARAM.d.ts'
import type { StdCallLibrary$StdCallCallback } from '../../../../../com/sun/jna/win32/StdCallLibrary$StdCallCallback.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface WinUser$WindowProc extends StdCallLibrary$StdCallCallback, Object{
    callback(arg0: WinDef$HWND, arg1: number, arg2: WinDef$WPARAM, arg3: WinDef$LPARAM): WinDef$LRESULT;
}