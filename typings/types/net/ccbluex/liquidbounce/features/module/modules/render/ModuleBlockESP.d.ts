import type { Function3 } from '../../../../../../../kotlin/jvm/functions/Function3.d.ts'
import type { Pair } from '../../../../../../../kotlin/Pair.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleBlockESP$BlockMergeKey } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleBlockESP$BlockMergeKey.d.ts'
import type { ModuleBlockESP$Mode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleBlockESP$Mode.d.ts'
import type { GenericColorMode } from '../../../../../../../net/ccbluex/liquidbounce/render/GenericColorMode.d.ts'
import type { DistanceFadeUniformValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/render/utils/DistanceFadeUniformValueGroup.d.ts'
import type { PositionedVoxelShape } from '../../../../../../../net/ccbluex/liquidbounce/utils/math/PositionedVoxelShape.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { VoxelShape } from '../../../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
/**
 * BlockESP module
 *
 * Allows you to see selected blocks through walls.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleBlockESP.kt#L55 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleBlockESP.kt:55}
 */
export class ModuleBlockESP extends ClientModule {
    static INSTANCE: ModuleBlockESP;
    // private colorMode: ModeValueGroup<GenericColorMode<Pair<BlockPos, BlockState>>>;
    // private distanceFade: DistanceFadeUniformValueGroup;
    // private mergeAdjacent: boolean;
    // private /*not mapped: */ getMergeAdjacent(): boolean;
    // private modes: ModeValueGroup<ModuleBlockESP$Mode>;
    // private targets: Block[];
    // private /*not mapped: */ getTargets(): Block[];
    // private collectBlockShapes(colorMode: GenericColorMode<Pair<BlockPos, BlockState>>, useColor: boolean): PositionedVoxelShape<ModuleBlockESP$BlockMergeKey>[];
    // private forEachTrackedBlocks(block: Function3<BlockPos, BlockState, VoxelShape, void>): void;
    // private markDirtyForModes(): void;
    onDisabled(): void;
    onEnabled(): void;
}