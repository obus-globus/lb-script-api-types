import type { ObjectPool$Handle } from '../../../../io/netty/util/internal/ObjectPool$Handle.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ObjectPool$ObjectCreator<T extends unknown> extends Object{
    newObject(arg0: ObjectPool$Handle<T>): T;
}