import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { EditBox } from '../../../../../../net/minecraft/client/gui/components/EditBox.d.ts'
import type { AbstractGameRulesScreen$GameRuleEntry } from '../../../../../../net/minecraft/client/gui/screens/worldselection/AbstractGameRulesScreen$GameRuleEntry.d.ts'
import type { Style } from '../../../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../../net/minecraft/util/FormattedCharSink.d.ts'
import type { GameRule } from '../../../../../../net/minecraft/world/level/gamerules/GameRule.d.ts'
export class AbstractGameRulesScreen$IntegerRuleEntry extends AbstractGameRulesScreen$GameRuleEntry {
    static CONTENT_PADDING: number;
    constructor(null_: AbstractGameRulesScreen$IntegerRuleEntry, tooltip: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean[], narration: string, gameRule: GameRule<number>)
    // private input: EditBox;
    extractContent(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, hovered: boolean, a: number): void;
}