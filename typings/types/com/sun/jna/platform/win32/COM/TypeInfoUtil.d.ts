import type { ITypeInfo } from '../../../../../../com/sun/jna/platform/win32/COM/ITypeInfo.d.ts'
import type { IUnknown } from '../../../../../../com/sun/jna/platform/win32/COM/IUnknown.d.ts'
import type { TypeComp } from '../../../../../../com/sun/jna/platform/win32/COM/TypeComp.d.ts'
import type { TypeInfoUtil$ContainingTypeLib } from '../../../../../../com/sun/jna/platform/win32/COM/TypeInfoUtil$ContainingTypeLib.d.ts'
import type { TypeInfoUtil$DllEntry } from '../../../../../../com/sun/jna/platform/win32/COM/TypeInfoUtil$DllEntry.d.ts'
import type { TypeInfoUtil$Invoke } from '../../../../../../com/sun/jna/platform/win32/COM/TypeInfoUtil$Invoke.d.ts'
import type { TypeInfoUtil$TypeInfoDoc } from '../../../../../../com/sun/jna/platform/win32/COM/TypeInfoUtil$TypeInfoDoc.d.ts'
import type { Guid$REFIID } from '../../../../../../com/sun/jna/platform/win32/Guid$REFIID.d.ts'
import type { OaIdl$FUNCDESC } from '../../../../../../com/sun/jna/platform/win32/OaIdl$FUNCDESC.d.ts'
import type { OaIdl$HREFTYPE } from '../../../../../../com/sun/jna/platform/win32/OaIdl$HREFTYPE.d.ts'
import type { OaIdl$INVOKEKIND } from '../../../../../../com/sun/jna/platform/win32/OaIdl$INVOKEKIND.d.ts'
import type { OaIdl$MEMBERID } from '../../../../../../com/sun/jna/platform/win32/OaIdl$MEMBERID.d.ts'
import type { OaIdl$TYPEATTR } from '../../../../../../com/sun/jna/platform/win32/OaIdl$TYPEATTR.d.ts'
import type { OaIdl$VARDESC } from '../../../../../../com/sun/jna/platform/win32/OaIdl$VARDESC.d.ts'
import type { OleAuto } from '../../../../../../com/sun/jna/platform/win32/OleAuto.d.ts'
import type { OleAuto$DISPPARAMS$ByReference } from '../../../../../../com/sun/jna/platform/win32/OleAuto$DISPPARAMS$ByReference.d.ts'
import type { WTypes$LPOLESTR } from '../../../../../../com/sun/jna/platform/win32/WTypes$LPOLESTR.d.ts'
import type { WinDef$PVOID } from '../../../../../../com/sun/jna/platform/win32/WinDef$PVOID.d.ts'
import type { WinDef$WORD } from '../../../../../../com/sun/jna/platform/win32/WinDef$WORD.d.ts'
import type { PointerByReference } from '../../../../../../com/sun/jna/ptr/PointerByReference.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TypeInfoUtil extends Object {
    static OLEAUTO: OleAuto;
    constructor(arg0: ITypeInfo)
    // private typeInfo: ITypeInfo;
    AddressOfMember(arg0: OaIdl$MEMBERID, arg1: OaIdl$INVOKEKIND): PointerByReference;
    CreateInstance(arg0: IUnknown, arg1: Guid$REFIID): PointerByReference;
    GetContainingTypeLib(): TypeInfoUtil$ContainingTypeLib;
    GetDllEntry(arg0: OaIdl$MEMBERID, arg1: OaIdl$INVOKEKIND): TypeInfoUtil$DllEntry;
    GetMops(arg0: OaIdl$MEMBERID): string;
    Invoke(arg0: WinDef$PVOID, arg1: OaIdl$MEMBERID, arg2: WinDef$WORD, arg3: OleAuto$DISPPARAMS$ByReference): TypeInfoUtil$Invoke;
    ReleaseFuncDesc(arg0: OaIdl$FUNCDESC): void;
    ReleaseTypeAttr(arg0: OaIdl$TYPEATTR): void;
    ReleaseVarDesc(arg0: OaIdl$VARDESC): void;
    getDocumentation(arg0: OaIdl$MEMBERID): TypeInfoUtil$TypeInfoDoc;
    getFuncDesc(arg0: number): OaIdl$FUNCDESC;
    getIDsOfNames(arg0: WTypes$LPOLESTR[], arg1: number): OaIdl$MEMBERID[];
    getImplTypeFlags(arg0: number): number;
    getNames(arg0: OaIdl$MEMBERID, arg1: number): string[];
    getRefTypeInfo(arg0: OaIdl$HREFTYPE): ITypeInfo;
    getRefTypeOfImplType(arg0: number): OaIdl$HREFTYPE;
    getTypeAttr(): OaIdl$TYPEATTR;
    getTypeComp(): TypeComp;
    getVarDesc(arg0: number): OaIdl$VARDESC;
}