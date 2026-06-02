import type { Supplier } from '../../../../com/google/common/base/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ImmutableSupplier<T extends Object | number | string | boolean> extends Supplier<T>, Object{
}