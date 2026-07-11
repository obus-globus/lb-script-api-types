import type { AutoCloseable } from '../../../../../../java/lang/AutoCloseable.d.ts'
import type { Browser } from '../../../../../../net/ccbluex/liquidbounce/integration/backend/browser/Browser.d.ts'
import type { CustomScreenType } from '../../../../../../net/ccbluex/liquidbounce/integration/screen/CustomScreenType.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class CustomStandaloneMinecraftScreen extends Screen implements AutoCloseable {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: NarratableEntry[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(screenType: CustomScreenType)
    readonly browser: Browser;
    // private mouseX: number;
    // private mouseY: number;
    readonly screenType: CustomScreenType;
    close(): void;
    extractTransparentBackground(graphics: GuiGraphicsExtractor): void;
    init(width: number, height: number): void;
    /**
     * Disable {@link Screen.extractBlurredBackground}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/integration/screen/impl/CustomStandaloneMinecraftScreen.kt#L73 | src/main/kotlin/net/ccbluex/liquidbounce/integration/screen/impl/CustomStandaloneMinecraftScreen.kt:73}
     */
    isInGameUi(): boolean;
    isPauseScreen(): boolean;
    onClose(): void;
    sync(): void;
}