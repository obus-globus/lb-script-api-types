import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { Ntifs$REPARSE_DATA_BUFFER$REPARSE_UNION } from '../../../../../com/sun/jna/platform/win32/Ntifs$REPARSE_DATA_BUFFER$REPARSE_UNION.d.ts'
import type { Ntifs$SymbolicLinkReparseBuffer } from '../../../../../com/sun/jna/platform/win32/Ntifs$SymbolicLinkReparseBuffer.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class Ntifs$REPARSE_DATA_BUFFER extends Structure {
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
    static sizeOf(): number;
    constructor()
    constructor(arg0: Pointer)
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number, arg2: Ntifs$SymbolicLinkReparseBuffer)
    ReparseDataLength: number;
    ReparseTag: number;
    Reserved: number;
    u: Ntifs$REPARSE_DATA_BUFFER$REPARSE_UNION;
    getSize(): number;
    read(): void;
}