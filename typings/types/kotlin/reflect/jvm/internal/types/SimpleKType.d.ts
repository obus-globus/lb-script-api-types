import type { Type } from '../../../../../java/lang/reflect/Type.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KTypeBase } from '../../../../../kotlin/jvm/internal/KTypeBase.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
import type { KClassifier } from '../../../../../kotlin/reflect/KClassifier.d.ts'
import type { KType } from '../../../../../kotlin/reflect/KType.d.ts'
import type { KTypeProjection } from '../../../../../kotlin/reflect/KTypeProjection.d.ts'
import type { AbstractKType } from '../../../../../kotlin/reflect/jvm/internal/types/AbstractKType.d.ts'
export class SimpleKType extends AbstractKType implements KTypeBase {
    constructor(classifier: KClassifier, arguments: KTypeProjection[], isMarkedNullable: boolean, annotations: Annotation[], abbreviation: KType | null, isDefinitelyNotNullType: boolean, isNothingType: boolean, isSuspendFunctionType: boolean, mutableCollectionClass: KClass<Object> | null, computeJavaType: (() => Type) | null)
    readonly abbreviation: KType | null;
    readonly annotations: Annotation[];
    readonly arguments: KTypeProjection[];
    readonly classifier: KClassifier;
    // private isDefinitelyNotNullType: boolean;
    /*not mapped: */ isDefinitelyNotNullType(): boolean;
    // private isMarkedNullable: boolean;
    /*not mapped: */ isMarkedNullable(): boolean;
    // private isNothingType: boolean;
    /*not mapped: */ isNothingType(): boolean;
    /*not mapped: */ isRawType(): boolean;
    // private isSuspendFunctionType: boolean;
    /*not mapped: */ isSuspendFunctionType(): boolean;
    readonly mutableCollectionClass: KClass<Object> | null;
    lowerBoundIfFlexible(): AbstractKType | null;
    makeDefinitelyNotNullAsSpecified(isDefinitelyNotNull: boolean): AbstractKType;
    makeNullableAsSpecified(nullable: boolean): AbstractKType;
    upperBoundIfFlexible(): AbstractKType | null;
}