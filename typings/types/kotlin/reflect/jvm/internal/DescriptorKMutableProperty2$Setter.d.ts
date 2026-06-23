import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KMutableProperty2$Setter } from '../../../../kotlin/reflect/KMutableProperty2$Setter.d.ts'
import type { DescriptorKMutableProperty2 } from '../../../../kotlin/reflect/jvm/internal/DescriptorKMutableProperty2.d.ts'
import type { DescriptorKProperty$Setter } from '../../../../kotlin/reflect/jvm/internal/DescriptorKProperty$Setter.d.ts'
export class DescriptorKMutableProperty2$Setter<D extends unknown, E extends unknown, V extends unknown> extends DescriptorKProperty$Setter<V> implements KMutableProperty2$Setter<D, E, V> {
    constructor(property: DescriptorKMutableProperty2<D, E, V>)
    readonly property: DescriptorKMutableProperty2<D, E, V>;
    invoke(receiver1: D, receiver2: E, value: V): void;
}