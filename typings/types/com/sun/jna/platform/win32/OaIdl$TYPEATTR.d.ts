import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { Guid$GUID } from '../../../../../com/sun/jna/platform/win32/Guid$GUID.d.ts'
import type { OaIdl$IDLDESC } from '../../../../../com/sun/jna/platform/win32/OaIdl$IDLDESC.d.ts'
import type { OaIdl$MEMBERID } from '../../../../../com/sun/jna/platform/win32/OaIdl$MEMBERID.d.ts'
import type { OaIdl$TYPEDESC } from '../../../../../com/sun/jna/platform/win32/OaIdl$TYPEDESC.d.ts'
import type { OaIdl$TYPEKIND } from '../../../../../com/sun/jna/platform/win32/OaIdl$TYPEKIND.d.ts'
import type { WTypes$LPOLESTR } from '../../../../../com/sun/jna/platform/win32/WTypes$LPOLESTR.d.ts'
import type { WinDef$DWORD } from '../../../../../com/sun/jna/platform/win32/WinDef$DWORD.d.ts'
import type { WinDef$LCID } from '../../../../../com/sun/jna/platform/win32/WinDef$LCID.d.ts'
import type { WinDef$ULONG } from '../../../../../com/sun/jna/platform/win32/WinDef$ULONG.d.ts'
import type { WinDef$WORD } from '../../../../../com/sun/jna/platform/win32/WinDef$WORD.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class OaIdl$TYPEATTR extends Structure {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static TYPEFLAGS_FAGGREGATABLE: number;
    static TYPEFLAGS_FAPPOBJECT: number;
    static TYPEFLAGS_FCANCREATE: number;
    static TYPEFLAGS_FCONTROL: number;
    static TYPEFLAGS_FDISPATCHABLE: number;
    static TYPEFLAGS_FDUAL: number;
    static TYPEFLAGS_FHIDDEN: number;
    static TYPEFLAGS_FLICENSED: number;
    static TYPEFLAGS_FNONEXTENSIBLE: number;
    static TYPEFLAGS_FOLEAUTOMATION: number;
    static TYPEFLAGS_FPREDECLID: number;
    static TYPEFLAGS_FPROXY: number;
    static TYPEFLAGS_FREPLACEABLE: number;
    static TYPEFLAGS_FRESTRICTED: number;
    static TYPEFLAGS_FREVERSEBIND: number;
    static autoRead(paramarg0: Structure[]): void;
    static autoWrite(paramarg0: Structure[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(...paramarg0: string[]): string[];
    static createFieldsOrder(paramarg0: string[], ...paramarg1: string[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance(paramarg0: Class<Structure>): Structure | null;
    static newInstance(paramarg0: Class<Structure>, paramarg1: Pointer): Structure | null;
    constructor()
    constructor(arg0: Pointer)
    cFuncs: WinDef$WORD;
    cImplTypes: WinDef$WORD;
    cVars: WinDef$WORD;
    cbAlignment: WinDef$WORD;
    cbSizeInstance: WinDef$ULONG;
    cbSizeVft: WinDef$WORD;
    dwReserved: WinDef$DWORD;
    guid: Guid$GUID;
    idldescType: OaIdl$IDLDESC;
    lcid: WinDef$LCID;
    lpstrSchema: WTypes$LPOLESTR;
    memidConstructor: OaIdl$MEMBERID;
    memidDestructor: OaIdl$MEMBERID;
    tdescAlias: OaIdl$TYPEDESC;
    typekind: OaIdl$TYPEKIND;
    wMajorVerNum: WinDef$WORD;
    wMinorVerNum: WinDef$WORD;
    wTypeFlags: WinDef$WORD;
}