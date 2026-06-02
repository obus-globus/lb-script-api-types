import type { Object } from '../java/lang/Object.d.ts'
import type { Buffer } from '../okio/Buffer.d.ts'
import type { Sink } from '../okio/Sink.d.ts'
import type { Timeout } from '../okio/Timeout.d.ts'
export abstract class ForwardingSink extends Object implements Sink {
    constructor(delegate: Sink)
    // private delegate: Sink;
    delegate(): Sink;
    close(): void;
    delegate(): Sink;
    flush(): void;
    timeout(): Timeout;
    toString(): string;
    write(source: Buffer, byteCount: number): void;
}