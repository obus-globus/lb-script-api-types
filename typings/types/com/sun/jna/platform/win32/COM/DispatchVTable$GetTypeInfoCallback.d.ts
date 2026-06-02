import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { WinDef$LCID } from '../../../../../../com/sun/jna/platform/win32/WinDef$LCID.d.ts'
import type { WinDef$UINT } from '../../../../../../com/sun/jna/platform/win32/WinDef$UINT.d.ts'
import type { WinNT$HRESULT } from '../../../../../../com/sun/jna/platform/win32/WinNT$HRESULT.d.ts'
import type { PointerByReference } from '../../../../../../com/sun/jna/ptr/PointerByReference.d.ts'
import type { StdCallLibrary$StdCallCallback } from '../../../../../../com/sun/jna/win32/StdCallLibrary$StdCallCallback.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface DispatchVTable$GetTypeInfoCallback extends StdCallLibrary$StdCallCallback, Object{
    invoke(arg0: Pointer, arg1: WinDef$UINT, arg2: WinDef$LCID, arg3: PointerByReference): WinNT$HRESULT;
}