import type { Object } from '../../java/lang/Object.d.ts'
import type { Buffer } from '../../kotlinx/io/Buffer.d.ts'
import type { Segment } from '../../kotlinx/io/Segment.d.ts'
export class BufferKt extends Object {
    static seek<T extends unknown>(self: Buffer, fromIndex: number, lambda: (param0: Segment | null, param1: number) => T): T;
}