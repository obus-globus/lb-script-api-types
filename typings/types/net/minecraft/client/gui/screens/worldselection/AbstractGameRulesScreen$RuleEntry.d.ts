import type { ContainerObjectSelectionList$Entry } from '../../../../../../net/minecraft/client/gui/components/ContainerObjectSelectionList$Entry.d.ts'
import type { Style } from '../../../../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSequence } from '../../../../../../net/minecraft/util/FormattedCharSequence.d.ts'
import type { FormattedCharSink } from '../../../../../../net/minecraft/util/FormattedCharSink.d.ts'
export abstract class AbstractGameRulesScreen$RuleEntry extends ContainerObjectSelectionList$Entry<AbstractGameRulesScreen$RuleEntry> {
    static CONTENT_PADDING: number;
    constructor(tooltip: (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean[])
    // private tooltip: (param0: (param0: number, param1: Style, param2: number) => kotlin.Boolean) => kotlin.Boolean[];
}