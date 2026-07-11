import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { Structure$ByReference } from '../../../../../com/sun/jna/Structure$ByReference.d.ts'
import type { OaIdl$TYPEKIND } from '../../../../../com/sun/jna/platform/win32/OaIdl$TYPEKIND.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class OaIdl$TYPEKIND$ByReference extends OaIdl$TYPEKIND implements Structure$ByReference {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static TKIND_ALIAS: number;
    static TKIND_COCLASS: number;
    static TKIND_DISPATCH: number;
    static TKIND_ENUM: number;
    static TKIND_INTERFACE: number;
    static TKIND_MAX: number;
    static TKIND_MODULE: number;
    static TKIND_RECORD: number;
    static TKIND_UNION: number;
    static autoRead(paramarg0: (Object | null)[]): void;
    static autoWrite(paramarg0: (Object | null)[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(...paramarg0: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], ...paramarg1: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance(paramarg0: Class<Structure>): Structure | null;
    static newInstance(paramarg0: Class<Structure>, paramarg1: Pointer): Structure | null;
    constructor()
    constructor(arg0: OaIdl$TYPEKIND)
    constructor(arg0: number)
}