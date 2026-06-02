import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
import type { KType } from '../../../../../kotlin/reflect/KType.d.ts'
import type { KTypeParameter } from '../../../../../kotlin/reflect/KTypeParameter.d.ts'
import type { KVisibility } from '../../../../../kotlin/reflect/KVisibility.d.ts'
import type { KTypeParameterOwnerImpl } from '../../../../../kotlin/reflect/jvm/internal/KTypeParameterOwnerImpl.d.ts'
import type { TypeConstructorMarker } from '../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeConstructorMarker.d.ts'
export class NothingKClass extends Object implements KClass<void>, KTypeParameterOwnerImpl, TypeConstructorMarker {
    static INSTANCE: NothingKClass;
    readonly annotations: Annotation[];
    readonly constructors: E[];
    /*not mapped: */ isAbstract(): boolean;
    /*not mapped: */ isCompanion(): boolean;
    /*not mapped: */ isData(): boolean;
    /*not mapped: */ isFinal(): boolean;
    /*not mapped: */ isFun(): boolean;
    /*not mapped: */ isInner(): boolean;
    /*not mapped: */ isOpen(): boolean;
    /*not mapped: */ isSealed(): boolean;
    /*not mapped: */ isValue(): boolean;
    readonly members: E[];
    readonly nestedClasses: E[];
    readonly objectInstance: void | null;
    readonly qualifiedName: string;
    readonly sealedSubclasses: KClass<void>[];
    readonly simpleName: string;
    readonly supertypes: KType[];
    readonly typeParameters: KTypeParameter[];
    readonly visibility: KVisibility | null;
    equals(other: Object | null): boolean;
    hashCode(): number;
    isInstance(value: Object | null): boolean;
    toString(): string;
}