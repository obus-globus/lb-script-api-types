import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../../com/sun/jna/Structure.d.ts'
import type { IUnknownCallback } from '../../../../../../com/sun/jna/platform/win32/COM/IUnknownCallback.d.ts'
import type { UnknownVTable$ByReference } from '../../../../../../com/sun/jna/platform/win32/COM/UnknownVTable$ByReference.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
export class UnknownListener extends Structure {
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
    constructor(arg0: IUnknownCallback)
    vtbl: UnknownVTable$ByReference;
    constructVTable(): UnknownVTable$ByReference;
    initVTable(arg0: IUnknownCallback): void;
}