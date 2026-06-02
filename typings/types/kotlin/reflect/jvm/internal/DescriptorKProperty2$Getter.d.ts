import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KProperty2$Getter } from '../../../../kotlin/reflect/KProperty2$Getter.d.ts'
import type { DescriptorKProperty$Getter } from '../../../../kotlin/reflect/jvm/internal/DescriptorKProperty$Getter.d.ts'
import type { DescriptorKProperty2 } from '../../../../kotlin/reflect/jvm/internal/DescriptorKProperty2.d.ts'
export class DescriptorKProperty2$Getter<D extends Object | number | string | boolean, E extends Object | number | string | boolean, V extends Object | number | string | boolean> extends DescriptorKProperty$Getter<V> implements KProperty2$Getter<D, E, V> {
    constructor(property: DescriptorKProperty2<D, E, V>)
    readonly property: DescriptorKProperty2<D, E, V>;
    invoke(receiver1: D, receiver2: E): V;
}