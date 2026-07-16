import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { WinBase$SYSTEMTIME } from '../../../../../com/sun/jna/platform/win32/WinBase$SYSTEMTIME.d.ts'
import type { WinNT$LARGE_INTEGER } from '../../../../../com/sun/jna/platform/win32/WinNT$LARGE_INTEGER.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class WinPerf$PERF_DATA_BLOCK extends Structure {
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
    DefaultObject: number;
    HeaderLength: number;
    LittleEndian: number;
    NumObjectTypes: number;
    PerfFreq: WinNT$LARGE_INTEGER;
    PerfTime: WinNT$LARGE_INTEGER;
    PerfTime100nSec: WinNT$LARGE_INTEGER;
    Revision: number;
    Signature: string[];
    SystemNameLength: number;
    SystemNameOffset: number;
    SystemTime: WinBase$SYSTEMTIME;
    TotalByteLength: number;
    Version: number;
}