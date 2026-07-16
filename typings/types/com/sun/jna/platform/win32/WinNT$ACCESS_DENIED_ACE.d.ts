import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { WinNT$ACCESS_ACEStructure } from '../../../../../com/sun/jna/platform/win32/WinNT$ACCESS_ACEStructure.d.ts'
import type { WinNT$PSID } from '../../../../../com/sun/jna/platform/win32/WinNT$PSID.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class WinNT$ACCESS_DENIED_ACE extends WinNT$ACCESS_ACEStructure {
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
    static newInstance<T extends Structure>(paramarg0: Class<T>): T;
    static newInstance<T extends Structure>(paramarg0: Class<T>, paramarg1: Pointer): T;
    constructor()
    constructor(arg0: Pointer)
    constructor(arg0: number, arg1: number, arg2: WinNT$PSID)
}