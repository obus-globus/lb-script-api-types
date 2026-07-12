import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { WinNT$ACE_HEADER } from '../../../../../com/sun/jna/platform/win32/WinNT$ACE_HEADER.d.ts'
import type { WinNT$PSID } from '../../../../../com/sun/jna/platform/win32/WinNT$PSID.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class WinNT$ACCESS_ACEStructure extends WinNT$ACE_HEADER {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static autoRead(paramarg0: (Object | null)[]): void;
    static autoWrite(paramarg0: (Object | null)[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(...paramarg0: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], ...paramarg1: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance(paramarg0: Class<Structure>): Structure | null;
    static newInstance(paramarg0: Class<Structure>, paramarg1: Pointer): Structure | null;
    constructor()
    constructor(arg0: Pointer)
    constructor(arg0: number, arg1: number, arg2: number, arg3: WinNT$PSID)
    Mask: number;
    SidStart: number[];
    // private psid: WinNT$PSID;
    getSID(): WinNT$PSID;
    getSidString(): string;
    read(): void;
    write(): void;
}