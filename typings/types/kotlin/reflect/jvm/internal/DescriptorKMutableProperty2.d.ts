import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KMutableProperty2 } from '../../../../kotlin/reflect/KMutableProperty2.d.ts'
import type { DescriptorKMutableProperty2$Setter } from '../../../../kotlin/reflect/jvm/internal/DescriptorKMutableProperty2$Setter.d.ts'
import type { DescriptorKProperty$Companion } from '../../../../kotlin/reflect/jvm/internal/DescriptorKProperty$Companion.d.ts'
import type { DescriptorKProperty2 } from '../../../../kotlin/reflect/jvm/internal/DescriptorKProperty2.d.ts'
import type { KCallableOverriddenStorage } from '../../../../kotlin/reflect/jvm/internal/KCallableOverriddenStorage.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { PropertyDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
export class DescriptorKMutableProperty2<D extends unknown, E extends unknown, V extends unknown> extends DescriptorKProperty2<D, E, V> implements KMutableProperty2<D, E, V> {
    static Companion: DescriptorKProperty$Companion;
    constructor(container: KDeclarationContainerImpl, name: string, signature: string)
    constructor(container: KDeclarationContainerImpl, descriptor: PropertyDescriptor, overriddenStorage: KCallableOverriddenStorage)
    readonly setter: DescriptorKMutableProperty2$Setter<D, E, V>;
    set(receiver1: D, receiver2: E, value: V): void;
    shallowCopy(container: KDeclarationContainerImpl, overriddenStorage: KCallableOverriddenStorage): DescriptorKMutableProperty2<D, E, V>;
}