import type { FlowValue } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowValue.d.ts'
import type { FlowPostProcessor } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/postprocessing/FlowPostProcessor.d.ts'
import type { FlowPostProcessor$OutputSink } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/postprocessing/FlowPostProcessor$OutputSink.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class SplitNodeRemovalPostProcessor extends Object implements FlowPostProcessor {
    constructor()
    process(arg0: FlowValue, arg1: FlowPostProcessor$OutputSink): void;
}