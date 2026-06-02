import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { WinDef$DWORD } from '../../../../../com/sun/jna/platform/win32/WinDef$DWORD.d.ts'
import type { WinDef$ULONG } from '../../../../../com/sun/jna/platform/win32/WinDef$ULONG.d.ts'
import type { StdCallLibrary$StdCallCallback } from '../../../../../com/sun/jna/win32/StdCallLibrary$StdCallCallback.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface WinBase$FE_EXPORT_FUNC extends StdCallLibrary$StdCallCallback, Object{
    callback(arg0: Pointer, arg1: Pointer, arg2: WinDef$ULONG): WinDef$DWORD;
}