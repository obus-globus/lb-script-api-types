import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockStateModel$UnbakedRoot } from '../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel$UnbakedRoot.d.ts'
import type { BlockStateModelDispatcher$MultiPartDefinition } from '../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModelDispatcher$MultiPartDefinition.d.ts'
import type { BlockStateModelDispatcher$SimpleModelSelectors } from '../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModelDispatcher$SimpleModelSelectors.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { StateDefinition } from '../../../../../../net/minecraft/world/level/block/state/StateDefinition.d.ts'
export class BlockStateModelDispatcher extends Record {
    static CODEC: Codec<BlockStateModelDispatcher>;
    constructor(simpleModels: Optional<BlockStateModelDispatcher$SimpleModelSelectors>, multiPart: Optional<BlockStateModelDispatcher$MultiPartDefinition>)
    // private multiPart: Optional<BlockStateModelDispatcher$MultiPartDefinition>;
    // private simpleModels: Optional<BlockStateModelDispatcher$SimpleModelSelectors>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    instantiate(stateDefinition: StateDefinition<Block, BlockState>, source: () => string): JavaMap<BlockState, BlockStateModel$UnbakedRoot>;
    multiPart(): Optional<BlockStateModelDispatcher$MultiPartDefinition>;
    simpleModels(): Optional<BlockStateModelDispatcher$SimpleModelSelectors>;
    toString(): string;
}