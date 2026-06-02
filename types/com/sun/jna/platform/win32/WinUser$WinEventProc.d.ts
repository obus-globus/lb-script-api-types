import type { Callback } from '../../../../../com/sun/jna/Callback.d.ts'
import type { WinDef$DWORD } from '../../../../../com/sun/jna/platform/win32/WinDef$DWORD.d.ts'
import type { WinDef$HWND } from '../../../../../com/sun/jna/platform/win32/WinDef$HWND.d.ts'
import type { WinDef$LONG } from '../../../../../com/sun/jna/platform/win32/WinDef$LONG.d.ts'
import type { WinNT$HANDLE } from '../../../../../com/sun/jna/platform/win32/WinNT$HANDLE.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface WinUser$WinEventProc extends Callback, Object{
    callback(arg0: WinNT$HANDLE, arg1: WinDef$DWORD, arg2: WinDef$HWND, arg3: WinDef$LONG, arg4: WinDef$LONG, arg5: WinDef$DWORD, arg6: WinDef$DWORD): void;
}