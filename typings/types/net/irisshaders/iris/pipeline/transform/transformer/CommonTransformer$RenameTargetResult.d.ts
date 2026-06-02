import type { Identifier } from '../../../../../../io/github/douira/glsl_transformer/ast/node/Identifier.d.ts'
import type { DeclarationMember } from '../../../../../../io/github/douira/glsl_transformer/ast/node/declaration/DeclarationMember.d.ts'
import type { DeclarationExternalDeclaration } from '../../../../../../io/github/douira/glsl_transformer/ast/node/external_declaration/DeclarationExternalDeclaration.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Stream } from '../../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CommonTransformer$RenameTargetResult extends Record {
    private constructor(samplerDeclaration: DeclarationExternalDeclaration, samplerDeclarationMember: DeclarationMember, targets: Stream<Identifier>)
    // private samplerDeclaration: DeclarationExternalDeclaration;
    // private samplerDeclarationMember: DeclarationMember;
    // private targets: Stream<Identifier>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    samplerDeclaration(): DeclarationExternalDeclaration;
    samplerDeclarationMember(): DeclarationMember;
    targets(): Stream<Identifier>;
    toString(): string;
}