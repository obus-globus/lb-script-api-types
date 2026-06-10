import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button } from '../../../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { MultiLineLabel } from '../../../../../../net/minecraft/client/gui/components/MultiLineLabel.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { ChatSelectionLogFiller } from '../../../../../../net/minecraft/client/gui/screens/reporting/ChatSelectionLogFiller.d.ts'
import type { ChatSelectionScreen$ChatSelectionList } from '../../../../../../net/minecraft/client/gui/screens/reporting/ChatSelectionScreen$ChatSelectionList.d.ts'
import type { LoggedChatMessage } from '../../../../../../net/minecraft/client/multiplayer/chat/LoggedChatMessage.d.ts'
import type { ChatReport$Builder } from '../../../../../../net/minecraft/client/multiplayer/chat/report/ChatReport$Builder.d.ts'
import type { ReportingContext } from '../../../../../../net/minecraft/client/multiplayer/chat/report/ReportingContext.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ChatSelectionScreen extends Screen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: NarratableEntry[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(lastScreen: Screen, reportingContext: ReportingContext, report: ChatReport$Builder, onSelected: (param0: ChatReport$Builder) => void)
    // private chatLogFiller: ChatSelectionLogFiller;
    // private chatSelectionList: ChatSelectionScreen$ChatSelectionList;
    // private confirmSelectedButton: Button;
    // private contextInfoLabel: MultiLineLabel;
    // private lastScreen: Screen;
    // private onSelected: (param0: ChatReport$Builder) => void;
    // private report: ChatReport$Builder;
    // private reportingContext: ReportingContext;
    // private canReport(message: LoggedChatMessage): boolean;
    // private extendLog(): void;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    getNarrationMessage(): Component;
    init(): void;
    init(width: number, height: number): void;
    onClose(): void;
    // private onReachedScrollTop(): void;
    // private updateConfirmSelectedButton(): void;
}