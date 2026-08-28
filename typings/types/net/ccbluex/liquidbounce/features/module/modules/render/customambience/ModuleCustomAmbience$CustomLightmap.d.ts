import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { ModuleCustomAmbience$CustomLightmap$EditorMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/customambience/ModuleCustomAmbience$CustomLightmap$EditorMode.d.ts'
/**
 * @see net.ccbluex.liquidbounce.injection.mixins.minecraft.render.MixinLightmap
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/customambience/ModuleCustomAmbience.kt#L96 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/customambience/ModuleCustomAmbience.kt:96}
 */
export class ModuleCustomAmbience$CustomLightmap extends ToggleableValueGroup {
    static INSTANCE: ModuleCustomAmbience$CustomLightmap;
    readonly mode: ModeValueGroup<ModuleCustomAmbience$CustomLightmap$EditorMode>;
}