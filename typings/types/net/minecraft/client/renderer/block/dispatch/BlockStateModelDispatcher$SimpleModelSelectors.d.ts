import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { BiConsumer } from '../../../../../../java/util/function/BiConsumer.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockStateModel$Unbaked } from '../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel$Unbaked.d.ts'
import type { BlockStateModel$UnbakedRoot } from '../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel$UnbakedRoot.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { StateDefinition } from '../../../../../../net/minecraft/world/level/block/state/StateDefinition.d.ts'
export class BlockStateModelDispatcher$SimpleModelSelectors extends Record {
    static CODEC: Codec<BlockStateModelDispatcher$SimpleModelSelectors>;
    constructor(models: JavaMap<string, BlockStateModel$Unbaked>)
    // private models: JavaMap<string, BlockStateModel$Unbaked>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    instantiate(stateDefinition: StateDefinition<Block, BlockState>, source: () => string, output: (param0: BlockState, param1: BlockStateModel$UnbakedRoot) => void): void;
    models(): JavaMap<string, BlockStateModel$Unbaked>;
    toString(): string;
}