import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../kotlin/Lazy.d.ts'
import type { KMutableProperty1 } from '../../../../kotlin/reflect/KMutableProperty1.d.ts'
import type { DescriptorKMutableProperty1$Setter } from '../../../../kotlin/reflect/jvm/internal/DescriptorKMutableProperty1$Setter.d.ts'
import type { DescriptorKProperty$Companion } from '../../../../kotlin/reflect/jvm/internal/DescriptorKProperty$Companion.d.ts'
import type { DescriptorKProperty1 } from '../../../../kotlin/reflect/jvm/internal/DescriptorKProperty1.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { PropertyDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
export class DescriptorKMutableProperty1<T extends Object | number | string | boolean, V extends Object | number | string | boolean> extends DescriptorKProperty1<T, V> implements KMutableProperty1<T, V> {
    static Companion: DescriptorKProperty$Companion;
    constructor(container: KDeclarationContainerImpl, name: string, signature: string, boundReceiver: Object | null)
    constructor(container: KDeclarationContainerImpl, descriptor: PropertyDescriptor)
    // private _setter: Lazy<DescriptorKMutableProperty1$Setter<T, V>>;
    readonly setter: DescriptorKMutableProperty1$Setter<T, V>;
    set(receiver: T, value: V): void;
}