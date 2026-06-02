import type { Cipher } from '../javax/crypto/Cipher.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Throwable } from '../java/lang/Throwable.d.ts'
import type { Buffer } from '../okio/Buffer.d.ts'
import type { BufferedSink } from '../okio/BufferedSink.d.ts'
import type { Sink } from '../okio/Sink.d.ts'
import type { Timeout } from '../okio/Timeout.d.ts'
export class CipherSink extends Object implements Sink {
    constructor(sink: BufferedSink, cipher: Cipher)
    // private blockSize: number;
    readonly cipher: Cipher;
    // private closed: boolean;
    // private sink: BufferedSink;
    close(): void;
    // private doFinal(): Throwable | null;
    flush(): void;
    timeout(): Timeout;
    // private update(source: Buffer, remaining: number): number;
    write(source: Buffer, byteCount: number): void;
}