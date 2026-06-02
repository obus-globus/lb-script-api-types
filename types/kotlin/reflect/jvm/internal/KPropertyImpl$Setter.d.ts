import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KMutableProperty$Setter } from '../../../../kotlin/reflect/KMutableProperty$Setter.d.ts'
import type { KPropertyImpl$Accessor } from '../../../../kotlin/reflect/jvm/internal/KPropertyImpl$Accessor.d.ts'
import type { Caller } from '../../../../kotlin/reflect/jvm/internal/calls/Caller.d.ts'
export abstract class KPropertyImpl$Setter<V extends Object | number | string | boolean> extends KPropertyImpl$Accessor<V, void> implements KMutableProperty$Setter<V> {
    constructor()
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}