import type { Window } from '../../../../../../../com/mojang/blaze3d/platform/Window.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ClickMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/ClickMode.d.ts'
import type { Chronometer } from '../../../../../../../net/ccbluex/liquidbounce/utils/client/Chronometer.d.ts'
/**
 * Quick item movement
 *
 * @author sqlerrorthing
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/707b7339b27ee1da75cb769c96b0d9d292d0a8ad/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleItemScroller.kt#L46 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleItemScroller.kt:46}
 */
export class ModuleItemScroller extends ClientModule {
    static INSTANCE: ModuleItemScroller;
    static getClickMode(): ClickMode;
    // private chronometer: Chronometer;
    // private clickMode: ClickMode;
    /*not mapped: */ getClickMode(): ClickMode;
    // private delay: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getDelay(): { start: number; endInclusive: number; step: number };
    canPerformScroll(window: Window): boolean;
    resetChronometer(): void;
}