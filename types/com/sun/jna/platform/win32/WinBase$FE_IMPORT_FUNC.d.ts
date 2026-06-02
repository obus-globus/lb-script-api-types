import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { WinDef$DWORD } from '../../../../../com/sun/jna/platform/win32/WinDef$DWORD.d.ts'
import type { WinDef$ULONGByReference } from '../../../../../com/sun/jna/platform/win32/WinDef$ULONGByReference.d.ts'
import type { StdCallLibrary$StdCallCallback } from '../../../../../com/sun/jna/win32/StdCallLibrary$StdCallCallback.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface WinBase$FE_IMPORT_FUNC extends StdCallLibrary$StdCallCallback, Object{
    callback(arg0: Pointer, arg1: Pointer, arg2: WinDef$ULONGByReference): WinDef$DWORD;
}