import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { Winsvc$SERVICE_STATUS_PROCESS } from '../../../../../com/sun/jna/platform/win32/Winsvc$SERVICE_STATUS_PROCESS.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export class Winsvc$ENUM_SERVICE_STATUS_PROCESS extends Structure {
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
    ServiceStatusProcess: Winsvc$SERVICE_STATUS_PROCESS;
    lpDisplayName: string;
    lpServiceName: string;
}