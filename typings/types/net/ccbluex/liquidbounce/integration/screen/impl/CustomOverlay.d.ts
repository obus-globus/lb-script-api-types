import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Browser } from '../../../../../../net/ccbluex/liquidbounce/integration/backend/browser/Browser.d.ts'
import type { BrowserSettings } from '../../../../../../net/ccbluex/liquidbounce/integration/backend/browser/BrowserSettings.d.ts'
import type { CustomScreenType } from '../../../../../../net/ccbluex/liquidbounce/integration/screen/CustomScreenType.d.ts'
export class CustomOverlay extends Object {
    constructor(screenType: CustomScreenType, browserSettings: BrowserSettings)
    /**
     * This {@link browser} might be null.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/integration/screen/impl/CustomOverlay.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/integration/screen/impl/CustomOverlay.kt:36}
     */
    readonly browser: Browser | null;
    browserSettings: BrowserSettings;
    // private screenType: CustomScreenType;
    visible: boolean;
    close(): void;
    open(): void;
}