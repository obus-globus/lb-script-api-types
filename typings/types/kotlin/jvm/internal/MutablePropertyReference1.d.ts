import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MutablePropertyReference } from '../../../kotlin/jvm/internal/MutablePropertyReference.d.ts'
import type { KCallable } from '../../../kotlin/reflect/KCallable.d.ts'
import type { KMutableProperty1 } from '../../../kotlin/reflect/KMutableProperty1.d.ts'
import type { KMutableProperty1$Setter } from '../../../kotlin/reflect/KMutableProperty1$Setter.d.ts'
import type { KProperty1$Getter } from '../../../kotlin/reflect/KProperty1$Getter.d.ts'
export abstract class MutablePropertyReference1 extends MutablePropertyReference implements KMutableProperty1<Object, Object> {
    static NO_RECEIVER: Object;
    constructor()
    constructor(arg0: Object)
    constructor(arg0: Object, arg1: Class<Object>, arg2: string, arg3: string, arg4: number)
    readonly getter: KProperty1$Getter<Object, Object>;
    readonly setter: KMutableProperty1$Setter<Object, Object>;
    computeReflected(): KCallable<Object>;
    getDelegate(arg0: Object | null): Object | null;
    invoke(arg0: Object | null): Object | null;
}