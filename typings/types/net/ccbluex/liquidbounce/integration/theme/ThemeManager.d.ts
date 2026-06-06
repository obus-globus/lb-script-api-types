import type { File } from '../../../../../java/io/File.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Config } from '../../../../../net/ccbluex/liquidbounce/config/types/Config.d.ts'
import type { Browser } from '../../../../../net/ccbluex/liquidbounce/integration/backend/browser/Browser.d.ts'
import type { BrowserSettings } from '../../../../../net/ccbluex/liquidbounce/integration/backend/browser/BrowserSettings.d.ts'
import type { InputAcceptor } from '../../../../../net/ccbluex/liquidbounce/integration/backend/input/InputAcceptor.d.ts'
import type { CustomScreenType } from '../../../../../net/ccbluex/liquidbounce/integration/screen/CustomScreenType.d.ts'
import type { Theme } from '../../../../../net/ccbluex/liquidbounce/integration/theme/Theme.d.ts'
import type { ThemeManager$ScreenLocation } from '../../../../../net/ccbluex/liquidbounce/integration/theme/ThemeManager$ScreenLocation.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { ResourceManagerReloadListener } from '../../../../../net/minecraft/server/packs/resources/ResourceManagerReloadListener.d.ts'
import type { Logger } from '../../../../../org/apache/logging/log4j/Logger.d.ts'
export class ThemeManager extends Config {
    static INSTANCE: ThemeManager;
    // private currentTheme: string;
    // private /*not mapped: */ getCurrentTheme(): string;
    // private includedTheme: Theme | null;
    /*not mapped: */ getIncludedTheme$liquidbounce(): Theme | null;
    /*not mapped: */ isThemeExternal(): boolean;
    // private logger: Logger;
    // private reloader: ResourceManagerReloadListener;
    /*not mapped: */ getReloader$liquidbounce(): ResourceManagerReloadListener;
    shaderEnabled: boolean;
    // private takesInputHandler: InputAcceptor;
    // private temporaryTheme: Theme | null;
    theme: Theme | null;
    readonly themeIds: string[];
    readonly themes: Theme[];
    // private themesFolder: File;
    /*not mapped: */ getThemesFolder$liquidbounce(): File;
    drawBackground(context: GuiGraphicsExtractor, width: number, height: number, mouseX: number, mouseY: number, delta: number): boolean;
    getScreenLocation(customScreenType: CustomScreenType | null, markAsStatic: boolean): ThemeManager$ScreenLocation;
    init(): void;
    load(): void;
    loadBackgroundAsync(): CompletableFuture<void>;
    /**
     * Open {@link Browser} with the given {@link CustomScreenType} and mark as static if {@link markAsStatic} is true.
     * This tab will be locked to 60 FPS since it is not input-aware.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/ThemeManager.kt#L168 | src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/ThemeManager.kt:168}
     */
    openImmediate(customScreenType: CustomScreenType | null, markAsStatic: boolean, settings: BrowserSettings): Browser;
    /**
     * Open {@link Browser} with the given {@link CustomScreenType} and mark as static if {@link markAsStatic} is true.
     * This tab will be locked to the highest refresh rate since it is input-aware.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/ThemeManager.kt#L185 | src/main/kotlin/net/ccbluex/liquidbounce/integration/theme/ThemeManager.kt:185}
     */
    openInputAwareImmediate(customScreenType: CustomScreenType | null, markAsStatic: boolean, settings: BrowserSettings, priority: number, inputAcceptor: InputAcceptor): Browser;
    updateImmediate(browser: Browser | null, customScreenType: CustomScreenType | null, markAsStatic: boolean): void;
}