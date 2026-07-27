import type { Mode } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { NukerArea } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/nuker/area/NukerArea.d.ts'
import type { SwingMode } from '../../../../../../../../net/ccbluex/liquidbounce/utils/block/SwingMode.d.ts'
import type { Filter } from '../../../../../../../../net/ccbluex/liquidbounce/utils/collection/Filter.d.ts'
import type { PlacementRenderer } from '../../../../../../../../net/ccbluex/liquidbounce/utils/render/placement/PlacementRenderer.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Block } from '../../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
/**
 * Nuker module
 *
 * Destroys blocks around you.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/nuker/ModuleNuker.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/nuker/ModuleNuker.kt:39}
 */
export class ModuleNuker extends ClientModule {
    static INSTANCE: ModuleNuker;
    readonly areaMode: ModeValueGroup<NukerArea>;
    // private blocks: Block[];
    // private /*not mapped: */ getBlocks(): Block[];
    // private filter: Filter;
    // private /*not mapped: */ getFilter(): Filter;
    readonly ignoreOpenInventory: boolean;
    readonly mode: ModeValueGroup<Mode>;
    readonly swingMode: SwingMode;
    // private targetRenderer: PlacementRenderer;
    /**
     * The last target block that was hit. Does not mean it was destroyed.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/nuker/ModuleNuker.kt#L61 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/nuker/ModuleNuker.kt:61}
     */
    wasTarget: BlockPos | null;
    isValid(blockState: BlockState): boolean;
    onDisabled(): void;
}