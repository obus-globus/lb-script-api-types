import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { WinDef$DWORDLONG } from '../../../../../com/sun/jna/platform/win32/WinDef$DWORDLONG.d.ts'
import type { WinNT$LARGE_INTEGER } from '../../../../../com/sun/jna/platform/win32/WinNT$LARGE_INTEGER.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Date } from '../../../../../java/util/Date.d.ts'
export class WinBase$FILETIME extends Structure {
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
    static dateToFileTime(paramarg0: Date): number;
    static filetimeToDate(paramarg0: number, paramarg1: number): Date;
    static newInstance(paramarg0: Class<Structure>): Structure | null;
    static newInstance(paramarg0: Class<Structure>, paramarg1: Pointer): Structure | null;
    constructor()
    constructor(arg0: Pointer)
    constructor(arg0: WinNT$LARGE_INTEGER)
    constructor(arg0: Date)
    dwHighDateTime: number;
    dwLowDateTime: number;
    toDWordLong(): WinDef$DWORDLONG;
    toDate(): Date;
    toString(): string;
    toString(arg0: boolean): string;
    toTime(): number;
}