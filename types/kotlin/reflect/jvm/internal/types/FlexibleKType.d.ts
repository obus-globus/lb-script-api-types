import type { Type } from '../../../../../java/lang/reflect/Type.d.ts'
import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Function0 } from '../../../../../kotlin/jvm/functions/Function0.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
import type { KClassifier } from '../../../../../kotlin/reflect/KClassifier.d.ts'
import type { KType } from '../../../../../kotlin/reflect/KType.d.ts'
import type { KTypeProjection } from '../../../../../kotlin/reflect/KTypeProjection.d.ts'
import type { AbstractKType } from '../../../../../kotlin/reflect/jvm/internal/types/AbstractKType.d.ts'
import type { FlexibleKType$Companion } from '../../../../../kotlin/reflect/jvm/internal/types/FlexibleKType$Companion.d.ts'
export class FlexibleKType extends AbstractKType {
    static Companion: FlexibleKType$Companion;
    private constructor(lowerBound: AbstractKType, upperBound: AbstractKType, isRawType: boolean, computeJavaType: Function0<Type> | null)
    readonly abbreviation: KType | null;
    readonly annotations: Annotation[];
    readonly arguments: KTypeProjection[];
    readonly classifier: KClassifier | null;
    /*not mapped: */ isDefinitelyNotNullType(): boolean;
    /*not mapped: */ isMarkedNullable(): boolean;
    /*not mapped: */ isNothingType(): boolean;
    // private isRawType: boolean;
    /*not mapped: */ isRawType(): boolean;
    /*not mapped: */ isSuspendFunctionType(): boolean;
    // private lowerBound: AbstractKType;
    readonly mutableCollectionClass: KClass<Object> | null;
    // private upperBound: AbstractKType;
    lowerBoundIfFlexible(): AbstractKType | null;
    makeDefinitelyNotNullAsSpecified(isDefinitelyNotNull: boolean): AbstractKType;
    makeNullableAsSpecified(nullable: boolean): AbstractKType;
    upperBoundIfFlexible(): AbstractKType | null;
}