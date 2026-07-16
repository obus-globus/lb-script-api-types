import type { NativeLong } from '../../../../../com/sun/jna/NativeLong.d.ts'
import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { OaIdl$DECIMAL$_DECIMAL1 } from '../../../../../com/sun/jna/platform/win32/OaIdl$DECIMAL$_DECIMAL1.d.ts'
import type { OaIdl$DECIMAL$_DECIMAL2 } from '../../../../../com/sun/jna/platform/win32/OaIdl$DECIMAL$_DECIMAL2.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class OaIdl$DECIMAL extends Structure {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
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
    Hi32: NativeLong;
    decimal1: OaIdl$DECIMAL$_DECIMAL1;
    decimal2: OaIdl$DECIMAL$_DECIMAL2;
    wReserved: number;
}