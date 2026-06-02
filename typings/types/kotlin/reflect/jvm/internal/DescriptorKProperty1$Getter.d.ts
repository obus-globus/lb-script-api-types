import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KProperty1$Getter } from '../../../../kotlin/reflect/KProperty1$Getter.d.ts'
import type { DescriptorKProperty$Getter } from '../../../../kotlin/reflect/jvm/internal/DescriptorKProperty$Getter.d.ts'
import type { DescriptorKProperty1 } from '../../../../kotlin/reflect/jvm/internal/DescriptorKProperty1.d.ts'
export class DescriptorKProperty1$Getter<T extends Object | number | string | boolean, V extends Object | number | string | boolean> extends DescriptorKProperty$Getter<V> implements KProperty1$Getter<T, V> {
    constructor(property: DescriptorKProperty1<T, V>)
    readonly property: DescriptorKProperty1<T, V>;
    invoke(receiver: T): V;
}