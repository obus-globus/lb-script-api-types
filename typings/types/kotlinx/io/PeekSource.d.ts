import type { Object } from '../../java/lang/Object.d.ts'
import type { Buffer } from '../../kotlinx/io/Buffer.d.ts'
import type { RawSource } from '../../kotlinx/io/RawSource.d.ts'
import type { Segment } from '../../kotlinx/io/Segment.d.ts'
import type { Source } from '../../kotlinx/io/Source.d.ts'
export class PeekSource extends Object implements RawSource {
    constructor(upstream: Source)
    // private buffer: Buffer;
    // private closed: boolean;
    // private expectedPos: number;
    // private expectedSegment: Segment | null;
    // private pos: number;
    // private upstream: Source;
    close(): void;
    readAtMostTo(sink: Buffer, byteCount: number): number;
}