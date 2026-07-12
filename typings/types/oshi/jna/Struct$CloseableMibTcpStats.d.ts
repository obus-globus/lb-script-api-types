import type { Pointer } from '../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../com/sun/jna/Structure.d.ts'
import type { IPHlpAPI$MIB_TCPSTATS } from '../../com/sun/jna/platform/win32/IPHlpAPI$MIB_TCPSTATS.d.ts'
import type { AutoCloseable } from '../../java/lang/AutoCloseable.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Struct$CloseableMibTcpStats extends IPHlpAPI$MIB_TCPSTATS implements AutoCloseable {
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
    static newInstance(paramarg0: Class<Structure>): Structure | null;
    static newInstance(paramarg0: Class<Structure>, paramarg1: Pointer): Structure | null;
    constructor()
    close(): void;
}