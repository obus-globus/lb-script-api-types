import type { Object } from '../java/lang/Object.d.ts'
import type { Buffer } from '../okio/Buffer.d.ts'
import type { BufferedSource } from '../okio/BufferedSource.d.ts'
import type { Segment } from '../okio/Segment.d.ts'
import type { Source } from '../okio/Source.d.ts'
import type { Timeout } from '../okio/Timeout.d.ts'
export class PeekSource extends Object implements Source {
    constructor(upstream: BufferedSource)
    // private buffer: Buffer;
    // private closed: boolean;
    // private expectedPos: number;
    // private expectedSegment: Segment | null;
    // private pos: number;
    // private upstream: BufferedSource;
    close(): void;
    read(sink: Buffer, byteCount: number): number;
    timeout(): Timeout;
}