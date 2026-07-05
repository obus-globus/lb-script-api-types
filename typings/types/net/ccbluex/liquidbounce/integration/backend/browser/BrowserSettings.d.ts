import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { Value } from '../../../../../../net/ccbluex/liquidbounce/config/types/Value.d.ts'
import type { ValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ValueGroup.d.ts'
export class BrowserSettings extends ValueGroup {
    constructor(fpsLimit: number, update: () => void)
    readonly currentFps: number;
    /**
     * The maximum frames per second the browser renderer should run at.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0f34808bf6954ff6126dde353ff9e896eb4a2ead/src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/BrowserSettings.kt#L83 | src/main/kotlin/net/ccbluex/liquidbounce/integration/backend/browser/BrowserSettings.kt:83}
     */
    readonly fps: Value<number>;
}