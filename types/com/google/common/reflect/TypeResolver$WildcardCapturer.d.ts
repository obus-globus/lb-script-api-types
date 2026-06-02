import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { TypeVariable } from '../../../../java/lang/reflect/TypeVariable.d.ts'
import type { AtomicInteger } from '../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TypeResolver$WildcardCapturer extends Object {
    private constructor()
    private constructor(id: AtomicInteger)
    // private id: AtomicInteger;
    capture(type: Type): Type;
    captureAsTypeVariable(upperBounds: Type[]): TypeVariable<Object>;
    // private captureNullable(type: Type): Type;
    // private forTypeVariable(typeParam: TypeVariable<Object>): TypeResolver$WildcardCapturer;
    // private notForTypeVariable(): TypeResolver$WildcardCapturer;
}