import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../kotlin/Lazy.d.ts'
import type { KMutableProperty0 } from '../../../../kotlin/reflect/KMutableProperty0.d.ts'
import type { DescriptorKMutableProperty0$Setter } from '../../../../kotlin/reflect/jvm/internal/DescriptorKMutableProperty0$Setter.d.ts'
import type { DescriptorKProperty$Companion } from '../../../../kotlin/reflect/jvm/internal/DescriptorKProperty$Companion.d.ts'
import type { DescriptorKProperty0 } from '../../../../kotlin/reflect/jvm/internal/DescriptorKProperty0.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { PropertyDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
export class DescriptorKMutableProperty0<V extends unknown> extends DescriptorKProperty0<V> implements KMutableProperty0<V> {
    static Companion: DescriptorKProperty$Companion;
    constructor(container: KDeclarationContainerImpl, name: string, signature: string, boundReceiver: Object | null)
    constructor(container: KDeclarationContainerImpl, descriptor: PropertyDescriptor)
    // private _setter: Lazy<DescriptorKMutableProperty0$Setter<V>>;
    readonly setter: DescriptorKMutableProperty0$Setter<V>;
    set(value: V): void;
}