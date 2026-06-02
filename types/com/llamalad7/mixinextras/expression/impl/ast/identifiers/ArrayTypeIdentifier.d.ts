import type { TypeIdentifier } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/ast/identifiers/TypeIdentifier.d.ts'
import type { IdentifierPool } from '../../../../../../../com/llamalad7/mixinextras/expression/impl/pool/IdentifierPool.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../../../org/objectweb/asm/Type.d.ts'
export class ArrayTypeIdentifier extends Object implements TypeIdentifier {
    constructor(arg0: number, arg1: TypeIdentifier)
    dims: number;
    elementType: TypeIdentifier;
    matches(arg0: IdentifierPool, arg1: Type): boolean;
}