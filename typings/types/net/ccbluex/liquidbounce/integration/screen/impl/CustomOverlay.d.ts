import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Browser } from '../../../../../../net/ccbluex/liquidbounce/integration/backend/browser/Browser.d.ts'
import type { BrowserSettings } from '../../../../../../net/ccbluex/liquidbounce/integration/backend/browser/BrowserSettings.d.ts'
import type { CustomScreenType } from '../../../../../../net/ccbluex/liquidbounce/integration/screen/CustomScreenType.d.ts'
export class CustomOverlay extends Object {
    constructor(screenType: CustomScreenType, browserSettings: BrowserSettings)
    /**
     * This {@link browser} might be null.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8fc1f12b34c50f483c3b3446c45e8bc1de58e20c/src/main/kotlin/net/ccbluex/liquidbounce/integration/screen/impl/CustomOverlay.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/integration/screen/impl/CustomOverlay.kt:39}
     */
    readonly browser: Browser | null;
    browserSettings: BrowserSettings;
    // private screenType: CustomScreenType;
    visible: boolean;
    close(): void;
    open(): void;
}