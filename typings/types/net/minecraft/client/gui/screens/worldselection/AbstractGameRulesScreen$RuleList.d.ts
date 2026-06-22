import type { AbstractGameRulesScreenRuleListAccessor } from '../../../../../../net/fabricmc/fabric/mixin/gamerule/client/AbstractGameRulesScreenRuleListAccessor.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { ContainerObjectSelectionList } from '../../../../../../net/minecraft/client/gui/components/ContainerObjectSelectionList.d.ts'
import type { AbstractGameRulesScreen } from '../../../../../../net/minecraft/client/gui/screens/worldselection/AbstractGameRulesScreen.d.ts'
import type { AbstractGameRulesScreen$RuleEntry } from '../../../../../../net/minecraft/client/gui/screens/worldselection/AbstractGameRulesScreen$RuleEntry.d.ts'
import type { SoundManager } from '../../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
import type { GameRules } from '../../../../../../net/minecraft/world/level/gamerules/GameRules.d.ts'
export class AbstractGameRulesScreen$RuleList extends ContainerObjectSelectionList<AbstractGameRulesScreen$RuleEntry> implements AbstractGameRulesScreenRuleListAccessor {
    static SCROLLBAR_WIDTH: number;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(null_: AbstractGameRulesScreen$RuleList, gameRules: GameRules)
    // private gameRules: GameRules;
    extractWidgetRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    getThis(): AbstractGameRulesScreen;
    // private populateChildren(filter: string): void;
}