import type { MemberIdentifier } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/ast/identifiers/MemberIdentifier.d.ts'
import type { TypeIdentifier } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/ast/identifiers/TypeIdentifier.d.ts'
import type { FlowValue } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowValue.d.ts'
import type { IdentifierPool } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/pool/IdentifierPool.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../../../org/objectweb/asm/Type.d.ts'
export class WildcardIdentifier extends Object implements MemberIdentifier, TypeIdentifier {
    constructor()
    matches(arg0: IdentifierPool, arg1: FlowValue): boolean;
    matches(arg0: IdentifierPool, arg1: Type): boolean;
}