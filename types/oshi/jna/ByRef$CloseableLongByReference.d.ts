import type { LongByReference } from '../../com/sun/jna/ptr/LongByReference.d.ts'
import type { AutoCloseable } from '../../java/lang/AutoCloseable.d.ts'
export class ByRef$CloseableLongByReference extends LongByReference implements AutoCloseable {
    constructor()
    constructor(arg0: number)
    close(): void;
}