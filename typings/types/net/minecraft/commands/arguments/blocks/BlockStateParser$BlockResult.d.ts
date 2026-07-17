import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
import type { CompoundTag } from '../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Property } from '../../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
export class BlockStateParser$BlockResult extends Record {
    constructor(blockState: BlockState, properties: JavaMap<Property<any>, Comparable<Object>>, nbt: CompoundTag)
    // private blockState: BlockState;
    // private nbt: CompoundTag;
    // private properties: JavaMap<Property<any>, Comparable<Object>>;
    blockState(): BlockState;
    equals(o: Object | null): boolean;
    hashCode(): number;
    nbt(): CompoundTag;
    properties(): JavaMap<Property<any>, Comparable<Object>>;
    toString(): string;
}