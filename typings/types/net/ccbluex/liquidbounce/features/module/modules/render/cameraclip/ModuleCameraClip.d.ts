import type { RangedValue } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/RangedValue.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PerspectiveEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/PerspectiveEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * CameraClip module
 *
 * Allows you to see through walls in third person view.
 *
 * @author 1zun4, sqlerrorthing
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/cameraclip/ModuleCameraClip.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/cameraclip/ModuleCameraClip.kt:43}
 */
export class ModuleCameraClip extends ClientModule {
    static INSTANCE: ModuleCameraClip;
    // private cameraDistance: RangedValue<number>;
    readonly distance: number;
    // private perspectiveHandler: EventHook<PerspectiveEvent>;
}