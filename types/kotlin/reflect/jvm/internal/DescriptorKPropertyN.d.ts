import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../kotlin/Lazy.d.ts'
import type { DescriptorKProperty } from '../../../../kotlin/reflect/jvm/internal/DescriptorKProperty.d.ts'
import type { DescriptorKProperty$Companion } from '../../../../kotlin/reflect/jvm/internal/DescriptorKProperty$Companion.d.ts'
import type { DescriptorKPropertyN$Getter } from '../../../../kotlin/reflect/jvm/internal/DescriptorKPropertyN$Getter.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { PropertyDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
export class DescriptorKPropertyN<V extends Object | number | string | boolean> extends DescriptorKProperty<V> {
    static Companion: DescriptorKProperty$Companion;
    constructor(container: KDeclarationContainerImpl, descriptor: PropertyDescriptor)
    // private _getter: Lazy<DescriptorKPropertyN$Getter<V>>;
    readonly getter: DescriptorKPropertyN$Getter<V>;
}