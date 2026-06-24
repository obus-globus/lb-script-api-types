import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockPredicate } from '../../../../net/minecraft/advancements/predicates/BlockPredicate.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { BlockInWorld } from '../../../../net/minecraft/world/level/block/state/pattern/BlockInWorld.d.ts'
export class AdventureModePredicate extends Object {
    static CAN_BREAK_HEADER: Component;
    static CAN_PLACE_HEADER: Component;
    static CODEC: Codec<AdventureModePredicate>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, AdventureModePredicate>;
    constructor(predicates: BlockPredicate[])
    // private cachedTooltip: Component[];
    // private checksBlockEntity: boolean;
    // private lastCheckedBlock: BlockInWorld;
    // private lastResult: boolean;
    // private predicates: BlockPredicate[];
    addToTooltip(consumer: (param0: Component) => void): void;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    test(blockInWorld: BlockInWorld): boolean;
    toString(): string;
    // private tooltip(): Component[];
}