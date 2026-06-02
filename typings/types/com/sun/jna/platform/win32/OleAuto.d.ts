import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Guid$GUID } from '../../../../../com/sun/jna/platform/win32/Guid$GUID.d.ts'
import type { OaIdl$SAFEARRAY } from '../../../../../com/sun/jna/platform/win32/OaIdl$SAFEARRAY.d.ts'
import type { OaIdl$SAFEARRAY$ByReference } from '../../../../../com/sun/jna/platform/win32/OaIdl$SAFEARRAY$ByReference.d.ts'
import type { OaIdl$SAFEARRAYBOUND } from '../../../../../com/sun/jna/platform/win32/OaIdl$SAFEARRAYBOUND.d.ts'
import type { Variant$VARIANT } from '../../../../../com/sun/jna/platform/win32/Variant$VARIANT.d.ts'
import type { Variant$VARIANT$ByReference } from '../../../../../com/sun/jna/platform/win32/Variant$VARIANT$ByReference.d.ts'
import type { WTypes$BSTR } from '../../../../../com/sun/jna/platform/win32/WTypes$BSTR.d.ts'
import type { WTypes$VARTYPE } from '../../../../../com/sun/jna/platform/win32/WTypes$VARTYPE.d.ts'
import type { WTypes$VARTYPEByReference } from '../../../../../com/sun/jna/platform/win32/WTypes$VARTYPEByReference.d.ts'
import type { WinBase$SYSTEMTIME } from '../../../../../com/sun/jna/platform/win32/WinBase$SYSTEMTIME.d.ts'
import type { WinDef$LCID } from '../../../../../com/sun/jna/platform/win32/WinDef$LCID.d.ts'
import type { WinDef$LONG } from '../../../../../com/sun/jna/platform/win32/WinDef$LONG.d.ts'
import type { WinDef$LONGByReference } from '../../../../../com/sun/jna/platform/win32/WinDef$LONGByReference.d.ts'
import type { WinDef$PVOID } from '../../../../../com/sun/jna/platform/win32/WinDef$PVOID.d.ts'
import type { WinDef$UINT } from '../../../../../com/sun/jna/platform/win32/WinDef$UINT.d.ts'
import type { WinNT$HRESULT } from '../../../../../com/sun/jna/platform/win32/WinNT$HRESULT.d.ts'
import type { DoubleByReference } from '../../../../../com/sun/jna/ptr/DoubleByReference.d.ts'
import type { PointerByReference } from '../../../../../com/sun/jna/ptr/PointerByReference.d.ts'
import type { StdCallLibrary } from '../../../../../com/sun/jna/win32/StdCallLibrary.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface OleAuto extends StdCallLibrary, Object{
    GetActiveObject(arg0: Guid$GUID, arg1: WinDef$PVOID, arg2: PointerByReference): WinNT$HRESULT;
    LoadRegTypeLib(arg0: Guid$GUID, arg1: number, arg2: number, arg3: WinDef$LCID, arg4: PointerByReference): WinNT$HRESULT;
    LoadTypeLib(arg0: string, arg1: PointerByReference): WinNT$HRESULT;
    SafeArrayAccessData(arg0: OaIdl$SAFEARRAY, arg1: PointerByReference): WinNT$HRESULT;
    SafeArrayCreate(arg0: WTypes$VARTYPE, arg1: WinDef$UINT, arg2: OaIdl$SAFEARRAYBOUND[]): OaIdl$SAFEARRAY$ByReference;
    SafeArrayDestroy(arg0: OaIdl$SAFEARRAY): WinNT$HRESULT;
    SafeArrayGetDim(arg0: OaIdl$SAFEARRAY): WinDef$UINT;
    SafeArrayGetElement(arg0: OaIdl$SAFEARRAY, arg1: WinDef$LONG[], arg2: Pointer): WinNT$HRESULT;
    SafeArrayGetElemsize(arg0: OaIdl$SAFEARRAY): WinDef$UINT;
    SafeArrayGetLBound(arg0: OaIdl$SAFEARRAY, arg1: WinDef$UINT, arg2: WinDef$LONGByReference): WinNT$HRESULT;
    SafeArrayGetUBound(arg0: OaIdl$SAFEARRAY, arg1: WinDef$UINT, arg2: WinDef$LONGByReference): WinNT$HRESULT;
    SafeArrayGetVartype(arg0: OaIdl$SAFEARRAY, arg1: WTypes$VARTYPEByReference): WinNT$HRESULT;
    SafeArrayLock(arg0: OaIdl$SAFEARRAY): WinNT$HRESULT;
    SafeArrayPtrOfIndex(arg0: OaIdl$SAFEARRAY, arg1: WinDef$LONG[], arg2: PointerByReference): WinNT$HRESULT;
    SafeArrayPutElement(arg0: OaIdl$SAFEARRAY, arg1: WinDef$LONG[], arg2: Pointer): WinNT$HRESULT;
    SafeArrayRedim(arg0: OaIdl$SAFEARRAY, arg1: OaIdl$SAFEARRAYBOUND): WinNT$HRESULT;
    SafeArrayUnaccessData(arg0: OaIdl$SAFEARRAY): WinNT$HRESULT;
    SafeArrayUnlock(arg0: OaIdl$SAFEARRAY): WinNT$HRESULT;
    SysAllocString(arg0: string): WTypes$BSTR;
    SysFreeString(arg0: WTypes$BSTR): void;
    SysStringByteLen(arg0: WTypes$BSTR): number;
    SysStringLen(arg0: WTypes$BSTR): number;
    SystemTimeToVariantTime(arg0: WinBase$SYSTEMTIME, arg1: DoubleByReference): number;
    VariantChangeType(arg0: Variant$VARIANT, arg1: Variant$VARIANT, arg2: number, arg3: WTypes$VARTYPE): WinNT$HRESULT;
    VariantChangeType(arg0: Variant$VARIANT$ByReference, arg1: Variant$VARIANT$ByReference, arg2: number, arg3: WTypes$VARTYPE): WinNT$HRESULT;
    VariantClear(arg0: Variant$VARIANT): WinNT$HRESULT;
    VariantCopy(arg0: Pointer, arg1: Variant$VARIANT): WinNT$HRESULT;
    VariantInit(arg0: Variant$VARIANT): void;
    VariantInit(arg0: Variant$VARIANT$ByReference): void;
    VariantTimeToSystemTime(arg0: number, arg1: WinBase$SYSTEMTIME): number;
}