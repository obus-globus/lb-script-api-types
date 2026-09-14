import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { Chronometer } from '../../../../../../../net/ccbluex/liquidbounce/utils/client/Chronometer.d.ts'
import type { Easing } from '../../../../../../../net/ccbluex/liquidbounce/utils/math/Easing.d.ts'
/**
 * Module Zoom
 *
 * Allows you to zoom.
 *
 * The mouse is slowed down with the help of mixins in {@link MixinMouseHandler}.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleZoom.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleZoom.kt:41}
 */
export class ModuleZoom extends ClientModule {
    static INSTANCE: ModuleZoom;
    // private chronometer: Chronometer;
    // private disableAnimationFinished: boolean;
    // private durationFactor: number;
    // private /*not mapped: */ getDurationFactor(): number;
    // private previousFov: number;
    // private scaledDifference: number;
    // private targetFov: number;
    // private transition: Easing;
    // private /*not mapped: */ getTransition(): Easing;
    readonly zoom: number;
    // private getDefaultFov(): number;
    getFov(enabled: boolean, original: number): number;
    onDisabled(): void;
    onEnabled(): void;
    // private reset(): void;
}