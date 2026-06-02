import type { LibCAPI$size_t$ByReference } from '../../com/sun/jna/platform/unix/LibCAPI$size_t$ByReference.d.ts'
import type { AutoCloseable } from '../../java/lang/AutoCloseable.d.ts'
export class ByRef$CloseableSizeTByReference extends LibCAPI$size_t$ByReference implements AutoCloseable {
    constructor()
    constructor(arg0: number)
    close(): void;
}