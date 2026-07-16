import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { WinNT$GROUP_AFFINITY } from '../../../../../com/sun/jna/platform/win32/WinNT$GROUP_AFFINITY.d.ts'
import type { WinNT$SYSTEM_LOGICAL_PROCESSOR_INFORMATION_EX } from '../../../../../com/sun/jna/platform/win32/WinNT$SYSTEM_LOGICAL_PROCESSOR_INFORMATION_EX.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class WinNT$PROCESSOR_RELATIONSHIP extends WinNT$SYSTEM_LOGICAL_PROCESSOR_INFORMATION_EX {
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
    static fromPointer(paramarg0: Pointer): WinNT$SYSTEM_LOGICAL_PROCESSOR_INFORMATION_EX;
    static newInstance<T extends Structure>(paramarg0: Class<T>): T;
    static newInstance<T extends Structure>(paramarg0: Class<T>, paramarg1: Pointer): T;
    constructor()
    constructor(arg0: Pointer)
    efficiencyClass: number;
    flags: number;
    groupCount: number;
    groupMask: WinNT$GROUP_AFFINITY[];
    reserved: number[];
    read(): void;
}