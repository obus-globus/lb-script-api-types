import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { WinDef$UINTByReference } from '../../../../../../com/sun/jna/platform/win32/WinDef$UINTByReference.d.ts'
import type { WinNT$HRESULT } from '../../../../../../com/sun/jna/platform/win32/WinNT$HRESULT.d.ts'
import type { StdCallLibrary$StdCallCallback } from '../../../../../../com/sun/jna/win32/StdCallLibrary$StdCallCallback.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface DispatchVTable$GetTypeInfoCountCallback extends StdCallLibrary$StdCallCallback, Object{
    invoke(arg0: Pointer, arg1: WinDef$UINTByReference): WinNT$HRESULT;
}