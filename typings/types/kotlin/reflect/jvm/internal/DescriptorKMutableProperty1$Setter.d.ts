import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KMutableProperty1$Setter } from '../../../../kotlin/reflect/KMutableProperty1$Setter.d.ts'
import type { DescriptorKMutableProperty1 } from '../../../../kotlin/reflect/jvm/internal/DescriptorKMutableProperty1.d.ts'
import type { DescriptorKProperty$Setter } from '../../../../kotlin/reflect/jvm/internal/DescriptorKProperty$Setter.d.ts'
export class DescriptorKMutableProperty1$Setter<T extends unknown, V extends unknown> extends DescriptorKProperty$Setter<V> implements KMutableProperty1$Setter<T, V> {
    constructor(property: DescriptorKMutableProperty1<T, V>)
    readonly property: DescriptorKMutableProperty1<T, V>;
    invoke(receiver: T, value: V): void;
}