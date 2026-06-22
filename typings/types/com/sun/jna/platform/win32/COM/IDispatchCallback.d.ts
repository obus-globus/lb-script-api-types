import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { IDispatch } from '../../../../../../com/sun/jna/platform/win32/COM/IDispatch.d.ts'
import type { IUnknownCallback } from '../../../../../../com/sun/jna/platform/win32/COM/IUnknownCallback.d.ts'
import type { Guid$REFIID } from '../../../../../../com/sun/jna/platform/win32/Guid$REFIID.d.ts'
import type { OaIdl$DISPID } from '../../../../../../com/sun/jna/platform/win32/OaIdl$DISPID.d.ts'
import type { OaIdl$EXCEPINFO$ByReference } from '../../../../../../com/sun/jna/platform/win32/OaIdl$EXCEPINFO$ByReference.d.ts'
import type { OleAuto$DISPPARAMS$ByReference } from '../../../../../../com/sun/jna/platform/win32/OleAuto$DISPPARAMS$ByReference.d.ts'
import type { Variant$VARIANT$ByReference } from '../../../../../../com/sun/jna/platform/win32/Variant$VARIANT$ByReference.d.ts'
import type { WinDef$LCID } from '../../../../../../com/sun/jna/platform/win32/WinDef$LCID.d.ts'
import type { WinDef$UINT } from '../../../../../../com/sun/jna/platform/win32/WinDef$UINT.d.ts'
import type { WinDef$UINTByReference } from '../../../../../../com/sun/jna/platform/win32/WinDef$UINTByReference.d.ts'
import type { WinDef$WORD } from '../../../../../../com/sun/jna/platform/win32/WinDef$WORD.d.ts'
import type { WinNT$HRESULT } from '../../../../../../com/sun/jna/platform/win32/WinNT$HRESULT.d.ts'
import type { IntByReference } from '../../../../../../com/sun/jna/ptr/IntByReference.d.ts'
import type { PointerByReference } from '../../../../../../com/sun/jna/ptr/PointerByReference.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface IDispatchCallback extends IDispatch, IUnknownCallback, Object{
    AddRef(): number;
    GetTypeInfo(arg0: WinDef$UINT, arg1: WinDef$LCID, arg2: PointerByReference): WinNT$HRESULT;
    GetTypeInfoCount(arg0: WinDef$UINTByReference): WinNT$HRESULT;
    Invoke(arg0: OaIdl$DISPID, arg1: Guid$REFIID, arg2: WinDef$LCID, arg3: WinDef$WORD, arg4: OleAuto$DISPPARAMS$ByReference, arg5: Variant$VARIANT$ByReference, arg6: OaIdl$EXCEPINFO$ByReference, arg7: IntByReference): WinNT$HRESULT;
    QueryInterface(arg0: Guid$REFIID, arg1: PointerByReference): WinNT$HRESULT;
    Release(): number;
    getPointer(): Pointer;
}