import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { Guid$REFIID } from '../../../../../../com/sun/jna/platform/win32/Guid$REFIID.d.ts'
import type { OaIdl$DISPID } from '../../../../../../com/sun/jna/platform/win32/OaIdl$DISPID.d.ts'
import type { OaIdl$EXCEPINFO$ByReference } from '../../../../../../com/sun/jna/platform/win32/OaIdl$EXCEPINFO$ByReference.d.ts'
import type { OleAuto$DISPPARAMS$ByReference } from '../../../../../../com/sun/jna/platform/win32/OleAuto$DISPPARAMS$ByReference.d.ts'
import type { Variant$VARIANT$ByReference } from '../../../../../../com/sun/jna/platform/win32/Variant$VARIANT$ByReference.d.ts'
import type { WinDef$LCID } from '../../../../../../com/sun/jna/platform/win32/WinDef$LCID.d.ts'
import type { WinDef$WORD } from '../../../../../../com/sun/jna/platform/win32/WinDef$WORD.d.ts'
import type { WinNT$HRESULT } from '../../../../../../com/sun/jna/platform/win32/WinNT$HRESULT.d.ts'
import type { IntByReference } from '../../../../../../com/sun/jna/ptr/IntByReference.d.ts'
import type { StdCallLibrary$StdCallCallback } from '../../../../../../com/sun/jna/win32/StdCallLibrary$StdCallCallback.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface DispatchVTable$InvokeCallback extends StdCallLibrary$StdCallCallback, Object{
    invoke(arg0: Pointer, arg1: OaIdl$DISPID, arg2: Guid$REFIID, arg3: WinDef$LCID, arg4: WinDef$WORD, arg5: OleAuto$DISPPARAMS$ByReference, arg6: Variant$VARIANT$ByReference, arg7: OaIdl$EXCEPINFO$ByReference, arg8: IntByReference): WinNT$HRESULT;
}