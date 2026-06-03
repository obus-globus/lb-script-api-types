import type { IOException } from '../../../java/io/IOException.d.ts'
import type { Buffer } from '../../../okio/Buffer.d.ts'
import type { ForwardingSink } from '../../../okio/ForwardingSink.d.ts'
import type { Sink } from '../../../okio/Sink.d.ts'
export class FaultHidingSink extends ForwardingSink {
    constructor(delegate: Sink, onException: (param0: IOException) => void)
    // private hasErrors: boolean;
    readonly onException: (param0: IOException) => void;
    close(): void;
    flush(): void;
    write(source: Buffer, byteCount: number): void;
}