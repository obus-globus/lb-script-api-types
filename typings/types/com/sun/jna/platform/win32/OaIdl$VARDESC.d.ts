import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { OaIdl$ELEMDESC } from '../../../../../com/sun/jna/platform/win32/OaIdl$ELEMDESC.d.ts'
import type { OaIdl$MEMBERID } from '../../../../../com/sun/jna/platform/win32/OaIdl$MEMBERID.d.ts'
import type { OaIdl$VARDESC$_VARDESC } from '../../../../../com/sun/jna/platform/win32/OaIdl$VARDESC$_VARDESC.d.ts'
import type { OaIdl$VARKIND } from '../../../../../com/sun/jna/platform/win32/OaIdl$VARKIND.d.ts'
import type { WTypes$LPOLESTR } from '../../../../../com/sun/jna/platform/win32/WTypes$LPOLESTR.d.ts'
import type { WinDef$WORD } from '../../../../../com/sun/jna/platform/win32/WinDef$WORD.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class OaIdl$VARDESC extends Structure {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static autoRead(paramarg0: (Object | null)[]): void;
    static autoWrite(paramarg0: (Object | null)[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(paramarg0: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance(paramarg0: Class<Structure>): Structure | null;
    static newInstance(paramarg0: Class<Structure>, paramarg1: Pointer): Structure | null;
    constructor()
    constructor(arg0: Pointer)
    _vardesc: OaIdl$VARDESC$_VARDESC;
    elemdescVar: OaIdl$ELEMDESC;
    lpstrSchema: WTypes$LPOLESTR;
    memid: OaIdl$MEMBERID;
    varkind: OaIdl$VARKIND;
    wVarFlags: WinDef$WORD;
}