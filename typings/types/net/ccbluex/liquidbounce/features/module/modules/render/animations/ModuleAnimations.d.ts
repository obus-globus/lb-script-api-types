import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PlayerStrideEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerStrideEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleAnimations$AnimationMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/animations/ModuleAnimations$AnimationMode.d.ts'
import type { SwingAnimations } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/animations/SwingAnimations.d.ts'
/**
 * Animations module
 *
 * This module affects item animations. It allows the user to customize the animation.
 * If you are looking forward to contribute to this module, please name your animation with a reasonable name.
 * Do not name them after clients or yourself.
 * Please credit from where you got the animation from and make sure they are willing to contribute.
 * If they are not willing to contribute, please do not add the animation to this module.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2727616ee96ec8c4ceda97bebdd601f050a6856e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/animations/ModuleAnimations.kt#L46 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/animations/ModuleAnimations.kt:46}
 */
export class ModuleAnimations extends ClientModule {
    static INSTANCE: ModuleAnimations;
    // private airWalker: boolean;
    // private /*not mapped: */ getAirWalker(): boolean;
    readonly blockAnimationChoice: ModeValueGroup<ModuleAnimations$AnimationMode>;
    readonly strideHandler: EventHook<PlayerStrideEvent>;
    /**
     * A choice that allows the user to choose the animation that will be used during the blocking
     * of a sword.
     * This choice is only used when the {@link ModuleSwordBlock} module is enabled.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2727616ee96ec8c4ceda97bebdd601f050a6856e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/animations/ModuleAnimations.kt#L82 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/animations/ModuleAnimations.kt:82}
     */
    readonly swingAnimation: SwingAnimations;
    readonly swingDuration: number;
}