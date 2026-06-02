import type { BaseTSD$ULONG_PTRByReference } from '../../com/sun/jna/platform/win32/BaseTSD$ULONG_PTRByReference.d.ts'
import type { AutoCloseable } from '../../java/lang/AutoCloseable.d.ts'
export class ByRef$CloseableULONGptrByReference extends BaseTSD$ULONG_PTRByReference implements AutoCloseable {
    constructor()
    close(): void;
}