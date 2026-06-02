import type { Buffer } from '../../okio/Buffer.d.ts'
import type { ForwardingSource } from '../../okio/ForwardingSource.d.ts'
import type { Source } from '../../okio/Source.d.ts'
export class FixedLengthSource extends ForwardingSource {
    constructor(delegate: Source, size: number, truncate: boolean)
    // private bytesReceived: number;
    // private size: number;
    // private truncate: boolean;
    read(sink: Buffer, byteCount: number): number;
}