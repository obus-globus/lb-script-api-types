import type { Buffer } from '../okio/Buffer.d.ts'
import type { ForwardingSource } from '../okio/ForwardingSource.d.ts'
import type { Source } from '../okio/Source.d.ts'
export class LimitSource extends ForwardingSource {
    constructor(delegate: Source, byteCount: number, throwIfSourceIsLonger: boolean)
    // private byteCount: number;
    // private bytesReceived: number;
    // private throwIfSourceIsLonger: boolean;
    read(sink: Buffer, byteCount: number): number;
}