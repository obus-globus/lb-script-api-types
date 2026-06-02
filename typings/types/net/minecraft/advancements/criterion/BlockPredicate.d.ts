import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DataComponentMatchers } from '../../../../net/minecraft/advancements/criterion/DataComponentMatchers.d.ts'
import type { NbtPredicate } from '../../../../net/minecraft/advancements/criterion/NbtPredicate.d.ts'
import type { StatePropertiesPredicate } from '../../../../net/minecraft/advancements/criterion/StatePropertiesPredicate.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { BlockInWorld } from '../../../../net/minecraft/world/level/block/state/pattern/BlockInWorld.d.ts'
export class BlockPredicate extends Record {
    static CODEC: Codec<BlockPredicate>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, BlockPredicate>;
    constructor(blocks: Optional<Holder<T>[]>, properties: Optional<StatePropertiesPredicate>, nbt: Optional<NbtPredicate>, components: DataComponentMatchers)
    // private blocks: Optional<Holder<T>[]>;
    // private components: DataComponentMatchers;
    // private nbt: Optional<NbtPredicate>;
    // private properties: Optional<StatePropertiesPredicate>;
    blocks(): Optional<Holder<T>[]>;
    components(): DataComponentMatchers;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(level: ServerLevel, pos: BlockPos): boolean;
    matches(blockInWorld: BlockInWorld): boolean;
    // private matchesState(state: BlockState): boolean;
    nbt(): Optional<NbtPredicate>;
    properties(): Optional<StatePropertiesPredicate>;
    requiresNbt(): boolean;
    toString(): string;
}