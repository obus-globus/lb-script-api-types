import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../kotlin/jvm/functions/Function1.d.ts'
import type { CacheByClass } from '../../../../kotlin/reflect/jvm/internal/CacheByClass.d.ts'
import type { ComputableClassValue } from '../../../../kotlin/reflect/jvm/internal/ComputableClassValue.d.ts'
export class ClassValueCache<V extends Object | number | string | boolean> extends CacheByClass<V> {
    constructor(compute: Function1<Class<Object>, V>)
    // private classValue: ComputableClassValue<V>;
    clear(): void;
    get(key: Class<Object>): V;
}