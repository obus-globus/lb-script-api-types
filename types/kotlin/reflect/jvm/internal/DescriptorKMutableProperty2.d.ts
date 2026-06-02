import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../kotlin/Lazy.d.ts'
import type { KMutableProperty2 } from '../../../../kotlin/reflect/KMutableProperty2.d.ts'
import type { DescriptorKMutableProperty2$Setter } from '../../../../kotlin/reflect/jvm/internal/DescriptorKMutableProperty2$Setter.d.ts'
import type { DescriptorKProperty$Companion } from '../../../../kotlin/reflect/jvm/internal/DescriptorKProperty$Companion.d.ts'
import type { DescriptorKProperty2 } from '../../../../kotlin/reflect/jvm/internal/DescriptorKProperty2.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { PropertyDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
export class DescriptorKMutableProperty2<D extends Object | number | string | boolean, E extends Object | number | string | boolean, V extends Object | number | string | boolean> extends DescriptorKProperty2<D, E, V> implements KMutableProperty2<D, E, V> {
    static Companion: DescriptorKProperty$Companion;
    constructor(container: KDeclarationContainerImpl, name: string, signature: string)
    constructor(container: KDeclarationContainerImpl, descriptor: PropertyDescriptor)
    // private _setter: Lazy<DescriptorKMutableProperty2$Setter<D, E, V>>;
    readonly setter: DescriptorKMutableProperty2$Setter<D, E, V>;
    set(receiver1: D, receiver2: E, value: V): void;
}