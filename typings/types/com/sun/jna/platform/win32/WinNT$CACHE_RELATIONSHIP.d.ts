import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { WinNT$GROUP_AFFINITY } from '../../../../../com/sun/jna/platform/win32/WinNT$GROUP_AFFINITY.d.ts'
import type { WinNT$SYSTEM_LOGICAL_PROCESSOR_INFORMATION_EX } from '../../../../../com/sun/jna/platform/win32/WinNT$SYSTEM_LOGICAL_PROCESSOR_INFORMATION_EX.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class WinNT$CACHE_RELATIONSHIP extends WinNT$SYSTEM_LOGICAL_PROCESSOR_INFORMATION_EX {
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
    static fromPointer(paramarg0: Pointer): WinNT$SYSTEM_LOGICAL_PROCESSOR_INFORMATION_EX;
    static newInstance(paramarg0: Class<Structure>): Structure | null;
    static newInstance(paramarg0: Class<Structure>, paramarg1: Pointer): Structure | null;
    constructor()
    constructor(arg0: Pointer)
    associativity: number;
    cacheSize: number;
    groupMask: WinNT$GROUP_AFFINITY;
    level: number;
    lineSize: number;
    reserved: number[];
    type: number;
}