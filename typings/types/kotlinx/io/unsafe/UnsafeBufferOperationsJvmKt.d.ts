import type { Object } from '../../../java/lang/Object.d.ts'
import type { Buffer } from '../../../kotlinx/io/Buffer.d.ts'
import type { UnsafeBufferOperations } from '../../../kotlinx/io/unsafe/UnsafeBufferOperations.d.ts'
export class UnsafeBufferOperationsJvmKt extends Object {
    static readBulk(paramarg0: UnsafeBufferOperations, paramarg1: Buffer, paramarg2: (Object | null)[], paramarg3: (param0: Object | null, param1: Object | null) => number): number;
    static readFromHead(paramarg0: UnsafeBufferOperations, paramarg1: Buffer, paramarg2: (param0: Object | null) => void): number;
    static writeToTail(paramarg0: UnsafeBufferOperations, paramarg1: Buffer, paramarg2: number, paramarg3: (param0: Object | null) => void): number;
}