import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function2 } from '../../../kotlin/jvm/functions/Function2.d.ts'
import type { Function3 } from '../../../kotlin/jvm/functions/Function3.d.ts'
import type { Buffer } from '../../../kotlinx/io/Buffer.d.ts'
import type { Segment } from '../../../kotlinx/io/Segment.d.ts'
import type { BufferIterationContext } from '../../../kotlinx/io/unsafe/BufferIterationContext.d.ts'
import type { SegmentReadContext } from '../../../kotlinx/io/unsafe/SegmentReadContext.d.ts'
import type { SegmentWriteContext } from '../../../kotlinx/io/unsafe/SegmentWriteContext.d.ts'
export class UnsafeBufferOperations extends Object {
    static INSTANCE: UnsafeBufferOperations;
    readonly maxSafeWriteCapacity: number;
    forEachSegment(buffer: Buffer, action: Function2<SegmentReadContext, Segment, void>): void;
    iterate(buffer: Buffer, iterationAction: Function2<BufferIterationContext, Segment, void>): void;
    iterate(buffer: Buffer, offset: number, iterationAction: Function3<BufferIterationContext, Segment, number, void>): void;
    moveToTail(buffer: Buffer, bytes: number[], startIndex: number, endIndex: number): void;
    readFromHead(buffer: Buffer, readAction: Function3<number[], number, number, number>): number;
    readFromHead(buffer: Buffer, readAction: Function2<SegmentReadContext, Segment, number>): number;
    writeToTail(buffer: Buffer, minimumCapacity: number, writeAction: Function3<number[], number, number, number>): number;
    writeToTail(buffer: Buffer, minimumCapacity: number, writeAction: Function2<SegmentWriteContext, Segment, number>): number;
}