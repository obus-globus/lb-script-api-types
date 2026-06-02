import type { Type } from '../../../../../java/lang/reflect/Type.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Function0 } from '../../../../../kotlin/jvm/functions/Function0.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
import type { KClassifier } from '../../../../../kotlin/reflect/KClassifier.d.ts'
import type { KType } from '../../../../../kotlin/reflect/KType.d.ts'
import type { KTypeProjection } from '../../../../../kotlin/reflect/KTypeProjection.d.ts'
import type { KotlinType } from '../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { AbstractKType } from '../../../../../kotlin/reflect/jvm/internal/types/AbstractKType.d.ts'
export class DescriptorKType extends AbstractKType {
    constructor(type: KotlinType, computeJavaType: Function0<Type> | null)
    constructor(type: KotlinType, computeJavaType: Function0<Type> | null, isAbbreviation: boolean)
    // private convert(type: KotlinType): KClassifier | null;
    equals(other: Object | null): boolean;
    hashCode(): number;
    lowerBoundIfFlexible(): AbstractKType | null;
    makeDefinitelyNotNullAsSpecified(isDefinitelyNotNull: boolean): AbstractKType;
    makeNullableAsSpecified(nullable: boolean): AbstractKType;
    upperBoundIfFlexible(): AbstractKType | null;
}