import type { FlowValue } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowValue.d.ts'
import type { FlowPostProcessor$OutputSink } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/postprocessing/FlowPostProcessor$OutputSink.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface FlowPostProcessor extends Object{
    process(arg0: FlowValue, arg1: FlowPostProcessor$OutputSink): void;
}