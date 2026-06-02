import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KProperty$Getter } from '../../../../kotlin/reflect/KProperty$Getter.d.ts'
import type { DescriptorKProperty$Accessor } from '../../../../kotlin/reflect/jvm/internal/DescriptorKProperty$Accessor.d.ts'
import type { Caller } from '../../../../kotlin/reflect/jvm/internal/calls/Caller.d.ts'
export abstract class DescriptorKProperty$Getter<V extends Object | number | string | boolean> extends DescriptorKProperty$Accessor<V, V> implements KProperty$Getter<V> {
    constructor()
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}