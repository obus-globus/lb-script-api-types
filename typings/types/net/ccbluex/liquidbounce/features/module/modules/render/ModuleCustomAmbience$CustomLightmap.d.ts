import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { ModuleCustomAmbience$CustomLightmap$EditorMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleCustomAmbience$CustomLightmap$EditorMode.d.ts'
/**
 * @see net.ccbluex.liquidbounce.injection.mixins.minecraft.render.MixinLightmap
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleCustomAmbience.kt#L95 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleCustomAmbience.kt:95}
 */
export class ModuleCustomAmbience$CustomLightmap extends ToggleableValueGroup {
    static INSTANCE: ModuleCustomAmbience$CustomLightmap;
    readonly mode: ModeValueGroup<ModuleCustomAmbience$CustomLightmap$EditorMode>;
}