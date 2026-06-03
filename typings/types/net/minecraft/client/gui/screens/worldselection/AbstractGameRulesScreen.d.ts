import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AbstractGameRulesScreenAccessor } from '../../../../../../net/fabricmc/fabric/mixin/gamerule/client/AbstractGameRulesScreenAccessor.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button } from '../../../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { EditBox } from '../../../../../../net/minecraft/client/gui/components/EditBox.d.ts'
import type { GuiEventListener } from '../../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { HeaderAndFooterLayout } from '../../../../../../net/minecraft/client/gui/layouts/HeaderAndFooterLayout.d.ts'
import type { LinearLayout } from '../../../../../../net/minecraft/client/gui/layouts/LinearLayout.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { AbstractGameRulesScreen$RuleEntry } from '../../../../../../net/minecraft/client/gui/screens/worldselection/AbstractGameRulesScreen$RuleEntry.d.ts'
import type { AbstractGameRulesScreen$RuleList } from '../../../../../../net/minecraft/client/gui/screens/worldselection/AbstractGameRulesScreen$RuleList.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { GameRules } from '../../../../../../net/minecraft/world/level/gamerules/GameRules.d.ts'
export abstract class AbstractGameRulesScreen extends Screen implements AbstractGameRulesScreenAccessor {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(gameRules: GameRules, exitCallback: (param0: Optional<GameRules>) => void)
    // private doneButton: Button;
    // private exitCallback: (param0: Optional<GameRules>) => void;
    readonly gameRules: GameRules;
    // private invalidEntries: AbstractGameRulesScreen$RuleEntry[];
    // private layout: HeaderAndFooterLayout;
    // private ruleList: AbstractGameRulesScreen$RuleList;
    // private searchBox: EditBox;
    // private clearInvalid(invalidEntry: AbstractGameRulesScreen$RuleEntry): void;
    closeAndApplyChanges(): void;
    closeAndDiscardChanges(): void;
    createAndConfigureSearchBox(headerLayout: LinearLayout): void;
    filterGameRules(filter: string): void;
    init(): void;
    init(width: number, height: number): void;
    initContent(): void;
    // private markInvalid(invalidEntry: AbstractGameRulesScreen$RuleEntry): void;
    onDone(): void;
    repositionElements(): void;
    setInitialFocus(): void;
    setInitialFocus(target: GuiEventListener): void;
    // private updateDoneButton(): void;
}