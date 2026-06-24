import type { Object } from '../../../java/lang/Object.d.ts'
import type { Buffer } from '../../../okio/Buffer.d.ts'
import type { BufferedSource } from '../../../okio/BufferedSource.d.ts'
import type { Source } from '../../../okio/Source.d.ts'
import type { Timeout } from '../../../okio/Timeout.d.ts'
export class Http2Reader$ContinuationSource extends Object implements Source {
    constructor(source: BufferedSource)
    flags: number;
    left: number;
    padding: number;
    // private source: BufferedSource;
    streamId: number;
    close(): void;
    read(sink: Buffer, byteCount: number): number;
    // private readContinuationHeader(): void;
    timeout(): Timeout;
}