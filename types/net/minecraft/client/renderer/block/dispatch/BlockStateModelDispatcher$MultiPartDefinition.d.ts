import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MultiPartModel$Unbaked } from '../../../../../../net/minecraft/client/renderer/block/dispatch/multipart/MultiPartModel$Unbaked.d.ts'
import type { Selector } from '../../../../../../net/minecraft/client/renderer/block/dispatch/multipart/Selector.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { StateDefinition } from '../../../../../../net/minecraft/world/level/block/state/StateDefinition.d.ts'
export class BlockStateModelDispatcher$MultiPartDefinition extends Record {
    static CODEC: Codec<BlockStateModelDispatcher$MultiPartDefinition>;
    constructor(selectors: Selector[])
    // private selectors: Selector[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    instantiate(stateDefinition: StateDefinition<Block, BlockState>): MultiPartModel$Unbaked;
    selectors(): Selector[];
    toString(): string;
}