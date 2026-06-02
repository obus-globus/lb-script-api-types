import type { ObjectPool$ObjectCreator } from '../../../../io/netty/util/internal/ObjectPool$ObjectCreator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class ObjectPool<T extends Object | number | string | boolean> extends Object {
    static newPool(paramarg0: ObjectPool$ObjectCreator<Object>): ObjectPool<Object>;
    constructor()
    get(): T;
}