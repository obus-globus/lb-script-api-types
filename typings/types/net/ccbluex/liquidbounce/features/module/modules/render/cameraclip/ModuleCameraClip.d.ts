import type { RangedValue } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/RangedValue.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * CameraClip module
 *
 * Allows you to see through walls in third person view.
 *
 * @author 1zun4, sqlerrorthing
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/cameraclip/ModuleCameraClip.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/cameraclip/ModuleCameraClip.kt:34}
 */
export class ModuleCameraClip extends ClientModule {
    static INSTANCE: ModuleCameraClip;
    // private cameraDistance: RangedValue<number>;
    readonly distance: number;
}