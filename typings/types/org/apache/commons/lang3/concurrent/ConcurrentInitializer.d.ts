import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ConcurrentException } from '../../../../../org/apache/commons/lang3/concurrent/ConcurrentException.d.ts'
import type { FailableSupplier } from '../../../../../org/apache/commons/lang3/function/FailableSupplier.d.ts'
export interface ConcurrentInitializer<T extends Object | number | string | boolean> extends Object, FailableSupplier<T, ConcurrentException>{
}