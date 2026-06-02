import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { UnwrappedType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/UnwrappedType.d.ts'
export class TypeWithEnhancementKt extends Object {
    static getEnhancement(paramarg0: KotlinType): KotlinType;
    static inheritEnhancement(paramarg0: UnwrappedType, paramarg1: KotlinType): UnwrappedType;
    static inheritEnhancement(paramarg0: UnwrappedType, paramarg1: KotlinType, paramarg2: Function1<Object, Object>): UnwrappedType;
    static wrapEnhancement(paramarg0: UnwrappedType, paramarg1: KotlinType): UnwrappedType;
}