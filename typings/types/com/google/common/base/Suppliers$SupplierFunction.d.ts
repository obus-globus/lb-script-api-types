import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Supplier } from '../../../../com/google/common/base/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Suppliers$SupplierFunction<T extends Object | number | string | boolean> extends Function<() => T, T>, Object{
}