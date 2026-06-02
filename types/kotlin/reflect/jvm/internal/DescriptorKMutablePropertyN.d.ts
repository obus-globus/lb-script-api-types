import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../kotlin/Lazy.d.ts'
import type { KMutableProperty } from '../../../../kotlin/reflect/KMutableProperty.d.ts'
import type { DescriptorKMutablePropertyN$Setter } from '../../../../kotlin/reflect/jvm/internal/DescriptorKMutablePropertyN$Setter.d.ts'
import type { DescriptorKProperty$Companion } from '../../../../kotlin/reflect/jvm/internal/DescriptorKProperty$Companion.d.ts'
import type { DescriptorKPropertyN } from '../../../../kotlin/reflect/jvm/internal/DescriptorKPropertyN.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { PropertyDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
export class DescriptorKMutablePropertyN<V extends Object | number | string | boolean> extends DescriptorKPropertyN<V> implements KMutableProperty<V> {
    static Companion: DescriptorKProperty$Companion;
    constructor(container: KDeclarationContainerImpl, descriptor: PropertyDescriptor)
    // private _setter: Lazy<DescriptorKMutablePropertyN$Setter<V>>;
    readonly setter: DescriptorKMutablePropertyN$Setter<V>;
}