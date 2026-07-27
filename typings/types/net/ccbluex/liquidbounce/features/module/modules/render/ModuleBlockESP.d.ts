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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleBlockESP.kt#L61 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleBlockESP.kt:61}
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
    // private forEachTrackedBlocks(block: (param0: BlockPos, param1: BlockState, param2: VoxelShape) => void): void;
    // private markDirtyForModes(): void;
    onDisabled(): void;
    onEnabled(): void;
}