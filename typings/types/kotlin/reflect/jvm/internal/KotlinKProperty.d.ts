import type { Field } from '../../../../java/lang/reflect/Field.d.ts'
import type { GenericDeclaration } from '../../../../java/lang/reflect/GenericDeclaration.d.ts'
import type { Member } from '../../../../java/lang/reflect/Member.d.ts'
import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../kotlin/Lazy.d.ts'
import type { KParameter } from '../../../../kotlin/reflect/KParameter.d.ts'
import type { KType } from '../../../../kotlin/reflect/KType.d.ts'
import type { KTypeParameter } from '../../../../kotlin/reflect/KTypeParameter.d.ts'
import type { KVisibility } from '../../../../kotlin/reflect/KVisibility.d.ts'
import type { KCallableOverriddenStorage } from '../../../../kotlin/reflect/jvm/internal/KCallableOverriddenStorage.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { KotlinKCallable } from '../../../../kotlin/reflect/jvm/internal/KotlinKCallable.d.ts'
import type { KotlinKProperty$Getter } from '../../../../kotlin/reflect/jvm/internal/KotlinKProperty$Getter.d.ts'
import type { ReflectKProperty } from '../../../../kotlin/reflect/jvm/internal/ReflectKProperty.d.ts'
import type { TypeParameterTable } from '../../../../kotlin/reflect/jvm/internal/TypeParameterTable.d.ts'
import type { Caller } from '../../../../kotlin/reflect/jvm/internal/calls/Caller.d.ts'
import type { KmProperty } from '../../../../kotlin/reflect/jvm/internal/impl/km/KmProperty.d.ts'
import type { Modality } from '../../../../kotlin/reflect/jvm/internal/impl/km/Modality.d.ts'
export abstract class KotlinKProperty<V extends unknown> extends KotlinKCallable<V> implements ReflectKProperty<V> {
    constructor(container: KDeclarationContainerImpl, signature: string, rawBoundReceiver: Object | null, kmProperty: KmProperty, overriddenStorage: KCallableOverriddenStorage)
    readonly allParameters: KParameter[];
    readonly annotations: Annotation[];
    readonly caller: Caller<any>;
    readonly callerWithDefaults: Caller<any> | null;
    readonly container: KDeclarationContainerImpl;
    readonly getter: KotlinKProperty$Getter<V>;
    /*not mapped: */ isConst(): boolean;
    /*not mapped: */ isLateinit(): boolean;
    /*not mapped: */ isSuspend(): boolean;
    readonly javaField: Field | null;
    readonly kmProperty: KmProperty;
    readonly modality: Modality;
    readonly name: string;
    readonly parameters: KParameter[];
    readonly rawBoundReceiver: Object | null;
    readonly returnType: KType;
    readonly signature: string;
    readonly typeParameterTable: Lazy<TypeParameterTable>;
    readonly typeParameters: KTypeParameter[];
    readonly visibility: KVisibility | null;
    protected computeDelegateSource(): Member | null;
    equals(other: Object | null): boolean;
    findJavaDeclaration(): GenericDeclaration | null;
    hashCode(): number;
    toString(): string;
}