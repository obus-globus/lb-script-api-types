import type { Object } from '../java/lang/Object.d.ts'
import type { Buffer } from '../okio/Buffer.d.ts'
import type { Sink } from '../okio/Sink.d.ts'
import type { Timeout } from '../okio/Timeout.d.ts'
export class BlackholeSink extends Object implements Sink {
    constructor()
    close(): void;
    flush(): void;
    timeout(): Timeout;
    write(source: Buffer, byteCount: number): void;
}