import type { Object } from '../../../java/lang/Object.d.ts'
import type { Buffer } from '../../../kotlinx/io/Buffer.d.ts'
import type { Segment } from '../../../kotlinx/io/Segment.d.ts'
import type { BufferIterationContext } from '../../../kotlinx/io/unsafe/BufferIterationContext.d.ts'
import type { SegmentReadContext } from '../../../kotlinx/io/unsafe/SegmentReadContext.d.ts'
import type { SegmentWriteContext } from '../../../kotlinx/io/unsafe/SegmentWriteContext.d.ts'
export class UnsafeBufferOperations extends Object {
    static INSTANCE: UnsafeBufferOperations;
    readonly maxSafeWriteCapacity: number;
    forEachSegment(buffer: Buffer, action: (param0: SegmentReadContext, param1: Segment) => void): void;
    iterate(buffer: Buffer, iterationAction: (param0: BufferIterationContext, param1: Segment | null) => void): void;
    iterate(buffer: Buffer, offset: number, iterationAction: (param0: BufferIterationContext, param1: Segment | null, param2: number) => void): void;
    moveToTail(buffer: Buffer, bytes: number[], startIndex: number, endIndex: number): void;
    readFromHead(buffer: Buffer, readAction: (param0: number[], param1: number, param2: number) => number): number;
    readFromHead(buffer: Buffer, readAction: (param0: SegmentReadContext, param1: Segment) => number): number;
    writeToTail(buffer: Buffer, minimumCapacity: number, writeAction: (param0: number[], param1: number, param2: number) => number): number;
    writeToTail(buffer: Buffer, minimumCapacity: number, writeAction: (param0: SegmentWriteContext, param1: Segment) => number): number;
}