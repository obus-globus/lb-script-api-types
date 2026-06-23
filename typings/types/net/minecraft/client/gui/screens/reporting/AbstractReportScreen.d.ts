import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button } from '../../../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { Checkbox } from '../../../../../../net/minecraft/client/gui/components/Checkbox.d.ts'
import type { MultiLineEditBox } from '../../../../../../net/minecraft/client/gui/components/MultiLineEditBox.d.ts'
import type { LinearLayout } from '../../../../../../net/minecraft/client/gui/layouts/LinearLayout.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { Report$Builder } from '../../../../../../net/minecraft/client/multiplayer/chat/report/Report$Builder.d.ts'
import type { ReportingContext } from '../../../../../../net/minecraft/client/multiplayer/chat/report/ReportingContext.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export abstract class AbstractReportScreen<B extends Report$Builder<any>> extends Screen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: NarratableEntry[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(title: Component, lastScreen: Screen, reportingContext: ReportingContext, reportBuilder: B)
    // private attestation: Checkbox;
    // private lastScreen: Screen;
    // private layout: LinearLayout;
    // private reportBuilder: B;
    // private reportingContext: ReportingContext;
    // private sendButton: Button;
    addContent(): void;
    // private clearDraft(): void;
    createCommentBox(width: number, height: number, valueListener: (param0: string) => void): MultiLineEditBox;
    createFooter(): void;
    createHeader(): void;
    // private displayReportSendError(message: Component): void;
    init(): void;
    init(width: number, height: number): void;
    onClose(): void;
    onReportChanged(): void;
    // private onReportSendError(throwable: Throwable): void;
    // private onReportSendSuccess(): void;
    removed(): void;
    repositionElements(): void;
    // private saveDraft(): void;
    sendReport(): void;
}