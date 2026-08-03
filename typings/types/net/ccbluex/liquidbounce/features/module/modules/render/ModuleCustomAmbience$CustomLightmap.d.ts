import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { ModuleCustomAmbience$CustomLightmap$EditorMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleCustomAmbience$CustomLightmap$EditorMode.d.ts'
/**
 * @see net.ccbluex.liquidbounce.injection.mixins.minecraft.render.MixinLightmap
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleCustomAmbience.kt#L95 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleCustomAmbience.kt:95}
 */
export class ModuleCustomAmbience$CustomLightmap extends ToggleableValueGroup {
    static INSTANCE: ModuleCustomAmbience$CustomLightmap;
    readonly mode: ModeValueGroup<ModuleCustomAmbience$CustomLightmap$EditorMode>;
}