import type { NativeLong } from '../../com/sun/jna/NativeLong.d.ts'
import type { NativeLongByReference } from '../../com/sun/jna/ptr/NativeLongByReference.d.ts'
import type { AutoCloseable } from '../../java/lang/AutoCloseable.d.ts'
export class ByRef$CloseableNativeLongByReference extends NativeLongByReference implements AutoCloseable {
    constructor()
    constructor(arg0: NativeLong)
    close(): void;
}