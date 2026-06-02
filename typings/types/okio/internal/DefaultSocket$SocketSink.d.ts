import type { OutputStream } from '../../java/io/OutputStream.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Buffer } from '../../okio/Buffer.d.ts'
import type { Sink } from '../../okio/Sink.d.ts'
import type { SocketAsyncTimeout } from '../../okio/internal/SocketAsyncTimeout.d.ts'
export class DefaultSocket$SocketSink extends Object implements Sink {
    constructor(null_: DefaultSocket$SocketSink)
    // private outputStream: OutputStream;
    // private timeout: SocketAsyncTimeout;
    close(): void;
    flush(): void;
    timeout(): SocketAsyncTimeout;
    toString(): string;
    write(source: Buffer, byteCount: number): void;
}