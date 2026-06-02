import type { WinDef$HDC } from '../../../../../com/sun/jna/platform/win32/WinDef$HDC.d.ts'
import type { WinDef$LPARAM } from '../../../../../com/sun/jna/platform/win32/WinDef$LPARAM.d.ts'
import type { WinDef$RECT } from '../../../../../com/sun/jna/platform/win32/WinDef$RECT.d.ts'
import type { WinUser$HMONITOR } from '../../../../../com/sun/jna/platform/win32/WinUser$HMONITOR.d.ts'
import type { StdCallLibrary$StdCallCallback } from '../../../../../com/sun/jna/win32/StdCallLibrary$StdCallCallback.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface WinUser$MONITORENUMPROC extends StdCallLibrary$StdCallCallback, Object{
    apply(arg0: WinUser$HMONITOR, arg1: WinDef$HDC, arg2: WinDef$RECT, arg3: WinDef$LPARAM): number;
}