import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../../com/sun/jna/Structure.d.ts'
import type { UnknownVTable$AddRefCallback } from '../../../../../../com/sun/jna/platform/win32/COM/UnknownVTable$AddRefCallback.d.ts'
import type { UnknownVTable$QueryInterfaceCallback } from '../../../../../../com/sun/jna/platform/win32/COM/UnknownVTable$QueryInterfaceCallback.d.ts'
import type { UnknownVTable$ReleaseCallback } from '../../../../../../com/sun/jna/platform/win32/COM/UnknownVTable$ReleaseCallback.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
export class UnknownVTable extends Structure {
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
    AddRefCallback: UnknownVTable$AddRefCallback;
    QueryInterfaceCallback: UnknownVTable$QueryInterfaceCallback;
    ReleaseCallback: UnknownVTable$ReleaseCallback;
}