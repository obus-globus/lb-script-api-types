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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleZoom.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/render/ModuleZoom.kt:34}
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