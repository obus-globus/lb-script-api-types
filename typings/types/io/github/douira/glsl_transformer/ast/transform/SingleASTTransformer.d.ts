import type { TranslationUnit } from '../../../../../../io/github/douira/glsl_transformer/ast/node/TranslationUnit.d.ts'
import type { Root } from '../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { RootSupplier } from '../../../../../../io/github/douira/glsl_transformer/ast/query/RootSupplier.d.ts'
import type { ASTParser } from '../../../../../../io/github/douira/glsl_transformer/ast/transform/ASTParser.d.ts'
import type { ASTTransformer } from '../../../../../../io/github/douira/glsl_transformer/ast/transform/ASTTransformer.d.ts'
import type { JobParameters } from '../../../../../../io/github/douira/glsl_transformer/ast/transform/JobParameters.d.ts'
import type { ParameterizedTransformer } from '../../../../../../io/github/douira/glsl_transformer/ast/transform/ParameterizedTransformer.d.ts'
import type { TriConsumer } from '../../../../../../io/github/douira/glsl_transformer/util/TriConsumer.d.ts'
import type { BiConsumer } from '../../../../../../java/util/function/BiConsumer.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SingleASTTransformer<J extends JobParameters> extends ASTTransformer<J, string> {
    static IDENTITY_TRANSFORMATION: (param0: TranslationUnit) => void;
    static _getInternalInstance(): ASTParser;
    static wrapTransformation(paramarg0: ParameterizedTransformer<Object, Object>, paramarg1: (param0: TranslationUnit, param1: Root) => void): (param0: TranslationUnit) => void;
    static wrapTransformation(paramarg0: ParameterizedTransformer<Object, Object>, paramarg1: (param0: TranslationUnit, param1: Root, param2: Object | null) => void): (param0: TranslationUnit) => void;
    constructor()
    constructor(arg0: (param0: TranslationUnit, param1: Root, param2: J) => void)
    constructor(arg0: (param0: TranslationUnit, param1: Root) => void)
    constructor(arg0: (param0: TranslationUnit) => void)
    readonly transformation: (param0: TranslationUnit) => void;
    setTransformation(arg0: (param0: TranslationUnit, param1: Root, param2: J) => void): void;
    setTransformation(arg0: (param0: TranslationUnit, param1: Root) => void): void;
    setTransformation(arg0: (param0: TranslationUnit) => void): void;
    transform(arg0: RootSupplier, arg1: string): string;
    transform(arg0: string): string;
    transform(arg0: string, arg1: J): string;
}