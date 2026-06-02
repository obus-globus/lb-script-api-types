import type { MemberIdentifier } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/ast/identifiers/MemberIdentifier.d.ts'
import type { FlowValue } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowValue.d.ts'
import type { IdentifierPool } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/pool/IdentifierPool.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class DefinedMemberIdentifier extends Object implements MemberIdentifier {
    constructor(arg0: string)
    name: string;
    matches(arg0: IdentifierPool, arg1: FlowValue): boolean;
}