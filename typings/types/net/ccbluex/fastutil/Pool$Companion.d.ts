import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Pool } from '../../../net/ccbluex/fastutil/Pool.d.ts'
export class Pool$Companion extends Object {
    invoke<E extends unknown>(initializer: () => E): Pool<E>;
    invoke<E extends unknown>(initializer: () => E, finalizer: (param0: E) => void): Pool<E>;
}