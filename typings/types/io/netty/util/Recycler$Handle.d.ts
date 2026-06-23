import type { ObjectPool$Handle } from '../../../io/netty/util/internal/ObjectPool$Handle.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Recycler$Handle<T extends unknown> extends ObjectPool$Handle<T>, Object{
}