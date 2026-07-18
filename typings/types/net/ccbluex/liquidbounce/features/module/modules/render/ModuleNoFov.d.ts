import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleNoFov$FovMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleNoFov$FovMode.d.ts'
/**
 * NoFOV module
 *
 * Changes FOV value.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleNoFov.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleNoFov.kt:31}
 */
export class ModuleNoFov extends ClientModule {
    static INSTANCE: ModuleNoFov;
    readonly mode: ModeValueGroup<ModuleNoFov$FovMode>;
    getFov(original: number): number;
    getFovMultiplier(original: number): number;
}