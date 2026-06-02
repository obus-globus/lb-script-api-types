import type { Object } from '../../../../java/lang/Object.d.ts'
export interface UnsafeMemorySupport extends Object{
    unsafeCopyMemory(srcBase: Object, srcOffset: number, destBase: Object, destOffset: number, bytes: number): void;
    unsafeCopySwapMemory(srcBase: Object, srcOffset: number, destBase: Object, destOffset: number, bytes: number, elemSize: number): void;
    unsafeSetMemory(destBase: Object, destOffset: number, bytes: number, bvalue: number): void;
}