import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TypedDataComponent } from '../../../../net/minecraft/core/component/TypedDataComponent.d.ts'
import type { CompoundTag } from '../../../../net/minecraft/nbt/CompoundTag.d.ts'
export class CloneCommands$CloneBlockEntityInfo extends Record {
    private constructor(tag: CompoundTag, components: TypedDataComponent<Object>[])
    // private components: TypedDataComponent<Object>[];
    // private tag: CompoundTag;
    components(): TypedDataComponent<Object>[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    tag(): CompoundTag;
    toString(): string;
}