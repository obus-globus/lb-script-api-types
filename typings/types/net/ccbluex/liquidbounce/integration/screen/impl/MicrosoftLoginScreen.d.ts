import type { Browser } from '../../../../../../net/ccbluex/liquidbounce/integration/backend/browser/Browser.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ExternalBrowserMsaAuthService } from '../../../../../../net/raphimc/minecraftauth/msa/service/impl/ExternalBrowserMsaAuthService.d.ts'
/**
 * Hosts the Microsoft login page in a CEF browser.
 *
 * MinecraftAuth ships a JavaFX web view for this, but we do not ship JavaFX, so
 * {@link ExternalBrowserMsaAuthService} lets the login run in the browser the client already has. The screen
 * reports every URL the page navigates to, and the service picks the auth code out of the redirect.
 *
 * The browser is incognito, so the Microsoft session never reaches the client's cookie store. Without
 * that, signing in would leave the account logged in for anyone who opens a browser afterwards, and
 * adding a second account would silently reuse the first one's session instead of asking who to sign
 * in as.
 *
 * The screen does not close itself on success - the service's close callback does, once the auth code has
 * been exchanged for a token.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/integration/screen/impl/MicrosoftLoginScreen.kt#L46 | src/main/kotlin/net/ccbluex/liquidbounce/integration/screen/impl/MicrosoftLoginScreen.kt:46}
 */
export class MicrosoftLoginScreen extends Screen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: NarratableEntry[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(url: string, service: ExternalBrowserMsaAuthService, parent: Screen | null)
    // private browser: Browser | null;
    // private parent: Screen | null;
    // private recentUrl: string;
    // private service: ExternalBrowserMsaAuthService;
    // private url: string;
    extractRenderState(context: GuiGraphicsExtractor, mouseX: number, mouseY: number, delta: number): void;
    init(width: number, height: number): void;
    isPauseScreen(): boolean;
    onClose(): void;
    /**
     * Cleanup lives here rather than in {@link onClose} because the screen is also dismissed programmatically
     * once the sign-in finishes, and that path only goes through {@link removed}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/integration/screen/impl/MicrosoftLoginScreen.kt#L98 | src/main/kotlin/net/ccbluex/liquidbounce/integration/screen/impl/MicrosoftLoginScreen.kt:98}
     */
    removed(): void;
    shouldCloseOnEsc(): boolean;
}