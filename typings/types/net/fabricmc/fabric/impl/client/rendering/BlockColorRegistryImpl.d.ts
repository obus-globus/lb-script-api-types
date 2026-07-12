import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockTintsFactory } from '../../../../../../net/fabricmc/fabric/api/client/rendering/v1/BlockTintsFactory.d.ts'
import type { BlockColors } from '../../../../../../net/minecraft/client/color/block/BlockColors.d.ts'
import type { BlockTintSource } from '../../../../../../net/minecraft/client/color/block/BlockTintSource.d.ts'
import type { BlockAndTintGetter } from '../../../../../../net/minecraft/client/renderer/block/BlockAndTintGetter.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class BlockColorRegistryImpl extends Object {
    static getFactory(paramarg0: BlockState): (param0: BlockState, param1: BlockAndTintGetter, param2: BlockPos, param3: (Object | null)[]) => void;
    static initialize(paramarg0: BlockColors): void;
    static register(paramarg0: BlockTintSource[], ...paramarg1: (Object | null)[]): void;
    static register(paramarg0: (param0: BlockState, param1: BlockAndTintGetter, param2: BlockPos, param3: (Object | null)[]) => void, paramarg1: (Object | null)[]): void;
    constructor()
}