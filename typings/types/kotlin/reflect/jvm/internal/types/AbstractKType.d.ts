import type { Type } from '../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Function0 } from '../../../../../kotlin/jvm/functions/Function0.d.ts'
import type { KTypeBase } from '../../../../../kotlin/jvm/internal/KTypeBase.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
import type { KType } from '../../../../../kotlin/reflect/KType.d.ts'
import type { ReflectProperties$LazySoftVal } from '../../../../../kotlin/reflect/jvm/internal/ReflectProperties$LazySoftVal.d.ts'
import type { DefinitelyNotNullTypeMarker } from '../../../../../kotlin/reflect/jvm/internal/impl/types/model/DefinitelyNotNullTypeMarker.d.ts'
import type { FlexibleTypeMarker } from '../../../../../kotlin/reflect/jvm/internal/impl/types/model/FlexibleTypeMarker.d.ts'
import type { SimpleTypeMarker } from '../../../../../kotlin/reflect/jvm/internal/impl/types/model/SimpleTypeMarker.d.ts'
import type { TypeArgumentListMarker } from '../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeArgumentListMarker.d.ts'
export abstract class AbstractKType extends Object implements KTypeBase, DefinitelyNotNullTypeMarker, FlexibleTypeMarker, SimpleTypeMarker, TypeArgumentListMarker {
    constructor(computeJavaType: Function0<Type> | null)
    readonly abbreviation: KType | null;
    // private computeJavaType: ReflectProperties$LazySoftVal<Type> | null;
    // private /*not mapped: */ getComputeJavaType(): ReflectProperties$LazySoftVal<Type> | null;
    /*not mapped: */ isDefinitelyNotNullType(): boolean;
    /*not mapped: */ isNothingType(): boolean;
    /*not mapped: */ isRawType(): boolean;
    /*not mapped: */ isSuspendFunctionType(): boolean;
    readonly javaType: Type | null;
    readonly mutableCollectionClass: KClass<Object> | null;
    equals(other: Object | null): boolean;
    hashCode(): number;
    lowerBoundIfFlexible(): AbstractKType | null;
    makeDefinitelyNotNullAsSpecified(isDefinitelyNotNull: boolean): AbstractKType;
    makeNullableAsSpecified(nullable: boolean): AbstractKType;
    toString(): string;
    upperBoundIfFlexible(): AbstractKType | null;
}