import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DescriptorKProperty } from '../../../../kotlin/reflect/jvm/internal/DescriptorKProperty.d.ts'
import type { DescriptorKProperty$Companion } from '../../../../kotlin/reflect/jvm/internal/DescriptorKProperty$Companion.d.ts'
import type { DescriptorKPropertyN$Getter } from '../../../../kotlin/reflect/jvm/internal/DescriptorKPropertyN$Getter.d.ts'
import type { KCallableOverriddenStorage } from '../../../../kotlin/reflect/jvm/internal/KCallableOverriddenStorage.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { PropertyDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
export class DescriptorKPropertyN<V extends unknown> extends DescriptorKProperty<V> {
    static Companion: DescriptorKProperty$Companion;
    constructor(container: KDeclarationContainerImpl, descriptor: PropertyDescriptor, overriddenStorage: KCallableOverriddenStorage)
    readonly getter: DescriptorKPropertyN$Getter<V>;
    shallowCopy(container: KDeclarationContainerImpl, overriddenStorage: KCallableOverriddenStorage): DescriptorKPropertyN<V>;
}