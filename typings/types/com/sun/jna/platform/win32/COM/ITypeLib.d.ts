import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { IUnknown } from '../../../../../../com/sun/jna/platform/win32/COM/IUnknown.d.ts'
import type { Guid$GUID } from '../../../../../../com/sun/jna/platform/win32/Guid$GUID.d.ts'
import type { Guid$REFIID } from '../../../../../../com/sun/jna/platform/win32/Guid$REFIID.d.ts'
import type { OaIdl$MEMBERID } from '../../../../../../com/sun/jna/platform/win32/OaIdl$MEMBERID.d.ts'
import type { OaIdl$TLIBATTR } from '../../../../../../com/sun/jna/platform/win32/OaIdl$TLIBATTR.d.ts'
import type { OaIdl$TYPEKIND$ByReference } from '../../../../../../com/sun/jna/platform/win32/OaIdl$TYPEKIND$ByReference.d.ts'
import type { WTypes$BSTRByReference } from '../../../../../../com/sun/jna/platform/win32/WTypes$BSTRByReference.d.ts'
import type { WTypes$LPOLESTR } from '../../../../../../com/sun/jna/platform/win32/WTypes$LPOLESTR.d.ts'
import type { WinDef$BOOLByReference } from '../../../../../../com/sun/jna/platform/win32/WinDef$BOOLByReference.d.ts'
import type { WinDef$DWORDByReference } from '../../../../../../com/sun/jna/platform/win32/WinDef$DWORDByReference.d.ts'
import type { WinDef$UINT } from '../../../../../../com/sun/jna/platform/win32/WinDef$UINT.d.ts'
import type { WinDef$ULONG } from '../../../../../../com/sun/jna/platform/win32/WinDef$ULONG.d.ts'
import type { WinDef$USHORTByReference } from '../../../../../../com/sun/jna/platform/win32/WinDef$USHORTByReference.d.ts'
import type { WinNT$HRESULT } from '../../../../../../com/sun/jna/platform/win32/WinNT$HRESULT.d.ts'
import type { PointerByReference } from '../../../../../../com/sun/jna/ptr/PointerByReference.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ITypeLib extends IUnknown, Object{
    AddRef(): number;
    FindName(arg0: WTypes$LPOLESTR, arg1: WinDef$ULONG, arg2: Pointer[], arg3: OaIdl$MEMBERID[], arg4: WinDef$USHORTByReference): WinNT$HRESULT;
    GetDocumentation(arg0: number, arg1: WTypes$BSTRByReference, arg2: WTypes$BSTRByReference, arg3: WinDef$DWORDByReference, arg4: WTypes$BSTRByReference): WinNT$HRESULT;
    GetLibAttr(arg0: PointerByReference): WinNT$HRESULT;
    GetTypeComp(arg0: PointerByReference): WinNT$HRESULT;
    GetTypeInfo(arg0: WinDef$UINT, arg1: PointerByReference): WinNT$HRESULT;
    GetTypeInfoCount(): WinDef$UINT;
    GetTypeInfoOfGuid(arg0: Guid$GUID, arg1: PointerByReference): WinNT$HRESULT;
    GetTypeInfoType(arg0: WinDef$UINT, arg1: OaIdl$TYPEKIND$ByReference): WinNT$HRESULT;
    IsName(arg0: WTypes$LPOLESTR, arg1: WinDef$ULONG, arg2: WinDef$BOOLByReference): WinNT$HRESULT;
    QueryInterface(arg0: Guid$REFIID, arg1: PointerByReference): WinNT$HRESULT;
    Release(): number;
    ReleaseTLibAttr(arg0: OaIdl$TLIBATTR): void;
}