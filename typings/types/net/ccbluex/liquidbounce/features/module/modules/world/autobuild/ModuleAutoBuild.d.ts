import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleAutoBuild$AutoBuildMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/autobuild/ModuleAutoBuild$AutoBuildMode.d.ts'
import type { BlockPlacer } from '../../../../../../../../net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.d.ts'
/**
 * AutoBuild module
 *
 * Builds structures.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/autobuild/ModuleAutoBuild.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/autobuild/ModuleAutoBuild.kt:34}
 */
export class ModuleAutoBuild extends ClientModule {
    static INSTANCE: ModuleAutoBuild;
    // private mode: ModeValueGroup<ModuleAutoBuild$AutoBuildMode>;
    readonly placer: BlockPlacer;
    onDisabled(): void;
    onEnabled(): void;
}