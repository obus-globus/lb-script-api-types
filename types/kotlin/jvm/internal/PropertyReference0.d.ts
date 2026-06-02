import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PropertyReference } from '../../../kotlin/jvm/internal/PropertyReference.d.ts'
import type { KCallable } from '../../../kotlin/reflect/KCallable.d.ts'
import type { KProperty0 } from '../../../kotlin/reflect/KProperty0.d.ts'
import type { KProperty0$Getter } from '../../../kotlin/reflect/KProperty0$Getter.d.ts'
export abstract class PropertyReference0 extends PropertyReference implements KProperty0<Object> {
    static NO_RECEIVER: Object;
    constructor()
    constructor(arg0: Object)
    constructor(arg0: Object, arg1: Class<Object>, arg2: string, arg3: string, arg4: number)
    readonly getter: KProperty0$Getter<Object>;
    computeReflected(): KCallable<Object>;
    getDelegate(): Object | null;
    invoke(): Object | null;
}