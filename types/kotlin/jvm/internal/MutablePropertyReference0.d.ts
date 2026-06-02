import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MutablePropertyReference } from '../../../kotlin/jvm/internal/MutablePropertyReference.d.ts'
import type { KCallable } from '../../../kotlin/reflect/KCallable.d.ts'
import type { KMutableProperty0 } from '../../../kotlin/reflect/KMutableProperty0.d.ts'
import type { KMutableProperty0$Setter } from '../../../kotlin/reflect/KMutableProperty0$Setter.d.ts'
import type { KProperty0$Getter } from '../../../kotlin/reflect/KProperty0$Getter.d.ts'
export abstract class MutablePropertyReference0 extends MutablePropertyReference implements KMutableProperty0<Object> {
    static NO_RECEIVER: Object;
    constructor()
    constructor(arg0: Object)
    constructor(arg0: Object, arg1: Class<Object>, arg2: string, arg3: string, arg4: number)
    readonly getter: KProperty0$Getter<Object>;
    readonly setter: KMutableProperty0$Setter<Object>;
    computeReflected(): KCallable<Object>;
    getDelegate(): Object | null;
    invoke(): Object | null;
}