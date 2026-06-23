import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KProperty$Getter } from '../../../../kotlin/reflect/KProperty$Getter.d.ts'
import type { DescriptorKProperty$Accessor } from '../../../../kotlin/reflect/jvm/internal/DescriptorKProperty$Accessor.d.ts'
import type { Caller } from '../../../../kotlin/reflect/jvm/internal/calls/Caller.d.ts'
import type { PropertyGetterDescriptor } from '../../../../kotlin/reflect/jvm/internal/impl/descriptors/PropertyGetterDescriptor.d.ts'
export abstract class DescriptorKProperty$Getter<V extends unknown> extends DescriptorKProperty$Accessor<V, V> implements KProperty$Getter<V> {
    constructor()
    readonly caller: Caller<any>;
    readonly descriptor: PropertyGetterDescriptor;
    readonly name: string;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}