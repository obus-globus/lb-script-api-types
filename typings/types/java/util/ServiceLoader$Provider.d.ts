import type { Class } from '../../java/lang/Class.d.ts'
import type { Supplier } from '../../java/util/function/Supplier.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface ServiceLoader$Provider<S extends unknown> extends Supplier<S>, Object{
    get(): S;
    type(): Class<S>;
}