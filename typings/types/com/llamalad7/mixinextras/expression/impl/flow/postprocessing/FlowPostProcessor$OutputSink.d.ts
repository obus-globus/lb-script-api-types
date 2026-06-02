import type { FlowValue } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowValue.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface FlowPostProcessor$OutputSink extends Object{
    markAsSynthetic(arg0: FlowValue): void;
    registerFlow(arg0: FlowValue[]): void;
}