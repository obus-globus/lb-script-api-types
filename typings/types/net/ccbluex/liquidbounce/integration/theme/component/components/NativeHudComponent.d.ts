import type { HudComponent } from '../../../../../../../net/ccbluex/liquidbounce/integration/theme/component/HudComponent.d.ts'
import type { HudComponentTweak } from '../../../../../../../net/ccbluex/liquidbounce/integration/theme/component/HudComponentTweak.d.ts'
import type { BoundingBox2f } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/BoundingBox2f.d.ts'
import type { Alignment } from '../../../../../../../net/ccbluex/liquidbounce/utils/render/Alignment.d.ts'
export abstract class NativeHudComponent extends HudComponent {
    /**
     * The browser HUD uses GUI scale 2 as its layout coordinate space and then zooms by
     * currentGuiScale / 2. Native components have to expose their editor dimensions and
     * interpret stored offsets in that same coordinate space.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e56f181853dc858654c9fc909afec417d274473d/src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/component/components/NativeHudComponent.kt#L81 | src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/component/components/NativeHudComponent.kt:81}
     */
    static WEB_HUD_BASE_SCALE: number;
    constructor(name: string, enabled: boolean, alignment: Alignment, tweaks: HudComponentTweak[], description: string)
    /**
     * @see com.mojang.blaze3d.platform.Window.guiScaledHeight
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e56f181853dc858654c9fc909afec417d274473d/src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/component/components/NativeHudComponent.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/component/components/NativeHudComponent.kt:43}
     */
    readonly guiScaledHeight: number;
    /**
     * @see com.mojang.blaze3d.platform.Window.guiScaledWidth
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e56f181853dc858654c9fc909afec417d274473d/src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/component/components/NativeHudComponent.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/component/components/NativeHudComponent.kt:38}
     */
    readonly guiScaledWidth: number;
    readonly height: number;
    readonly width: number;
    protected getGuiScaledBounds(width: number, height: number): BoundingBox2f;
}