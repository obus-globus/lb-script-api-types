import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder$Reference } from '../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { TypedDataComponent } from '../../../../net/minecraft/core/component/TypedDataComponent.d.ts'
export class DataComponentInitializers$BakedEntry<T extends unknown> extends Record {
    constructor(element: Holder$Reference<T>, components: TypedDataComponent<Object>[])
    // private components: TypedDataComponent<Object>[];
    // private element: Holder$Reference<T>;
    apply(): void;
    components(): TypedDataComponent<Object>[];
    element(): Holder$Reference<T>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}