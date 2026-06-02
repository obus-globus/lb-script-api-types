import type { TranslationUnit } from '../../../../../../io/github/douira/glsl_transformer/ast/node/TranslationUnit.d.ts'
import type { Root } from '../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTParser } from '../../../../../../io/github/douira/glsl_transformer/ast/transform/ASTParser.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TextureStage } from '../../../../../../net/irisshaders/iris/shaderpack/texture/TextureStage.d.ts'
export class TextureTransformer extends Object {
    static transform(paramarg0: ASTParser, paramarg1: TranslationUnit, paramarg2: Root, paramarg3: TextureStage, paramarg4: Map<Object | null, string>): void;
    constructor()
}