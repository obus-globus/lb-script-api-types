import type { Cipher } from '../javax/crypto/Cipher.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Buffer } from '../okio/Buffer.d.ts'
import type { BufferedSource } from '../okio/BufferedSource.d.ts'
import type { Source } from '../okio/Source.d.ts'
import type { Timeout } from '../okio/Timeout.d.ts'
export class CipherSource extends Object implements Source {
    constructor(source: BufferedSource, cipher: Cipher)
    // private blockSize: number;
    // private buffer: Buffer;
    readonly cipher: Cipher;
    // private closed: boolean;
    // private final: boolean;
    // private source: BufferedSource;
    close(): void;
    // private doFinal(): void;
    read(sink: Buffer, byteCount: number): number;
    // private refill(): void;
    timeout(): Timeout;
    // private update(): void;
}