import type { Class } from '../../../java/lang/Class.d.ts'
import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ClassBasedDeclarationContainer } from '../../../kotlin/jvm/internal/ClassBasedDeclarationContainer.d.ts'
import type { ClassReference$Companion } from '../../../kotlin/jvm/internal/ClassReference$Companion.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { KType } from '../../../kotlin/reflect/KType.d.ts'
import type { KTypeParameter } from '../../../kotlin/reflect/KTypeParameter.d.ts'
import type { KVisibility } from '../../../kotlin/reflect/KVisibility.d.ts'
export class ClassReference extends Object implements ClassBasedDeclarationContainer, KClass<Object> {
    static Companion: ClassReference$Companion;
    constructor(jClass: Class<Object>)
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
    // private jClass: Class<Object>;
    /*not mapped: */ getJClass(): Class<Object>;
    readonly members: E[];
    readonly nestedClasses: E[];
    readonly objectInstance: Object | null;
    readonly qualifiedName: string | null;
    readonly sealedSubclasses: KClass<Object>[];
    readonly simpleName: string | null;
    readonly supertypes: KType[];
    readonly typeParameters: KTypeParameter[];
    readonly visibility: KVisibility | null;
    equals(other: Object | null): boolean;
    // private error(): void;
    hashCode(): number;
    isInstance(value: Object | null): boolean;
    toString(): string;
}