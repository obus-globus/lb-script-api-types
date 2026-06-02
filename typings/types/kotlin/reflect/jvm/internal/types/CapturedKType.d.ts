import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
import type { KClassifier } from '../../../../../kotlin/reflect/KClassifier.d.ts'
import type { KType } from '../../../../../kotlin/reflect/KType.d.ts'
import type { KTypeProjection } from '../../../../../kotlin/reflect/KTypeProjection.d.ts'
import type { CapturedTypeMarker } from '../../../../../kotlin/reflect/jvm/internal/impl/types/model/CapturedTypeMarker.d.ts'
import type { AbstractKType } from '../../../../../kotlin/reflect/jvm/internal/types/AbstractKType.d.ts'
import type { CapturedKTypeConstructor } from '../../../../../kotlin/reflect/jvm/internal/types/CapturedKTypeConstructor.d.ts'
export class CapturedKType extends AbstractKType implements CapturedTypeMarker {
    constructor(lowerType: KType | null, typeConstructor: CapturedKTypeConstructor, isMarkedNullable: boolean)
    readonly abbreviation: KType | null;
    readonly annotations: Annotation[];
    readonly arguments: KTypeProjection[];
    readonly classifier: KClassifier | null;
    /*not mapped: */ isDefinitelyNotNullType(): boolean;
    // private isMarkedNullable: boolean;
    /*not mapped: */ isMarkedNullable(): boolean;
    /*not mapped: */ isNothingType(): boolean;
    /*not mapped: */ isRawType(): boolean;
    /*not mapped: */ isSuspendFunctionType(): boolean;
    readonly lowerType: KType | null;
    readonly mutableCollectionClass: KClass<Object> | null;
    readonly typeConstructor: CapturedKTypeConstructor;
    equals(other: Object | null): boolean;
    hashCode(): number;
    lowerBoundIfFlexible(): AbstractKType | null;
    makeDefinitelyNotNullAsSpecified(isDefinitelyNotNull: boolean): AbstractKType;
    makeNullableAsSpecified(nullable: boolean): AbstractKType;
    toString(): string;
    upperBoundIfFlexible(): AbstractKType | null;
}