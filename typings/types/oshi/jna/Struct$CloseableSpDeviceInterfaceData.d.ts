import type { Pointer } from '../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../com/sun/jna/Structure.d.ts'
import type { SetupApi$SP_DEVICE_INTERFACE_DATA } from '../../com/sun/jna/platform/win32/SetupApi$SP_DEVICE_INTERFACE_DATA.d.ts'
import type { AutoCloseable } from '../../java/lang/AutoCloseable.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
export class Struct$CloseableSpDeviceInterfaceData extends SetupApi$SP_DEVICE_INTERFACE_DATA implements AutoCloseable {
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
    close(): void;
}