import type { Object } from '../../../java/lang/Object.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
export class AbstractPolymorphicSerializerKt extends Object {
    static throwSubtypeNotRegistered(subClassName: string | null, baseClass: KClass<Object>): void;
    static throwSubtypeNotRegistered(subClass: KClass<Object>, baseClass: KClass<Object>): void;
}