import type { FlowValue } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowValue.d.ts'
import type { IdentifierPool } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/pool/IdentifierPool.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface MemberIdentifier extends Object{
    matches(arg0: IdentifierPool, arg1: FlowValue): boolean;
}