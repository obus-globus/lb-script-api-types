import type { Object } from '../../java/lang/Object.d.ts'
import type { KAnnotatedElement } from '../../kotlin/reflect/KAnnotatedElement.d.ts'
import type { KCallable } from '../../kotlin/reflect/KCallable.d.ts'
import type { KClassifier } from '../../kotlin/reflect/KClassifier.d.ts'
import type { KDeclarationContainer } from '../../kotlin/reflect/KDeclarationContainer.d.ts'
import type { KFunction } from '../../kotlin/reflect/KFunction.d.ts'
import type { KType } from '../../kotlin/reflect/KType.d.ts'
import type { KTypeParameter } from '../../kotlin/reflect/KTypeParameter.d.ts'
import type { KVisibility } from '../../kotlin/reflect/KVisibility.d.ts'
export interface KClass<T extends unknown> extends Object, KAnnotatedElement, KClassifier, KDeclarationContainer{
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
    readonly members: KCallable<Object>[];
    readonly nestedClasses: KClass<Object>[];
    readonly objectInstance: T | null;
    readonly qualifiedName: string | null;
    readonly sealedSubclasses: KClass<T>[];
    readonly simpleName: string | null;
    readonly supertypes: KType[];
    readonly typeParameters: KTypeParameter[];
    readonly visibility: KVisibility | null;
    equals(other: Object | null): boolean;
    hashCode(): number;
    isInstance(value: Object | null): boolean;
}