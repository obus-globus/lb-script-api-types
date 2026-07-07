import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleNoFov$FovMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleNoFov$FovMode.d.ts'
/**
 * NoFOV module
 *
 * Changes FOV value.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fc8688f1fc8b0c8dfed8d3dc547a47ad55374af5/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleNoFov.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleNoFov.kt:31}
 */
export class ModuleNoFov extends ClientModule {
    static INSTANCE: ModuleNoFov;
    readonly mode: ModeValueGroup<ModuleNoFov$FovMode>;
    getFov(original: number): number;
    getFovMultiplier(original: number): number;
}