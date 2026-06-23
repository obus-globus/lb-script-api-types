import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CacheByClass } from '../../../../kotlin/reflect/jvm/internal/CacheByClass.d.ts'
import type { ComputableClassValue } from '../../../../kotlin/reflect/jvm/internal/ComputableClassValue.d.ts'
export class ClassValueCache<V extends unknown> extends CacheByClass<V> {
    constructor(compute: (param0: Class<Object>) => V)
    // private classValue: ComputableClassValue<V>;
    clear(): void;
    get(key: Class<Object>): V;
}