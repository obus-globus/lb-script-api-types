import type { Inflater } from '../java/util/zip/Inflater.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { Buffer } from '../okio/Buffer.d.ts'
import type { BufferedSource } from '../okio/BufferedSource.d.ts'
import type { Source } from '../okio/Source.d.ts'
import type { Timeout } from '../okio/Timeout.d.ts'
export class InflaterSource extends Object implements Source {
    constructor(source: BufferedSource, inflater: Inflater)
    constructor(source: Source, inflater: Inflater)
    // private bufferBytesHeldByInflater: number;
    // private closed: boolean;
    // private inflater: Inflater;
    // private source: BufferedSource;
    close(): void;
    read(sink: Buffer, byteCount: number): number;
    readOrInflate(sink: Buffer, byteCount: number): number;
    refill(): boolean;
    // private releaseBytesAfterInflate(): void;
    timeout(): Timeout;
}