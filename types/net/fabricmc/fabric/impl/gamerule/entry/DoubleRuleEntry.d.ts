import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { EditBox } from '../../../../../../net/minecraft/client/gui/components/EditBox.d.ts'
import type { AbstractGameRulesScreen } from '../../../../../../net/minecraft/client/gui/screens/worldselection/AbstractGameRulesScreen.d.ts'
import type { AbstractGameRulesScreen$GameRuleEntry } from '../../../../../../net/minecraft/client/gui/screens/worldselection/AbstractGameRulesScreen$GameRuleEntry.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Style } from '../../../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../../net/minecraft/util/FormattedCharSink.d.ts'
import type { GameRule } from '../../../../../../net/minecraft/world/level/gamerules/GameRule.d.ts'
export class DoubleRuleEntry extends AbstractGameRulesScreen$GameRuleEntry {
    static CONTENT_PADDING: number;
    constructor(arg0: AbstractGameRulesScreen, arg1: Component, arg2: (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean[], arg3: string, arg4: GameRule<number>)
    // private input: EditBox;
    extractContent(arg0: GuiGraphicsExtractor, arg1: number, arg2: number, arg3: boolean, arg4: number): void;
}