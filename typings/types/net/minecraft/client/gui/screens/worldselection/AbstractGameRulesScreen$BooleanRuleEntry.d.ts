import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { CycleButton } from '../../../../../../net/minecraft/client/gui/components/CycleButton.d.ts'
import type { AbstractGameRulesScreen } from '../../../../../../net/minecraft/client/gui/screens/worldselection/AbstractGameRulesScreen.d.ts'
import type { AbstractGameRulesScreen$GameRuleEntry } from '../../../../../../net/minecraft/client/gui/screens/worldselection/AbstractGameRulesScreen$GameRuleEntry.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Style } from '../../../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../../net/minecraft/util/FormattedCharSink.d.ts'
import type { GameRule } from '../../../../../../net/minecraft/world/level/gamerules/GameRule.d.ts'
export class AbstractGameRulesScreen$BooleanRuleEntry extends AbstractGameRulesScreen$GameRuleEntry {
    static CONTENT_PADDING: number;
    constructor(null_: AbstractGameRulesScreen, name: Component, tooltip: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean[], narration: string, gameRule: GameRule<boolean>)
    // private checkbox: CycleButton<boolean>;
    extractContent(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, hovered: boolean, a: number): void;
}