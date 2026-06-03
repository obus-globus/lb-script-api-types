import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { HeaderAndFooterLayout } from '../../../../../../net/minecraft/client/gui/layouts/HeaderAndFooterLayout.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { ReportReasonSelectionScreen$ReasonSelectionList } from '../../../../../../net/minecraft/client/gui/screens/reporting/ReportReasonSelectionScreen$ReasonSelectionList.d.ts'
import type { ReportReason } from '../../../../../../net/minecraft/client/multiplayer/chat/report/ReportReason.d.ts'
import type { ReportType } from '../../../../../../net/minecraft/client/multiplayer/chat/report/ReportType.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ReportReasonSelectionScreen extends Screen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(lastScreen: Screen, selectedReason: ReportReason, reportType: ReportType, onSelectedReason: (param0: ReportReason) => void)
    // private currentlySelectedReason: ReportReason;
    // private lastScreen: Screen;
    // private layout: HeaderAndFooterLayout;
    // private onSelectedReason: (param0: ReportReason) => void;
    // private reasonSelectionList: ReportReasonSelectionScreen$ReasonSelectionList;
    // private reportType: ReportType;
    // private descriptionBottom(): number;
    // private descriptionHeight(): number;
    // private descriptionLeft(): number;
    // private descriptionRight(): number;
    // private descriptionTop(): number;
    // private descriptionWidth(): number;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    init(): void;
    init(width: number, height: number): void;
    // private listHeight(): number;
    onClose(): void;
    repositionElements(): void;
}