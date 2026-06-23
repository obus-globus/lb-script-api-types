import type { Member } from '../../../../java/lang/reflect/Member.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../kotlin/Lazy.d.ts'
import type { KProperty1 } from '../../../../kotlin/reflect/KProperty1.d.ts'
import type { DescriptorKProperty } from '../../../../kotlin/reflect/jvm/internal/DescriptorKProperty.d.ts'
import type { DescriptorKProperty$Companion } from '../../../../kotlin/reflect/jvm/internal/DescriptorKProperty$Companion.d.ts'
import type { DescriptorKProperty1$Getter } from '../../../../kotlin/reflect/jvm/internal/DescriptorKProperty1$Getter.d.ts'
import type { KDeclarationContainerImpl } from '../../../../kotlin/reflect/jvm/internal/KDeclarationContainerImpl.d.ts'
import type { PropertyDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyDescriptor.d.ts'
export class DescriptorKProperty1<T extends unknown, V extends unknown> extends DescriptorKProperty<V> implements KProperty1<T, V> {
    static Companion: DescriptorKProperty$Companion;
    constructor(container: KDeclarationContainerImpl, name: string, signature: string, boundReceiver: Object | null)
    constructor(container: KDeclarationContainerImpl, descriptor: PropertyDescriptor)
    // private _getter: Lazy<DescriptorKProperty1$Getter<T, V>>;
    // private delegateSource: Lazy<Member>;
    readonly getter: DescriptorKProperty1$Getter<T, V>;
    get(receiver: T): V;
    getDelegate(receiver: T): Object | null;
    invoke(receiver: T): V;
}