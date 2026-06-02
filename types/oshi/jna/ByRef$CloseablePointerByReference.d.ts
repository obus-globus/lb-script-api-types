import type { PointerByReference } from '../../com/sun/jna/ptr/PointerByReference.d.ts'
import type { AutoCloseable } from '../../java/lang/AutoCloseable.d.ts'
export class ByRef$CloseablePointerByReference extends PointerByReference implements AutoCloseable {
    constructor()
    close(): void;
}