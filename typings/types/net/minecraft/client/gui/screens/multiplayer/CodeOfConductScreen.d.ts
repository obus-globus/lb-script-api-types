import type { BooleanConsumer } from '../../../../../../it/unimi/dsi/fastutil/booleans/BooleanConsumer.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Layout } from '../../../../../../net/minecraft/client/gui/layouts/Layout.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { WarningScreen } from '../../../../../../net/minecraft/client/gui/screens/multiplayer/WarningScreen.d.ts'
import type { ServerData } from '../../../../../../net/minecraft/client/multiplayer/ServerData.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class CodeOfConductScreen extends WarningScreen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: NarratableEntry[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(serverData: ServerData, parent: Screen, codeOfConductText: string, resultConsumer: (param0: boolean) => void)
    // private codeOfConductText: string;
    // private parent: Screen;
    // private resultConsumer: (param0: boolean) => void;
    // private serverData: ServerData;
    addFooterButtons(): Layout;
    // private onResult(accepted: boolean): void;
    shouldCloseOnEsc(): boolean;
    tick(): void;
}