import type { RealmsNotificationsScreen } from '../../../../../com/mojang/realmsclient/gui/screens/RealmsNotificationsScreen.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { LogoRenderer } from '../../../../../net/minecraft/client/gui/components/LogoRenderer.d.ts'
import type { SplashRenderer } from '../../../../../net/minecraft/client/gui/components/SplashRenderer.d.ts'
import type { NarratableEntry } from '../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { MouseButtonEvent } from '../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { TextureManager } from '../../../../../net/minecraft/client/renderer/texture/TextureManager.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class TitleScreen extends Screen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    static registerTextures(paramtextureManager: TextureManager): void;
    constructor()
    constructor(fading: boolean)
    constructor(fading: boolean, logoRenderer: LogoRenderer)
    // private fadeInStart: number;
    // private fading: boolean;
    // private logoRenderer: LogoRenderer;
    // private realmsNotificationsScreen: RealmsNotificationsScreen;
    // private splash: SplashRenderer;
    added(): void;
    canInterruptWithAnotherScreen(): boolean;
    // private checkDemoWorldPresence(): boolean;
    // private confirmDemo(result: boolean): void;
    // private createDemoMenuOptions(topPos: number, spacing: number): number;
    // private createNormalMenuOptions(topPos: number, spacing: number): number;
    // private createTestWorldButton(topPos: number, spacing: number): number;
    extractBackground(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    // private getMultiplayerDisabledReason(): Component;
    init(): void;
    isPauseScreen(): boolean;
    mouseClicked(event: MouseButtonEvent, doubleClick: boolean): boolean;
    // private realmsNotificationsEnabled(): boolean;
    removed(): void;
    shouldCloseOnEsc(): boolean;
    tick(): void;
}