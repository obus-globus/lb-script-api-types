import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { FunctionReference } from '../../../kotlin/jvm/internal/FunctionReference.d.ts'
import type { KFunction } from '../../../kotlin/reflect/KFunction.d.ts'
export class FunInterfaceConstructorReference extends FunctionReference implements Serializable {
    static NO_RECEIVER: Object;
    constructor(arg0: Class<Object>)
    // private funInterface: Class<Object>;
    equals(arg0: Object | null): boolean;
    getReflected(): KFunction<Object>;
    hashCode(): number;
    toString(): string;
}