import type { Field } from '../../../../java/lang/reflect/Field.d.ts'
import type { GenericDeclaration } from '../../../../java/lang/reflect/GenericDeclaration.d.ts'
import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { KParameter } from '../../../../kotlin/reflect/KParameter.d.ts'
import type { KProperty0 } from '../../../../kotlin/reflect/KProperty0.d.ts'
import type { KProperty0$Getter } from '../../../../kotlin/reflect/KProperty0$Getter.d.ts'
import type { KType } from '../../../../kotlin/reflect/KType.d.ts'
import type { KTypeParameter } from '../../../../kotlin/reflect/KTypeParameter.d.ts'
import type { KVisibility } from '../../../../kotlin/reflect/KVisibility.d.ts'
import type { JavaEnumEntriesKProperty$Companion } from '../../../../kotlin/reflect/jvm/internal/JavaEnumEntriesKProperty$Companion.d.ts'
import type { KCallableOverriddenStorage } from '../../../../kotlin/reflect/jvm/internal/KCallableOverriddenStorage.d.ts'
import type { KClassImpl } from '../../../../kotlin/reflect/jvm/internal/KClassImpl.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { ReflectKCallable } from '../../../../kotlin/reflect/jvm/internal/ReflectKCallable.d.ts'
import type { ReflectKCallableImpl } from '../../../../kotlin/reflect/jvm/internal/ReflectKCallableImpl.d.ts'
import type { ReflectKProperty } from '../../../../kotlin/reflect/jvm/internal/ReflectKProperty.d.ts'
import type { Caller } from '../../../../kotlin/reflect/jvm/internal/calls/Caller.d.ts'
import type { Modality } from '../../../../kotlin/reflect/jvm/internal/impl/km/Modality.d.ts'
export class JavaEnumEntriesKProperty extends ReflectKCallableImpl<(Object | null)[]> implements KProperty0<(Object | null)[]>, ReflectKProperty<(Object | null)[]> {
    static Companion: JavaEnumEntriesKProperty$Companion;
    constructor(enumClass: KClassImpl<Enum<any>>)
    readonly allParameters: KParameter[];
    readonly annotations: Annotation[];
    readonly caller: Caller<any>;
    readonly callerWithDefaults: Caller<any> | null;
    readonly container: KDeclarationContainerImpl;
    // private enumClass: KClassImpl<Enum<any>>;
    readonly getter: KProperty0$Getter<(Object | null)[]>;
    /*not mapped: */ isConst(): boolean;
    /*not mapped: */ isLateinit(): boolean;
    /*not mapped: */ isPackagePrivate(): boolean;
    /*not mapped: */ isSuspend(): boolean;
    readonly javaField: Field | null;
    readonly modality: Modality;
    readonly name: string;
    readonly parameters: KParameter[];
    readonly rawBoundReceiver: Object | null;
    // private result: (Object | null)[];
    readonly returnType: KType;
    readonly signature: string;
    readonly typeParameters: KTypeParameter[];
    readonly visibility: KVisibility;
    equals(other: Object | null): boolean;
    findJavaDeclaration(): GenericDeclaration | null;
    get(): (Object | null)[];
    getDelegate(): Object | null;
    hashCode(): number;
    invoke(): (Object | null)[];
    shallowCopy(container: KDeclarationContainerImpl, overriddenStorage: KCallableOverriddenStorage): ReflectKCallable<(Object | null)[]>;
    toString(): string;
}