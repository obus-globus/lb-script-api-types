import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FlexibleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/FlexibleType.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { SimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
export class FlexibleTypesKt extends Object {
    static asFlexibleType(paramarg0: KotlinType): FlexibleType;
    static isFlexible(paramarg0: KotlinType): boolean;
    static lowerIfFlexible(paramarg0: KotlinType): SimpleType;
    static upperIfFlexible(paramarg0: KotlinType): SimpleType;
}