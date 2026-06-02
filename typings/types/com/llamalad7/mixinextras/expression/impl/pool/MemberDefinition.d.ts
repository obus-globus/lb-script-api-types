import type { FlowValue } from '../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowValue.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface MemberDefinition extends Object{
    matches(arg0: FlowValue): boolean;
}