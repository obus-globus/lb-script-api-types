import type { WinNT$HANDLEByReference } from '../../com/sun/jna/platform/win32/WinNT$HANDLEByReference.d.ts'
import type { AutoCloseable } from '../../java/lang/AutoCloseable.d.ts'
export class ByRef$CloseableHANDLEByReference extends WinNT$HANDLEByReference implements AutoCloseable {
    constructor()
    close(): void;
}