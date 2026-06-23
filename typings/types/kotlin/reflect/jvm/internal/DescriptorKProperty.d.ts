import type { Field } from '../../../../java/lang/reflect/Field.d.ts'
import type { Member } from '../../../../java/lang/reflect/Member.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../kotlin/Lazy.d.ts'
import type { DescriptorKCallable } from '../../../../kotlin/reflect/jvm/internal/DescriptorKCallable.d.ts'
import type { DescriptorKProperty$Companion } from '../../../../kotlin/reflect/jvm/internal/DescriptorKProperty$Companion.d.ts'
import type { DescriptorKProperty$Getter } from '../../../../kotlin/reflect/jvm/internal/DescriptorKProperty$Getter.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { ReflectKProperty } from '../../../../kotlin/reflect/jvm/internal/ReflectKProperty.d.ts'
import type { ReflectProperties$LazySoftVal } from '../../../../kotlin/reflect/jvm/internal/ReflectProperties$LazySoftVal.d.ts'
import type { Caller } from '../../../../kotlin/reflect/jvm/internal/calls/Caller.d.ts'
import type { PropertyDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
export abstract class DescriptorKProperty<V extends unknown> extends DescriptorKCallable<V> implements ReflectKProperty<V> {
    static Companion: DescriptorKProperty$Companion;
    constructor(container: KDeclarationContainerImpl, name: string, signature: string, boundReceiver: Object | null)
    private constructor(container: KDeclarationContainerImpl, name: string, signature: string, descriptorInitialValue: PropertyDescriptor | null, rawBoundReceiver: Object | null)
    constructor(container: KDeclarationContainerImpl, descriptor: PropertyDescriptor)
    // private _descriptor: ReflectProperties$LazySoftVal<PropertyDescriptor>;
    // private _javaField: Lazy<Field>;
    readonly boundReceiver: Object | null;
    readonly caller: Caller<any>;
    readonly container: KDeclarationContainerImpl;
    readonly defaultCaller: Caller<any> | null;
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
    equals(other: Object | null): boolean;
    protected getDelegateImpl(fieldOrMethod: Member | null, receiver1: Object | null, receiver2: Object | null): Object | null;
    hashCode(): number;
    toString(): string;
}