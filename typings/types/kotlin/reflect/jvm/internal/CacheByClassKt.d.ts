import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CacheByClass } from '../../../../kotlin/reflect/jvm/internal/CacheByClass.d.ts'
export class CacheByClassKt extends Object {
    static createCache<V extends unknown>(compute: (param0: Class<Object>) => V): CacheByClass<V>;
}