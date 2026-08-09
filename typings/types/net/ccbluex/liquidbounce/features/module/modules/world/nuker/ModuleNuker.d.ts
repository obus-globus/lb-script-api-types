import type { Mode } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { NukerArea } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/nuker/area/NukerArea.d.ts'
import type { SwingMode } from '../../../../../../../../net/ccbluex/liquidbounce/utils/block/SwingMode.d.ts'
import type { Filter } from '../../../../../../../../net/ccbluex/liquidbounce/utils/collection/Filter.d.ts'
import type { BreakingProgress } from '../../../../../../../../net/ccbluex/liquidbounce/utils/render/BreakingProgress.d.ts'
import type { BreakingProgress$Provider } from '../../../../../../../../net/ccbluex/liquidbounce/utils/render/BreakingProgress$Provider.d.ts'
import type { BreakingProgress$Provider$Default } from '../../../../../../../../net/ccbluex/liquidbounce/utils/render/BreakingProgress$Provider$Default.d.ts'
import type { BreakingProgressRenderer } from '../../../../../../../../net/ccbluex/liquidbounce/utils/render/BreakingProgressRenderer.d.ts'
import type { PlacementRenderer } from '../../../../../../../../net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderer.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Block } from '../../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
/**
 * Nuker module
 *
 * Destroys blocks around you.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8fc1f12b34c50f483c3b3446c45e8bc1de58e20c/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/nuker/ModuleNuker.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/nuker/ModuleNuker.kt:41}
 */
export class ModuleNuker extends ClientModule implements BreakingProgress$Provider {
    static Default: BreakingProgress$Provider$Default;
    static INSTANCE: ModuleNuker;
    readonly areaMode: ModeValueGroup<NukerArea>;
    // private blocks: Block[];
    // private /*not mapped: */ getBlocks(): Block[];
    // private filter: Filter;
    // private /*not mapped: */ getFilter(): Filter;
    readonly ignoreOpenInventory: boolean;
    readonly mode: ModeValueGroup<Mode>;
    // private progressRenderer: BreakingProgressRenderer;
    readonly swingMode: SwingMode;
    // private targetRenderer: PlacementRenderer;
    /**
     * The last target block that was hit. Does not mean it was destroyed.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8fc1f12b34c50f483c3b3446c45e8bc1de58e20c/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/nuker/ModuleNuker.kt#L72 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/nuker/ModuleNuker.kt:72}
     */
    wasTarget: BlockPos | null;
    breakingProgress(): BreakingProgress | null;
    isValid(blockState: BlockState): boolean;
    onDisabled(): void;
}