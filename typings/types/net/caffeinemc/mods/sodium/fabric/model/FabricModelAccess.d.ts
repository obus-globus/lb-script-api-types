import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ColorProvider } from '../../../../../../net/caffeinemc/mods/sodium/client/model/color/ColorProvider.d.ts'
import type { ListStorage } from '../../../../../../net/caffeinemc/mods/sodium/client/render/helper/ListStorage.d.ts'
import type { PlatformModelAccess } from '../../../../../../net/caffeinemc/mods/sodium/client/services/PlatformModelAccess.d.ts'
import type { SodiumModelData } from '../../../../../../net/caffeinemc/mods/sodium/client/services/SodiumModelData.d.ts'
import type { SodiumModelDataContainer } from '../../../../../../net/caffeinemc/mods/sodium/client/services/SodiumModelDataContainer.d.ts'
import type { BlockAndTintGetter } from '../../../../../../net/minecraft/client/renderer/block/BlockAndTintGetter.d.ts'
import type { BlockStateModel } from '../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel.d.ts'
import type { BlockStateModelPart } from '../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModelPart.d.ts'
import type { BakedQuad } from '../../../../../../net/minecraft/client/resources/model/geometry/BakedQuad.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { SectionPos } from '../../../../../../net/minecraft/core/SectionPos.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { Level } from '../../../../../../net/minecraft/world/level/Level.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class FabricModelAccess extends Object implements PlatformModelAccess {
    static INSTANCE: PlatformModelAccess;
    static getInstance(): PlatformModelAccess;
    constructor()
    collectPartsOf(arg0: BlockStateModel, arg1: BlockAndTintGetter, arg2: BlockPos, arg3: BlockState, arg4: RandomSource, arg5: ListStorage): BlockStateModelPart[];
    createMutableColorProvider(): ColorProvider<BlockState>;
    getEmptyModelData(): SodiumModelData;
    getModelDataContainer(arg0: Level, arg1: SectionPos): SodiumModelDataContainer;
    getQuads(arg0: BlockAndTintGetter, arg1: BlockPos, arg2: BlockStateModelPart, arg3: BlockState, arg4: Direction, arg5: RandomSource): BakedQuad[];
}