import type { DeclarationMember } from '../../../../../../io/github/douira/glsl_transformer/ast/node/declaration/DeclarationMember.d.ts'
import type { TypeQualifier } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/qualifier/TypeQualifier.d.ts'
import type { TypeSpecifier } from '../../../../../../io/github/douira/glsl_transformer/ast/node/type/specifier/TypeSpecifier.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class LayoutTransformer$NewDeclarationData extends Record {
    // private location: number;
    // private member: DeclarationMember;
    // private name: string;
    // private qualifier: TypeQualifier;
    // private type: TypeSpecifier;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    location(): number;
    member(): DeclarationMember;
    name(): string;
    qualifier(): TypeQualifier;
    toString(): string;
    type(): TypeSpecifier;
}