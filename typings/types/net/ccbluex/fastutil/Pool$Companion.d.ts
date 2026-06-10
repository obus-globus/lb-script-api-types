import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Supplier } from '../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Pool } from '../../../net/ccbluex/fastutil/Pool.d.ts'
export class Pool$Companion extends Object {
    invoke<E extends Object | number | string | boolean>(initializer: () => E): Pool<E>;
    invoke<E extends Object | number | string | boolean>(initializer: () => E, finalizer: (param0: E) => void): Pool<E>;
}