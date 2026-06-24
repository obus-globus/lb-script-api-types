import type { TypeResolver$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { TypeVariable } from '../../../../java/lang/reflect/TypeVariable.d.ts'
import type { AtomicInteger } from '../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TypeResolver$WildcardCapturer extends Object {
    private constructor()
    private constructor(id: AtomicInteger)
    constructor(arg0: AtomicInteger, arg1: TypeResolver$1)
    // private id: AtomicInteger;
    capture(type: Type): Type;
    captureAsTypeVariable(upperBounds: Type[]): TypeVariable<any>;
    // private captureNullable(type: Type): Type;
    // private forTypeVariable(typeParam: TypeVariable<any>): TypeResolver$WildcardCapturer;
    // private notForTypeVariable(): TypeResolver$WildcardCapturer;
}