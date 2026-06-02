import type { Object } from '../../java/lang/Object.d.ts'
import type { Segment$Companion } from '../../kotlinx/io/Segment$Companion.d.ts'
import type { SegmentCopyTracker } from '../../kotlinx/io/SegmentCopyTracker.d.ts'
export class Segment extends Object {
    static Companion: Segment$Companion;
    static SHARE_MINIMUM: number;
    static SIZE: number;
    private constructor()
    private constructor(data: number[], pos: number, limit: number, shareToken: SegmentCopyTracker | null, owner: boolean)
    // private copyTracker: SegmentCopyTracker | null;
    /*not mapped: */ getCopyTracker$kotlinx_io_core(): SegmentCopyTracker | null;
    // private data: number[];
    limit: number;
    next: Segment | null;
    owner: boolean;
    pos: number;
    prev: Segment | null;
    readonly remainingCapacity: number;
    /*not mapped: */ getShared$kotlinx_io_core(): boolean;
    readonly size: number;
    compact(): Segment;
    dataAsByteArray(readOnly: boolean): number[];
    getUnchecked(index: number): number;
    pop(): Segment | null;
    push(segment: Segment): Segment;
    readByte(): number;
    readInt(): number;
    readLong(): number;
    readShort(): number;
    readTo(dst: number[], dstStartOffset: number, dstEndOffset: number): void;
    setUnchecked(index: number, value: number): void;
    setUnchecked(index: number, b0: number, b1: number): void;
    setUnchecked(index: number, b0: number, b1: number, b2: number): void;
    setUnchecked(index: number, b0: number, b1: number, b2: number, b3: number): void;
    sharedCopy(): Segment;
    split(byteCount: number): Segment;
    write(src: number[], srcStartOffset: number, srcEndOffset: number): void;
    writeBackData(data: number[], bytesToCommit: number): void;
    writeByte(byte: number): void;
    writeInt(int: number): void;
    writeLong(long: number): void;
    writeShort(short: number): void;
    writeTo(sink: Segment, byteCount: number): void;
}