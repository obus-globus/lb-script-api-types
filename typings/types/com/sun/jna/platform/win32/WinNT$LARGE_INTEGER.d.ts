import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { WinDef$DWORD } from '../../../../../com/sun/jna/platform/win32/WinDef$DWORD.d.ts'
import type { WinNT$LARGE_INTEGER$UNION } from '../../../../../com/sun/jna/platform/win32/WinNT$LARGE_INTEGER$UNION.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
export class WinNT$LARGE_INTEGER extends Structure implements Comparable<WinNT$LARGE_INTEGER> {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static autoRead(paramarg0: (Object | null)[]): void;
    static autoWrite(paramarg0: (Object | null)[]): void;
    static compare(paramarg0: WinNT$LARGE_INTEGER, paramarg1: WinNT$LARGE_INTEGER): number;
    static compare(paramarg0: WinNT$LARGE_INTEGER, paramarg1: number): number;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(paramarg0: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance(paramarg0: Class<Object>): Object | null;
    static newInstance(paramarg0: Class<Object>, paramarg1: Pointer): Object | null;
    constructor()
    constructor(arg0: number)
    u: WinNT$LARGE_INTEGER$UNION;
    compareTo(arg0: WinNT$LARGE_INTEGER): number;
    getHigh(): WinDef$DWORD;
    getLow(): WinDef$DWORD;
    getValue(): number;
    toString(): string;
    toString(arg0: boolean): string;
}