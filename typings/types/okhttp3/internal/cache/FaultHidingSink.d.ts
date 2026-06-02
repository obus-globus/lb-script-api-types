import type { IOException } from '../../../java/io/IOException.d.ts'
import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
import type { Buffer } from '../../../okio/Buffer.d.ts'
import type { ForwardingSink } from '../../../okio/ForwardingSink.d.ts'
import type { Sink } from '../../../okio/Sink.d.ts'
export class FaultHidingSink extends ForwardingSink {
    constructor(delegate: Sink, onException: Function1<IOException, void>)
    // private hasErrors: boolean;
    readonly onException: (param0: IOException) => void;
    close(): void;
    flush(): void;
    write(source: Buffer, byteCount: number): void;
}