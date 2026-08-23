import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { MCEFDownloadManager } from '../../../../net/ccbluex/liquidbounce/mcef/MCEFDownloadManager.d.ts'
import type { MCEFSettings } from '../../../../net/ccbluex/liquidbounce/mcef/MCEFSettings.d.ts'
import type { MCEFApp } from '../../../../net/ccbluex/liquidbounce/mcef/cef/MCEFApp.d.ts'
import type { MCEFBrowser } from '../../../../net/ccbluex/liquidbounce/mcef/cef/MCEFBrowser.d.ts'
import type { MCEFBrowserSettings } from '../../../../net/ccbluex/liquidbounce/mcef/cef/MCEFBrowserSettings.d.ts'
import type { MCEFClient } from '../../../../net/ccbluex/liquidbounce/mcef/cef/MCEFClient.d.ts'
import type { Minecraft } from '../../../../net/minecraft/client/Minecraft.d.ts'
import type { CefRequestContext } from '../../../../org/cef/browser/CefRequestContext.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class MCEF extends Enum<MCEF> {
    static INSTANCE: MCEF;
    static mc: Minecraft;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): MCEF;
    static values(): MCEF[];
    private constructor()
    LOGGER: Logger;
    readonly app: MCEFApp;
    readonly client: MCEFClient;
    readonly resourceManager: MCEFDownloadManager;
    readonly settings: MCEFSettings;
    // private assertInitialized(): void;
    createBrowser(arg0: string, arg1: boolean, arg2: number, arg3: number, arg4: MCEFBrowserSettings): MCEFBrowser;
    createBrowser(arg0: string, arg1: boolean, arg2: number, arg3: number, arg4: MCEFBrowserSettings, arg5: CefRequestContext): MCEFBrowser;
    createBrowser(arg0: string, arg1: boolean, arg2: MCEFBrowserSettings): MCEFBrowser;
    createBrowser(arg0: string, arg1: boolean, arg2: MCEFBrowserSettings, arg3: CefRequestContext): MCEFBrowser;
    getApp(): MCEFApp;
    getClient(): MCEFClient;
    getJavaCefCommit(): string;
    getLogger(): Logger;
    getResourceManager(): MCEFDownloadManager;
    getSettings(): MCEFSettings;
    initialize(): boolean;
    isInitialized(): boolean;
    newResourceManager(): MCEFDownloadManager;
    shutdown(): void;
    name(): "INSTANCE";
}