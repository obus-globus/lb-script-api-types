import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PlayerStrideEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerStrideEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleAnimations$AnimationMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleAnimations$AnimationMode.d.ts'
/**
 * Animations module
 *
 * This module affects item animations. It allows the user to customize the animation.
 * If you are looking forward to contribute to this module, please name your animation with a reasonable name.
 * Do not name them after clients or yourself.
 * Please credit from where you got the animation from and make sure they are willing to contribute.
 * If they are not willing to contribute, please do not add the animation to this module.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleAnimations.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleAnimations.kt:44}
 */
export class ModuleAnimations extends ClientModule {
    static INSTANCE: ModuleAnimations;
    // private airWalker: boolean;
    // private /*not mapped: */ getAirWalker(): boolean;
    /**
     * A choice that allows the user to choose the animation that will be used during the blocking
     * of a sword.
     * This choice is only used when the {@link ModuleSwordBlock} module is enabled.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleAnimations.kt#L78 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleAnimations.kt:78}
     */
    readonly blockAnimationChoice: ModeValueGroup<ModuleAnimations$AnimationMode>;
    readonly strideHandler: EventHook<PlayerStrideEvent>;
    readonly swingDuration: number;
}