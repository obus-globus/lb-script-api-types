import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CacheByClass } from '../../../../kotlin/reflect/jvm/internal/CacheByClass.d.ts'
export class ConcurrentHashMapCache<V extends unknown> extends CacheByClass<V> {
    constructor(compute: (param0: Class<Object>) => V)
    // private cache: JavaMap<Class<Object>, V>;
    // private compute: (param0: Class<Object>) => V;
    clear(): void;
    get(key: Class<Object>): V;
}