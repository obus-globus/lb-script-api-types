import type { Pointer } from '../../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../../com/sun/jna/Structure.d.ts'
import type { DispatchVTable$AddRefCallback } from '../../../../../../com/sun/jna/platform/win32/COM/DispatchVTable$AddRefCallback.d.ts'
import type { DispatchVTable$GetIDsOfNamesCallback } from '../../../../../../com/sun/jna/platform/win32/COM/DispatchVTable$GetIDsOfNamesCallback.d.ts'
import type { DispatchVTable$GetTypeInfoCallback } from '../../../../../../com/sun/jna/platform/win32/COM/DispatchVTable$GetTypeInfoCallback.d.ts'
import type { DispatchVTable$GetTypeInfoCountCallback } from '../../../../../../com/sun/jna/platform/win32/COM/DispatchVTable$GetTypeInfoCountCallback.d.ts'
import type { DispatchVTable$InvokeCallback } from '../../../../../../com/sun/jna/platform/win32/COM/DispatchVTable$InvokeCallback.d.ts'
import type { DispatchVTable$QueryInterfaceCallback } from '../../../../../../com/sun/jna/platform/win32/COM/DispatchVTable$QueryInterfaceCallback.d.ts'
import type { DispatchVTable$ReleaseCallback } from '../../../../../../com/sun/jna/platform/win32/COM/DispatchVTable$ReleaseCallback.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
export class DispatchVTable extends Structure {
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
    constructor()
    AddRefCallback: DispatchVTable$AddRefCallback;
    GetIDsOfNamesCallback: DispatchVTable$GetIDsOfNamesCallback;
    GetTypeInfoCallback: DispatchVTable$GetTypeInfoCallback;
    GetTypeInfoCountCallback: DispatchVTable$GetTypeInfoCountCallback;
    InvokeCallback: DispatchVTable$InvokeCallback;
    QueryInterfaceCallback: DispatchVTable$QueryInterfaceCallback;
    ReleaseCallback: DispatchVTable$ReleaseCallback;
}