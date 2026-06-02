import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DataComponentType } from '../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { TypedDataComponent } from '../../../../net/minecraft/core/component/TypedDataComponent.d.ts'
export class DataComponentPatch$SplitResult extends Record {
    static EMPTY: DataComponentPatch$SplitResult;
    constructor(added: TypedDataComponent<Object>[], removed: DataComponentType<Object>[])
    // private added: TypedDataComponent<Object>[];
    // private removed: DataComponentType<Object>[];
    added(): TypedDataComponent<Object>[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    removed(): DataComponentType<Object>[];
    toString(): string;
}