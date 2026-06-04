import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KMutableProperty$Setter } from '../../../../kotlin/reflect/KMutableProperty$Setter.d.ts'
import type { DescriptorKProperty$Accessor } from '../../../../kotlin/reflect/jvm/internal/DescriptorKProperty$Accessor.d.ts'
import type { Caller } from '../../../../kotlin/reflect/jvm/internal/calls/Caller.d.ts'
import type { PropertySetterDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertySetterDescriptor.d.ts'
export abstract class DescriptorKProperty$Setter<V extends Object | number | string | boolean> extends DescriptorKProperty$Accessor<V, void> implements KMutableProperty$Setter<V> {
    constructor()
    readonly caller: Caller<Object>;
    readonly descriptor: PropertySetterDescriptor;
    readonly name: string;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}