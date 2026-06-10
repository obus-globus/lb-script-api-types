import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { AbstractWidget } from '../../../../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { GuiEventListener } from '../../../../../../net/minecraft/client/gui/components/events/GuiEventListener.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { AbstractGameRulesScreen$RuleEntry } from '../../../../../../net/minecraft/client/gui/screens/worldselection/AbstractGameRulesScreen$RuleEntry.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Style } from '../../../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../../net/minecraft/util/FormattedCharSink.d.ts'
export abstract class AbstractGameRulesScreen$GameRuleEntry extends AbstractGameRulesScreen$RuleEntry {
    static CONTENT_PADDING: number;
    constructor(null_: AbstractGameRulesScreen$GameRuleEntry, label: Component)
    // private children: AbstractWidget[];
    label: (param0: (param0: number, param1: Style, param2: number) => boolean) => boolean[];
    children(): GuiEventListener[];
    extractLabel(graphics: GuiGraphicsExtractor, rowTop: number, rowLeft: number): void;
    narratables(): NarratableEntry[];
}