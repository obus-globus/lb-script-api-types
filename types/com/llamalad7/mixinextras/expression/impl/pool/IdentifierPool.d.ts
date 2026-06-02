import type { FlowValue } from '../../../../../../com/llamalad7/mixinextras/expression/impl/flow/FlowValue.d.ts'
import type { MemberDefinition } from '../../../../../../com/llamalad7/mixinextras/expression/impl/pool/MemberDefinition.d.ts'
import type { TypeDefinition } from '../../../../../../com/llamalad7/mixinextras/expression/impl/pool/TypeDefinition.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../../org/objectweb/asm/Type.d.ts'
export class IdentifierPool extends Object {
    constructor()
    // private members: { [key: string]: MemberDefinition[] };
    // private types: { [key: string]: TypeDefinition[] };
    addMember(arg0: string, arg1: MemberDefinition): void;
    addType(arg0: string, arg1: TypeDefinition): void;
    matchesMember(arg0: string, arg1: FlowValue): boolean;
    matchesType(arg0: string, arg1: Type): boolean;
    memberExists(arg0: string): boolean;
    typeExists(arg0: string): boolean;
}