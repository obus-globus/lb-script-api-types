import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KotlinKProperty$Accessor } from '../../../../kotlin/reflect/jvm/internal/KotlinKProperty$Accessor.d.ts'
import type { Caller } from '../../../../kotlin/reflect/jvm/internal/calls/Caller.d.ts'
export class KotlinKPropertyKt extends Object {
    static computeCallerForAccessor(paramarg0: KotlinKProperty$Accessor<Object, Object>, paramarg1: boolean): Caller<any>;
    static getBoundReceiver(paramarg0: KotlinKProperty$Accessor<Object, Object>): Object;
}