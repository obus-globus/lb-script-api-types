import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CallableReference } from '../../../kotlin/jvm/internal/CallableReference.d.ts'
import type { KCallable } from '../../../kotlin/reflect/KCallable.d.ts'
import type { KProperty } from '../../../kotlin/reflect/KProperty.d.ts'
export abstract class PropertyReference extends CallableReference implements KProperty<Object> {
    static NO_RECEIVER: Object;
    constructor()
    constructor(arg0: Object)
    constructor(arg0: Object, arg1: Class<Object>, arg2: string, arg3: string, arg4: number)
    /*not mapped: */ isConst(): boolean;
    /*not mapped: */ isLateinit(): boolean;
    // private syntheticJavaProperty: boolean;
    compute(): KCallable<Object>;
    equals(arg0: Object | null): boolean;
    getReflected(): KProperty<Object>;
    hashCode(): number;
    toString(): string;
}