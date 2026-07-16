import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Buffer } from '../../../kotlinx/io/Buffer.d.ts'
import type { UnsafeBufferOperations } from '../../../kotlinx/io/unsafe/UnsafeBufferOperations.d.ts'
export class UnsafeBufferOperationsJvmKt extends Object {
    static readBulk(self: UnsafeBufferOperations, buffer: Buffer, iovec: (ByteBuffer | null)[], readAction: (param0: (ByteBuffer | null)[], param1: number) => number): number;
    static readFromHead(self: UnsafeBufferOperations, buffer: Buffer, readAction: (param0: ByteBuffer) => void): number;
    static writeToTail(self: UnsafeBufferOperations, buffer: Buffer, minimumCapacity: number, writeAction: (param0: ByteBuffer) => void): number;
}