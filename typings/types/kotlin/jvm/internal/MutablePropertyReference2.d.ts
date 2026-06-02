import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MutablePropertyReference } from '../../../kotlin/jvm/internal/MutablePropertyReference.d.ts'
import type { KCallable } from '../../../kotlin/reflect/KCallable.d.ts'
import type { KMutableProperty2 } from '../../../kotlin/reflect/KMutableProperty2.d.ts'
import type { KMutableProperty2$Setter } from '../../../kotlin/reflect/KMutableProperty2$Setter.d.ts'
import type { KProperty2$Getter } from '../../../kotlin/reflect/KProperty2$Getter.d.ts'
export abstract class MutablePropertyReference2 extends MutablePropertyReference implements KMutableProperty2<Object, Object, Object> {
    static NO_RECEIVER: Object;
    constructor()
    constructor(arg0: Class<Object>, arg1: string, arg2: string, arg3: number)
    readonly getter: KProperty2$Getter<Object, Object, Object>;
    readonly setter: KMutableProperty2$Setter<Object, Object, Object>;
    computeReflected(): KCallable<Object>;
    getDelegate(arg0: Object | null, arg1: Object | null): Object | null;
    invoke(arg0: Object | null, arg1: Object | null): Object | null;
}