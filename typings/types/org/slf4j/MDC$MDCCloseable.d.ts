import type { MDC$1 } from '../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Closeable } from '../../java/io/Closeable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class MDC$MDCCloseable extends Object implements Closeable {
    private constructor(arg0: string)
    constructor(arg0: string, arg1: MDC$1)
    // private key: string;
    close(): void;
}