import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleAutoBuild$AutoBuildMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/autobuild/ModuleAutoBuild$AutoBuildMode.d.ts'
import type { BlockPlacer } from '../../../../../../../../net/ccbluex/liquidbounce/utils/block/placer/BlockPlacer.d.ts'
/**
 * AutoBuild module
 *
 * Builds structures.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/autobuild/ModuleAutoBuild.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/autobuild/ModuleAutoBuild.kt:34}
 */
export class ModuleAutoBuild extends ClientModule {
    static INSTANCE: ModuleAutoBuild;
    // private mode: ModeValueGroup<ModuleAutoBuild$AutoBuildMode>;
    readonly placer: BlockPlacer;
    onDisabled(): void;
    onEnabled(): void;
}