import type { TypeDefinition } from '../../../../../../com/llamalad7/mixinextras/expression/impl/pool/TypeDefinition.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../../org/objectweb/asm/Type.d.ts'
export class ExactTypeDef extends Object implements TypeDefinition {
    constructor(arg0: Type)
    // private type: Type;
    matches(arg0: Type): boolean;
}