import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { MultiLineEditBox } from '../../../../../../net/minecraft/client/gui/components/MultiLineEditBox.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { AbstractReportScreen } from '../../../../../../net/minecraft/client/gui/screens/reporting/AbstractReportScreen.d.ts'
import type { MouseButtonEvent } from '../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { NameReport } from '../../../../../../net/minecraft/client/multiplayer/chat/report/NameReport.d.ts'
import type { NameReport$Builder } from '../../../../../../net/minecraft/client/multiplayer/chat/report/NameReport$Builder.d.ts'
import type { ReportingContext } from '../../../../../../net/minecraft/client/multiplayer/chat/report/ReportingContext.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class NameReportScreen extends AbstractReportScreen<NameReport$Builder> {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: NarratableEntry[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(lastScreen: Screen, reportingContext: ReportingContext, playerId: UUID, reportedName: string)
    constructor(lastScreen: Screen, reportingContext: ReportingContext, draft: NameReport)
    // private commentBox: MultiLineEditBox;
    addContent(): void;
    mouseReleased(event: MouseButtonEvent): boolean;
}