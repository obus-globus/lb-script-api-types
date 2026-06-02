import type { WinDef$DWORD } from '../../../../../com/sun/jna/platform/win32/WinDef$DWORD.d.ts'
import type { WinDef$LPVOID } from '../../../../../com/sun/jna/platform/win32/WinDef$LPVOID.d.ts'
import type { StdCallLibrary$StdCallCallback } from '../../../../../com/sun/jna/win32/StdCallLibrary$StdCallCallback.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface WinBase$THREAD_START_ROUTINE extends StdCallLibrary$StdCallCallback, Object{
    apply(arg0: WinDef$LPVOID): WinDef$DWORD;
}