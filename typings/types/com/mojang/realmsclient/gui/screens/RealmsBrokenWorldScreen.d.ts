import type { RealmsServer } from '../../../../../com/mojang/realmsclient/dto/RealmsServer.d.ts'
import type { RealmsServiceException } from '../../../../../com/mojang/realmsclient/exception/RealmsServiceException.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { NarratableEntry } from '../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { RealmsScreen } from '../../../../../net/minecraft/realms/RealmsScreen.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class RealmsBrokenWorldScreen extends RealmsScreen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: NarratableEntry[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(lastScreen: Screen, serverId: number, isMinigame: boolean)
    // private animTick: number;
    // private lastScreen: Screen;
    // private leftX: number;
    // private message: Component[];
    // private serverData: RealmsServer;
    // private serverId: number;
    // private slotsThatHasBeenDownloaded: number[];
    // private addButtons(): void;
    createErrorScreen(exception: RealmsServiceException): Screen;
    doSwitchOrReset(): void;
    // private downloadWorld(slotId: number): void;
    extractRenderState(graphics: GuiGraphicsExtractor, xm: number, ym: number, a: number): void;
    // private extractSlotFrame(graphics: GuiGraphicsExtractor, x: number, y: number, xm: number, ym: number, active: boolean, text: string, i: number, imageId: number, image: string, empty: boolean): void;
    // private fetchServerData(realmId: number): void;
    // private getFramePositionX(i: number): number;
    getNarrationMessage(): Component;
    init(): void;
    init(width: number, height: number): void;
    // private isMinigame(): boolean;
    onClose(): void;
    tick(): void;
}