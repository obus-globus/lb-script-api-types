import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Tool$Rule } from '../../../../../net/minecraft/world/item/component/Tool$Rule.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class Tool extends Record {
    static CODEC: Codec<Tool>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Tool>;
    // private canDestroyBlocksInCreative: boolean;
    // private damagePerBlock: number;
    // private defaultMiningSpeed: number;
    // private rules: Tool$Rule[];
    canDestroyBlocksInCreative(): boolean;
    damagePerBlock(): number;
    defaultMiningSpeed(): number;
    equals(o: Object | null): boolean;
    getMiningSpeed(state: BlockState): number;
    hashCode(): number;
    isCorrectForDrops(state: BlockState): boolean;
    rules(): Tool$Rule[];
    toString(): string;
}