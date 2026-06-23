import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface DiffBuilder$SerializableSupplier<T extends unknown> extends Serializable, Supplier<T>, Object{
}