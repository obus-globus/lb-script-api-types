import type { Field } from '../../../../java/lang/reflect/Field.d.ts'
import type { GenericDeclaration } from '../../../../java/lang/reflect/GenericDeclaration.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KParameter } from '../../../../kotlin/reflect/KParameter.d.ts'
import type { KType } from '../../../../kotlin/reflect/KType.d.ts'
import type { KTypeParameter } from '../../../../kotlin/reflect/KTypeParameter.d.ts'
import type { JavaKCallable } from '../../../../kotlin/reflect/jvm/internal/JavaKCallable.d.ts'
import type { JavaKProperty$Getter } from '../../../../kotlin/reflect/jvm/internal/JavaKProperty$Getter.d.ts'
import type { KCallableOverriddenStorage } from '../../../../kotlin/reflect/jvm/internal/KCallableOverriddenStorage.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { ReflectKProperty } from '../../../../kotlin/reflect/jvm/internal/ReflectKProperty.d.ts'
import type { Caller } from '../../../../kotlin/reflect/jvm/internal/calls/Caller.d.ts'
import type { Modality } from '../../../../kotlin/reflect/jvm/internal/impl/km/Modality.d.ts'
export abstract class JavaKProperty<V extends unknown> extends JavaKCallable<V> implements ReflectKProperty<V> {
    constructor(container: KDeclarationContainerImpl, field: Field, rawBoundReceiver: Object | null, overriddenStorage: KCallableOverriddenStorage)
    readonly allParameters: KParameter[];
    readonly caller: Caller<any>;
    readonly callerWithDefaults: Caller<any> | null;
    readonly getter: JavaKProperty$Getter<V>;
    /*not mapped: */ isConst(): boolean;
    /*not mapped: */ isLateinit(): boolean;
    /*not mapped: */ getJField(): Field;
    readonly javaField: Field | null;
    readonly modality: Modality;
    readonly name: string;
    readonly parameters: KParameter[];
    readonly returnType: KType;
    readonly signature: string;
    readonly typeParameters: KTypeParameter[];
    equals(other: Object | null): boolean;
    findJavaDeclaration(): GenericDeclaration | null;
    hashCode(): number;
    toString(): string;
}