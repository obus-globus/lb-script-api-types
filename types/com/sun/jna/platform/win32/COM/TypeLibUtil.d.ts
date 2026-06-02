import type { ITypeInfo } from '../../../../../../com/sun/jna/platform/win32/COM/ITypeInfo.d.ts'
import type { ITypeLib } from '../../../../../../com/sun/jna/platform/win32/COM/ITypeLib.d.ts'
import type { TypeComp } from '../../../../../../com/sun/jna/platform/win32/COM/TypeComp.d.ts'
import type { TypeInfoUtil } from '../../../../../../com/sun/jna/platform/win32/COM/TypeInfoUtil.d.ts'
import type { TypeLibUtil$FindName } from '../../../../../../com/sun/jna/platform/win32/COM/TypeLibUtil$FindName.d.ts'
import type { TypeLibUtil$IsName } from '../../../../../../com/sun/jna/platform/win32/COM/TypeLibUtil$IsName.d.ts'
import type { TypeLibUtil$TypeLibDoc } from '../../../../../../com/sun/jna/platform/win32/COM/TypeLibUtil$TypeLibDoc.d.ts'
import type { OaIdl$TLIBATTR } from '../../../../../../com/sun/jna/platform/win32/OaIdl$TLIBATTR.d.ts'
import type { OaIdl$TYPEKIND } from '../../../../../../com/sun/jna/platform/win32/OaIdl$TYPEKIND.d.ts'
import type { OleAuto } from '../../../../../../com/sun/jna/platform/win32/OleAuto.d.ts'
import type { WinDef$LCID } from '../../../../../../com/sun/jna/platform/win32/WinDef$LCID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TypeLibUtil extends Object {
    static OLEAUTO: OleAuto;
    constructor(arg0: string)
    constructor(arg0: string, arg1: number, arg2: number)
    readonly docString: string;
    readonly helpContext: number;
    readonly helpFile: string;
    readonly lcid: WinDef$LCID;
    readonly name: string;
    readonly typelib: ITypeLib;
    FindName(arg0: string, arg1: number, arg2: number): TypeLibUtil$FindName;
    GetTypeComp(): TypeComp;
    IsName(arg0: string, arg1: number): TypeLibUtil$IsName;
    ReleaseTLibAttr(arg0: OaIdl$TLIBATTR): void;
    getDocString(): string;
    getDocumentation(arg0: number): TypeLibUtil$TypeLibDoc;
    getHelpContext(): number;
    getHelpFile(): string;
    getLcid(): WinDef$LCID;
    getLibAttr(): OaIdl$TLIBATTR;
    getName(): string;
    getTypeInfo(arg0: number): ITypeInfo;
    getTypeInfoCount(): number;
    getTypeInfoType(arg0: number): OaIdl$TYPEKIND;
    getTypeInfoUtil(arg0: number): TypeInfoUtil;
    getTypelib(): ITypeLib;
    // private initTypeLibInfo(): void;
}