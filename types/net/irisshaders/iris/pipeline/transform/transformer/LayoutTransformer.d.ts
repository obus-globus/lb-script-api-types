import type { TranslationUnit } from '../../../../../../io/github/douira/glsl_transformer/ast/node/TranslationUnit.d.ts'
import type { Root } from '../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTParser } from '../../../../../../io/github/douira/glsl_transformer/ast/transform/ASTParser.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PatchShaderType } from '../../../../../../net/irisshaders/iris/pipeline/transform/PatchShaderType.d.ts'
import type { Parameters } from '../../../../../../net/irisshaders/iris/pipeline/transform/parameter/Parameters.d.ts'
export class LayoutTransformer extends Object {
    static transformGrouped(paramarg0: ASTParser, paramarg1: { [key in PatchShaderType]: TranslationUnit }, paramarg2: Parameters): void;
    static transformIn(paramarg0: Object2IntMap<string>, paramarg1: ASTParser, paramarg2: TranslationUnit, paramarg3: Root, paramarg4: Parameters): void;
    static transformOut(paramarg0: ASTParser, paramarg1: TranslationUnit, paramarg2: Root, paramarg3: Parameters): Object2IntMap<string>;
    constructor()
}