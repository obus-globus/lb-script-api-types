import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KMutableProperty } from '../../../../kotlin/reflect/KMutableProperty.d.ts'
import type { DescriptorKMutablePropertyN$Setter } from '../../../../kotlin/reflect/jvm/internal/DescriptorKMutablePropertyN$Setter.d.ts'
import type { DescriptorKProperty$Companion } from '../../../../kotlin/reflect/jvm/internal/DescriptorKProperty$Companion.d.ts'
import type { DescriptorKPropertyN } from '../../../../kotlin/reflect/jvm/internal/DescriptorKPropertyN.d.ts'
import type { KCallableOverriddenStorage } from '../../../../kotlin/reflect/jvm/internal/KCallableOverriddenStorage.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { PropertyDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
export class DescriptorKMutablePropertyN<V extends unknown> extends DescriptorKPropertyN<V> implements KMutableProperty<V> {
    static Companion: DescriptorKProperty$Companion;
    constructor(container: KDeclarationContainerImpl, descriptor: PropertyDescriptor, overriddenStorage: KCallableOverriddenStorage)
    readonly setter: DescriptorKMutablePropertyN$Setter<V>;
    shallowCopy(container: KDeclarationContainerImpl, overriddenStorage: KCallableOverriddenStorage): DescriptorKMutablePropertyN<V>;
}