import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { Value } from '../../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { ValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
export class BrowserSettings extends ValueGroup {
    constructor(fpsLimit: number, update: () => void)
    readonly currentFps: number;
    /**
     * The maximum frames per second the browser renderer should run at.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/ee595b88333a1dc2ff3055eb6be0860bbedcbdb3/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/BrowserSettings.kt#L83 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/BrowserSettings.kt:83}
     */
    readonly fps: Value<number>;
}