import type { IntByReference } from '../../com/sun/jna/ptr/IntByReference.d.ts'
import type { AutoCloseable } from '../../java/lang/AutoCloseable.d.ts'
export class ByRef$CloseableIntByReference extends IntByReference implements AutoCloseable {
    constructor()
    constructor(arg0: number)
    close(): void;
}