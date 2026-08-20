import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleAutoBuild$AutoBuildMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/autobuild/ModuleAutoBuild$AutoBuildMode.d.ts'
import type { BlockPlacer } from '../../../../../../../../net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.d.ts'
/**
 * AutoBuild module
 *
 * Builds structures.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/autobuild/ModuleAutoBuild.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/autobuild/ModuleAutoBuild.kt:34}
 */
export class ModuleAutoBuild extends ClientModule {
    static INSTANCE: ModuleAutoBuild;
    // private mode: ModeValueGroup<ModuleAutoBuild$AutoBuildMode>;
    readonly placer: BlockPlacer;
    onDisabled(): void;
    onEnabled(): void;
}