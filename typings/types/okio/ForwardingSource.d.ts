import type { Object } from '../java/lang/Object.d.ts'
import type { Buffer } from '../okio/Buffer.d.ts'
import type { Source } from '../okio/Source.d.ts'
import type { Timeout } from '../okio/Timeout.d.ts'
export abstract class ForwardingSource extends Object implements Source {
    constructor(delegate: Source)
    // private delegate: Source;
    delegate(): Source;
    close(): void;
    delegate(): Source;
    read(sink: Buffer, byteCount: number): number;
    timeout(): Timeout;
    toString(): string;
}