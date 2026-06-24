import type { Field } from '../../../../java/lang/reflect/Field.d.ts'
import type { GenericDeclaration } from '../../../../java/lang/reflect/GenericDeclaration.d.ts'
import type { Member } from '../../../../java/lang/reflect/Member.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DescriptorKCallable } from '../../../../kotlin/reflect/jvm/internal/DescriptorKCallable.d.ts'
import type { DescriptorKProperty$Companion } from '../../../../kotlin/reflect/jvm/internal/DescriptorKProperty$Companion.d.ts'
import type { DescriptorKProperty$Getter } from '../../../../kotlin/reflect/jvm/internal/DescriptorKProperty$Getter.d.ts'
import type { KCallableOverriddenStorage } from '../../../../kotlin/reflect/jvm/internal/KCallableOverriddenStorage.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { ReflectKProperty } from '../../../../kotlin/reflect/jvm/internal/ReflectKProperty.d.ts'
import type { Caller } from '../../../../kotlin/reflect/jvm/internal/calls/Caller.d.ts'
import type { PropertyDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
import type { DescriptorKType } from '../../../../kotlin/reflect/jvm/internal/types/DescriptorKType.d.ts'
export abstract class DescriptorKProperty<V extends unknown> extends DescriptorKCallable<V> implements ReflectKProperty<V> {
    static Companion: DescriptorKProperty$Companion;
    constructor(container: KDeclarationContainerImpl, name: string, signature: string, boundReceiver: Object | null)
    private constructor(container: KDeclarationContainerImpl, name: string, signature: string, descriptorInitialValue: PropertyDescriptor | null, rawBoundReceiver: Object | null, overriddenStorage: KCallableOverriddenStorage)
    constructor(container: KDeclarationContainerImpl, descriptor: PropertyDescriptor, overriddenStorage: KCallableOverriddenStorage)
    readonly caller: Caller<any>;
    readonly callerWithDefaults: Caller<any> | null;
    readonly container: KDeclarationContainerImpl;
    readonly descriptor: PropertyDescriptor;
    readonly getter: DescriptorKProperty$Getter<V>;
    /*not mapped: */ isConst(): boolean;
    /*not mapped: */ isLateinit(): boolean;
    /*not mapped: */ isSuspend(): boolean;
    readonly javaField: Field | null;
    readonly name: string;
    readonly rawBoundReceiver: Object | null;
    readonly signature: string;
    protected computeDelegateSource(): Member | null;
    protected computeReturnType(): DescriptorKType;
    equals(other: Object | null): boolean;
    findJavaDeclaration(): GenericDeclaration | null;
    hashCode(): number;
    toString(): string;
}