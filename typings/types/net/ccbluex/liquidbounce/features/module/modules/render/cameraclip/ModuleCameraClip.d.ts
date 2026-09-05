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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/cameraclip/ModuleCameraClip.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/cameraclip/ModuleCameraClip.kt:43}
 */
export class ModuleCameraClip extends ClientModule {
    static INSTANCE: ModuleCameraClip;
    // private cameraDistance: RangedValue<number>;
    readonly distance: number;
    // private perspectiveHandler: EventHook<PerspectiveEvent>;
}