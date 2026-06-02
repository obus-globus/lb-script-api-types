import type { Type } from '../../../../java/lang/reflect/Type.d.ts'
import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Function0 } from '../../../../kotlin/jvm/functions/Function0.d.ts'
import type { KTypeBase } from '../../../../kotlin/jvm/internal/KTypeBase.d.ts'
import type { KClassifier } from '../../../../kotlin/reflect/KClassifier.d.ts'
import type { KTypeProjection } from '../../../../kotlin/reflect/KTypeProjection.d.ts'
import type { ReflectProperties$LazySoftVal } from '../../../../kotlin/reflect/jvm/internal/ReflectProperties$LazySoftVal.d.ts'
import type { KotlinType } from '../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class KTypeImpl extends Object implements KTypeBase {
    constructor(type: KotlinType, computeJavaType: Function0<Type> | null)
    // private convert(type: KotlinType): KClassifier | null;
    equals(other: Object | null): boolean;
    hashCode(): number;
    makeNullableAsSpecified(nullable: boolean): KTypeImpl;
    toString(): string;
}