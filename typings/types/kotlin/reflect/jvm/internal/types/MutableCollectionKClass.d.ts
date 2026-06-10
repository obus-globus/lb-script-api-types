import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KCallable } from '../../../../../kotlin/reflect/KCallable.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
import type { KFunction } from '../../../../../kotlin/reflect/KFunction.d.ts'
import type { KType } from '../../../../../kotlin/reflect/KType.d.ts'
import type { KTypeParameter } from '../../../../../kotlin/reflect/KTypeParameter.d.ts'
import type { KVisibility } from '../../../../../kotlin/reflect/KVisibility.d.ts'
import type { KTypeParameterOwnerImpl } from '../../../../../kotlin/reflect/jvm/internal/KTypeParameterOwnerImpl.d.ts'
import type { TypeConstructorMarker } from '../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeConstructorMarker.d.ts'
export class MutableCollectionKClass<T extends Object | number | string | boolean> extends Object implements KClass<T>, KTypeParameterOwnerImpl, TypeConstructorMarker {
    constructor(klass: KClass<T>, qualifiedName: string, createTypeParameters: (param0: MutableCollectionKClass<T>) => KTypeParameter[], createSupertypes: (param0: MutableCollectionKClass<T>) => KType[])
    readonly annotations: Annotation[];
    readonly constructors: KFunction<T>[];
    /*not mapped: */ isAbstract(): boolean;
    /*not mapped: */ isCompanion(): boolean;
    /*not mapped: */ isData(): boolean;
    /*not mapped: */ isFinal(): boolean;
    /*not mapped: */ isFun(): boolean;
    /*not mapped: */ isInner(): boolean;
    /*not mapped: */ isOpen(): boolean;
    /*not mapped: */ isSealed(): boolean;
    /*not mapped: */ isValue(): boolean;
    // private klass: KClass<T>;
    readonly members: KCallable<Object>[];
    readonly nestedClasses: KClass<Object>[];
    readonly objectInstance: T | null;
    readonly qualifiedName: string;
    readonly sealedSubclasses: KClass<T>[];
    readonly simpleName: string;
    readonly supertypes: KType[];
    readonly typeParameters: KTypeParameter[];
    readonly visibility: KVisibility | null;
    equals(other: Object | null): boolean;
    hashCode(): number;
    isInstance(value: Object | null): boolean;
    toString(): string;
}