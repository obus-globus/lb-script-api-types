import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockStateModel$UnbakedRoot } from '../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel$UnbakedRoot.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class BlockStateModelLoader$LoadedModels extends Record {
    constructor(models: JavaMap<BlockState, BlockStateModel$UnbakedRoot>)
    // private models: JavaMap<BlockState, BlockStateModel$UnbakedRoot>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    models(): JavaMap<BlockState, BlockStateModel$UnbakedRoot>;
    toString(): string;
}