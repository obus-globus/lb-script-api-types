import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../../com/sun/jna/Structure.d.ts'
import type { DispatchVTable$ByReference } from '../../../../../../com/sun/jna/platform/win32/COM/DispatchVTable$ByReference.d.ts'
import type { IDispatchCallback } from '../../../../../../com/sun/jna/platform/win32/COM/IDispatchCallback.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
export class DispatchListener extends Structure {
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
    constructor(arg0: IDispatchCallback)
    vtbl: DispatchVTable$ByReference;
    constructVTable(): DispatchVTable$ByReference;
    initVTable(arg0: IDispatchCallback): void;
}