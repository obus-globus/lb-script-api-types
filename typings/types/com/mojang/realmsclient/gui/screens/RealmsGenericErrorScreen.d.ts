import type { RealmsServiceException } from '../../../../../com/mojang/realmsclient/exception/RealmsServiceException.d.ts'
import type { RealmsGenericErrorScreen$ErrorMessage } from '../../../../../com/mojang/realmsclient/gui/screens/RealmsGenericErrorScreen$ErrorMessage.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { MultiLineLabel } from '../../../../../net/minecraft/client/gui/components/MultiLineLabel.d.ts'
import type { NarratableEntry } from '../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { RealmsScreen } from '../../../../../net/minecraft/realms/RealmsScreen.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class RealmsGenericErrorScreen extends RealmsScreen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(realmsServiceException: RealmsServiceException, nextScreen: Screen)
    private constructor(message: RealmsGenericErrorScreen$ErrorMessage, nextScreen: Screen)
    constructor(message: Component, nextScreen: Screen)
    constructor(title: Component, message: Component, nextScreen: Screen)
    // private detail: Component;
    // private nextScreen: Screen;
    // private splitDetail: MultiLineLabel;
    extractRenderState(graphics: GuiGraphicsExtractor, xm: number, ym: number, a: number): void;
    getNarrationMessage(): Component;
    init(): void;
    onClose(): void;
}