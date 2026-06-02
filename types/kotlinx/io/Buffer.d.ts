import type { Object } from '../../java/lang/Object.d.ts'
import type { RawSink } from '../../kotlinx/io/RawSink.d.ts'
import type { RawSource } from '../../kotlinx/io/RawSource.d.ts'
import type { Segment } from '../../kotlinx/io/Segment.d.ts'
import type { Sink } from '../../kotlinx/io/Sink.d.ts'
import type { Source } from '../../kotlinx/io/Source.d.ts'
export class Buffer extends Object implements Sink, Source {
    constructor()
    readonly buffer: Buffer;
    head: Segment | null;
    readonly size: number;
    sizeMut: number;
    tail: Segment | null;
    clear(): void;
    close(): void;
    completeSegmentByteCount(): number;
    copy(): Buffer;
    copyTo(out: Buffer, startIndex: number, endIndex: number): void;
    emit(): void;
    exhausted(): boolean;
    flush(): void;
    get(position: number): number;
    hintEmit(): void;
    peek(): Source;
    // private pushSegment(newTail: Segment, tryCompact: boolean): void;
    readAtMostTo(sink: number[], startIndex: number, endIndex: number): number;
    readAtMostTo(sink: Buffer, byteCount: number): number;
    readByte(): number;
    readInt(): number;
    readLong(): number;
    readShort(): number;
    readTo(sink: RawSink, byteCount: number): void;
    recycleHead(): void;
    recycleTail(): void;
    request(byteCount: number): boolean;
    require(byteCount: number): void;
    skip(byteCount: number): void;
    // private throwEof(byteCount: number): void;
    toString(): string;
    transferFrom(source: RawSource): number;
    transferTo(sink: RawSink): number;
    writableSegment(minimumCapacity: number): Segment;
    write(source: number[], startIndex: number, endIndex: number): void;
    write(source: Buffer, byteCount: number): void;
    write(source: RawSource, byteCount: number): void;
    writeByte(byte: number): void;
    writeInt(int: number): void;
    writeLong(long: number): void;
    writeShort(short: number): void;
}