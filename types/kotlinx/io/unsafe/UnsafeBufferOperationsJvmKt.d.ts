import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
import type { Function2 } from '../../../kotlin/jvm/functions/Function2.d.ts'
import type { Buffer } from '../../../kotlinx/io/Buffer.d.ts'
import type { UnsafeBufferOperations } from '../../../kotlinx/io/unsafe/UnsafeBufferOperations.d.ts'
export class UnsafeBufferOperationsJvmKt extends Object {
    static readBulk(paramarg0: UnsafeBufferOperations, paramarg1: Buffer, paramarg2: (Object | null)[], paramarg3: Function2<Object, Object, number>): number;
    static readFromHead(paramarg0: UnsafeBufferOperations, paramarg1: Buffer, paramarg2: Function1<Object, void>): number;
    static writeToTail(paramarg0: UnsafeBufferOperations, paramarg1: Buffer, paramarg2: number, paramarg3: Function1<Object, void>): number;
}