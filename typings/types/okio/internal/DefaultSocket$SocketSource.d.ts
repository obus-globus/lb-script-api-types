import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Buffer } from '../../okio/Buffer.d.ts'
import type { Source } from '../../okio/Source.d.ts'
import type { SocketAsyncTimeout } from '../../okio/internal/SocketAsyncTimeout.d.ts'
export class DefaultSocket$SocketSource extends Object implements Source {
    constructor(null_: DefaultSocket$SocketSource)
    // private inputStream: InputStream;
    // private timeout: SocketAsyncTimeout;
    close(): void;
    read(sink: Buffer, byteCount: number): number;
    timeout(): SocketAsyncTimeout;
    toString(): string;
}