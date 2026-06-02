import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { Options } from '../../../../../../net/minecraft/client/Options.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractWidget } from '../../../../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { Button } from '../../../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { Checkbox } from '../../../../../../net/minecraft/client/gui/components/Checkbox.d.ts'
import type { MultiLineTextWidget } from '../../../../../../net/minecraft/client/gui/components/MultiLineTextWidget.d.ts'
import type { HeaderAndFooterLayout } from '../../../../../../net/minecraft/client/gui/layouts/HeaderAndFooterLayout.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { TelemetryEventWidget } from '../../../../../../net/minecraft/client/gui/screens/telemetry/TelemetryEventWidget.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class TelemetryInfoScreen extends Screen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(lastScreen: Screen, options: Options)
    // private checkbox: Checkbox;
    // private description: MultiLineTextWidget;
    // private lastScreen: Screen;
    // private layout: HeaderAndFooterLayout;
    // private options: Options;
    // private savedScroll: number;
    // private telemetryEventWidget: TelemetryEventWidget;
    getNarrationMessage(): Component;
    init(): void;
    onClose(): void;
    // private onOptInChanged(widget: AbstractWidget, value: boolean): void;
    // private openDataFolder(button: Button): void;
    // private openFeedbackLink(button: Button): void;
    // private openPrivacyStatementLink(button: Button): void;
    repositionElements(): void;
    setInitialFocus(): void;
}