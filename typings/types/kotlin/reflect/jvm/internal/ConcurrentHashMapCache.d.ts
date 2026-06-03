import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CacheByClass } from '../../../../kotlin/reflect/jvm/internal/CacheByClass.d.ts'
export class ConcurrentHashMapCache<V extends Object | number | string | boolean> extends CacheByClass<V> {
    constructor(compute: (param0: Class<Object>) => V)
    // private cache: Map<Class<Object>, V>;
    // private compute: (param0: Class<Object>) => V;
    clear(): void;
    get(key: Class<Object>): V;
}