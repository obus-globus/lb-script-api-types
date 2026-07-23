import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Browser } from '../../../../../../net/ccbluex/liquidbounce/integration/backend/browser/Browser.d.ts'
import type { BrowserSettings } from '../../../../../../net/ccbluex/liquidbounce/integration/backend/browser/BrowserSettings.d.ts'
import type { CustomScreenType } from '../../../../../../net/ccbluex/liquidbounce/integration/screen/CustomScreenType.d.ts'
export class CustomOverlay extends Object {
    constructor(screenType: CustomScreenType, browserSettings: BrowserSettings)
    /**
     * This {@link browser} might be null.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6f54ba6705b9d98f759a29be39e5aa97e877cc92/src/main/kotlin/net/ccbluex/liquidbounce/integration/screen/impl/CustomOverlay.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/integration/screen/impl/CustomOverlay.kt:39}
     */
    readonly browser: Browser | null;
    browserSettings: BrowserSettings;
    // private screenType: CustomScreenType;
    visible: boolean;
    close(): void;
    open(): void;
}