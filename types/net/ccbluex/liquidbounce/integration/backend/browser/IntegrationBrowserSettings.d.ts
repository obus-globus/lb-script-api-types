import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { BrowserSettings } from '../../../../../../net/ccbluex/liquidbounce/integration/backend/browser/BrowserSettings.d.ts'
export class IntegrationBrowserSettings extends BrowserSettings {
    constructor(fpsLimit: number, update: () => void)
    readonly syncGameFps: boolean;
}