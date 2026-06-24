import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KMutableProperty$Setter } from '../../../../kotlin/reflect/KMutableProperty$Setter.d.ts'
import type { DescriptorKCallable } from '../../../../kotlin/reflect/jvm/internal/DescriptorKCallable.d.ts'
import type { DescriptorKProperty$Accessor } from '../../../../kotlin/reflect/jvm/internal/DescriptorKProperty$Accessor.d.ts'
import type { KCallableOverriddenStorage } from '../../../../kotlin/reflect/jvm/internal/KCallableOverriddenStorage.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { Caller } from '../../../../kotlin/reflect/jvm/internal/calls/Caller.d.ts'
import type { PropertySetterDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertySetterDescriptor.d.ts'
import type { DescriptorKType } from '../../../../kotlin/reflect/jvm/internal/types/DescriptorKType.d.ts'
export abstract class DescriptorKProperty$Setter<V extends unknown> extends DescriptorKProperty$Accessor<V, void> implements KMutableProperty$Setter<V> {
    constructor()
    readonly caller: Caller<any>;
    readonly descriptor: PropertySetterDescriptor;
    readonly name: string;
    protected computeReturnType(): DescriptorKType;
    equals(other: Object | null): boolean;
    hashCode(): number;
    shallowCopy(container: KDeclarationContainerImpl, overriddenStorage: KCallableOverriddenStorage): DescriptorKCallable<void>;
    toString(): string;
}