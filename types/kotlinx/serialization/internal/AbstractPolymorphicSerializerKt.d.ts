import type { Object } from '../../../java/lang/Object.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
export class AbstractPolymorphicSerializerKt extends Object {
    static throwSubtypeNotRegistered(paramarg0: string, paramarg1: KClass<Object>): void;
    static throwSubtypeNotRegistered(paramarg0: KClass<Object>, paramarg1: KClass<Object>): void;
}