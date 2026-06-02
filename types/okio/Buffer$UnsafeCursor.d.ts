import type { Closeable } from '../java/io/Closeable.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Buffer } from '../okio/Buffer.d.ts'
import type { Segment } from '../okio/Segment.d.ts'
export class Buffer$UnsafeCursor extends Object implements Closeable {
    constructor()
    buffer: Buffer | null;
    data: number[] | null;
    end: number;
    offset: number;
    readWrite: boolean;
    // private segment: Segment | null;
    /*not mapped: */ getSegment$okio(): Segment | null;
    start: number;
    close(): void;
    expandBuffer(minByteCount: number): number;
    next(): number;
    resizeBuffer(newSize: number): number;
    seek(offset: number): number;
}