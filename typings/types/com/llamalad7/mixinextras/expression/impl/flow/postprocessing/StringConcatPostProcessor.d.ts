import type { FlowValue } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowValue.d.ts'
import type { FlowPostProcessor } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/postprocessing/FlowPostProcessor.d.ts'
import type { FlowPostProcessor$OutputSink } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/postprocessing/FlowPostProcessor$OutputSink.d.ts'
import type { Pair } from '../../../../../../../com/llamalad7/mixinextras/lib/apache/commons/tuple/Pair.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class StringConcatPostProcessor extends Object implements FlowPostProcessor {
    constructor()
    // private decorateConcat(arg0: FlowValue[], arg1: FlowValue): void;
    // private getFirstAppend(arg0: FlowValue): FlowValue;
    // private isAppendCall(arg0: Pair<FlowValue, number>): boolean;
    // private isEmptyInit(arg0: FlowValue): boolean;
    // private isToStringCall(arg0: Pair<FlowValue, number>): boolean;
    process(arg0: FlowValue, arg1: FlowPostProcessor$OutputSink): void;
}