import type { Object } from '../../../../java/lang/Object.d.ts'
import type { KProperty$Getter } from '../../../../kotlin/reflect/KProperty$Getter.d.ts'
import type { KPropertyImpl$Accessor } from '../../../../kotlin/reflect/jvm/internal/KPropertyImpl$Accessor.d.ts'
import type { Caller } from '../../../../kotlin/reflect/jvm/internal/calls/Caller.d.ts'
export abstract class KPropertyImpl$Getter<V extends Object | number | string | boolean> extends KPropertyImpl$Accessor<V, V> implements KProperty$Getter<V> {
    constructor()
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}