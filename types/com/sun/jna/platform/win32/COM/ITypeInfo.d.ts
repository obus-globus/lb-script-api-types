import type { IUnknown } from '../../../../../../com/sun/jna/platform/win32/COM/IUnknown.d.ts'
import type { Guid$REFIID } from '../../../../../../com/sun/jna/platform/win32/Guid$REFIID.d.ts'
import type { OaIdl$EXCEPINFO$ByReference } from '../../../../../../com/sun/jna/platform/win32/OaIdl$EXCEPINFO$ByReference.d.ts'
import type { OaIdl$FUNCDESC } from '../../../../../../com/sun/jna/platform/win32/OaIdl$FUNCDESC.d.ts'
import type { OaIdl$HREFTYPE } from '../../../../../../com/sun/jna/platform/win32/OaIdl$HREFTYPE.d.ts'
import type { OaIdl$HREFTYPEByReference } from '../../../../../../com/sun/jna/platform/win32/OaIdl$HREFTYPEByReference.d.ts'
import type { OaIdl$INVOKEKIND } from '../../../../../../com/sun/jna/platform/win32/OaIdl$INVOKEKIND.d.ts'
import type { OaIdl$MEMBERID } from '../../../../../../com/sun/jna/platform/win32/OaIdl$MEMBERID.d.ts'
import type { OaIdl$TYPEATTR } from '../../../../../../com/sun/jna/platform/win32/OaIdl$TYPEATTR.d.ts'
import type { OaIdl$VARDESC } from '../../../../../../com/sun/jna/platform/win32/OaIdl$VARDESC.d.ts'
import type { OleAuto$DISPPARAMS$ByReference } from '../../../../../../com/sun/jna/platform/win32/OleAuto$DISPPARAMS$ByReference.d.ts'
import type { Variant$VARIANT$ByReference } from '../../../../../../com/sun/jna/platform/win32/Variant$VARIANT$ByReference.d.ts'
import type { WTypes$BSTR } from '../../../../../../com/sun/jna/platform/win32/WTypes$BSTR.d.ts'
import type { WTypes$BSTRByReference } from '../../../../../../com/sun/jna/platform/win32/WTypes$BSTRByReference.d.ts'
import type { WTypes$LPOLESTR } from '../../../../../../com/sun/jna/platform/win32/WTypes$LPOLESTR.d.ts'
import type { WinDef$DWORDByReference } from '../../../../../../com/sun/jna/platform/win32/WinDef$DWORDByReference.d.ts'
import type { WinDef$PVOID } from '../../../../../../com/sun/jna/platform/win32/WinDef$PVOID.d.ts'
import type { WinDef$UINT } from '../../../../../../com/sun/jna/platform/win32/WinDef$UINT.d.ts'
import type { WinDef$UINTByReference } from '../../../../../../com/sun/jna/platform/win32/WinDef$UINTByReference.d.ts'
import type { WinDef$WORD } from '../../../../../../com/sun/jna/platform/win32/WinDef$WORD.d.ts'
import type { WinDef$WORDByReference } from '../../../../../../com/sun/jna/platform/win32/WinDef$WORDByReference.d.ts'
import type { WinNT$HRESULT } from '../../../../../../com/sun/jna/platform/win32/WinNT$HRESULT.d.ts'
import type { IntByReference } from '../../../../../../com/sun/jna/ptr/IntByReference.d.ts'
import type { PointerByReference } from '../../../../../../com/sun/jna/ptr/PointerByReference.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ITypeInfo extends IUnknown, Object{
    AddressOfMember(arg0: OaIdl$MEMBERID, arg1: OaIdl$INVOKEKIND, arg2: PointerByReference): WinNT$HRESULT;
    CreateInstance(arg0: IUnknown, arg1: Guid$REFIID, arg2: PointerByReference): WinNT$HRESULT;
    GetContainingTypeLib(arg0: PointerByReference, arg1: WinDef$UINTByReference): WinNT$HRESULT;
    GetDllEntry(arg0: OaIdl$MEMBERID, arg1: OaIdl$INVOKEKIND, arg2: WTypes$BSTRByReference, arg3: WTypes$BSTRByReference, arg4: WinDef$WORDByReference): WinNT$HRESULT;
    GetDocumentation(arg0: OaIdl$MEMBERID, arg1: WTypes$BSTRByReference, arg2: WTypes$BSTRByReference, arg3: WinDef$DWORDByReference, arg4: WTypes$BSTRByReference): WinNT$HRESULT;
    GetFuncDesc(arg0: WinDef$UINT, arg1: PointerByReference): WinNT$HRESULT;
    GetIDsOfNames(arg0: WTypes$LPOLESTR[], arg1: WinDef$UINT, arg2: OaIdl$MEMBERID[]): WinNT$HRESULT;
    GetImplTypeFlags(arg0: WinDef$UINT, arg1: IntByReference): WinNT$HRESULT;
    GetMops(arg0: OaIdl$MEMBERID, arg1: WTypes$BSTRByReference): WinNT$HRESULT;
    GetNames(arg0: OaIdl$MEMBERID, arg1: WTypes$BSTR[], arg2: WinDef$UINT, arg3: WinDef$UINTByReference): WinNT$HRESULT;
    GetRefTypeInfo(arg0: OaIdl$HREFTYPE, arg1: PointerByReference): WinNT$HRESULT;
    GetRefTypeOfImplType(arg0: WinDef$UINT, arg1: OaIdl$HREFTYPEByReference): WinNT$HRESULT;
    GetTypeAttr(arg0: PointerByReference): WinNT$HRESULT;
    GetTypeComp(arg0: PointerByReference): WinNT$HRESULT;
    GetVarDesc(arg0: WinDef$UINT, arg1: PointerByReference): WinNT$HRESULT;
    Invoke(arg0: WinDef$PVOID, arg1: OaIdl$MEMBERID, arg2: WinDef$WORD, arg3: OleAuto$DISPPARAMS$ByReference, arg4: Variant$VARIANT$ByReference, arg5: OaIdl$EXCEPINFO$ByReference, arg6: WinDef$UINTByReference): WinNT$HRESULT;
    ReleaseFuncDesc(arg0: OaIdl$FUNCDESC): void;
    ReleaseTypeAttr(arg0: OaIdl$TYPEATTR): void;
    ReleaseVarDesc(arg0: OaIdl$VARDESC): void;
}