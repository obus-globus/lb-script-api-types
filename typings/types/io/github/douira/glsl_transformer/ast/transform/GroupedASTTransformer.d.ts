import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { TranslationUnit } from '../../../../../../io/github/douira/glsl_transformer/ast/node/TranslationUnit.d.ts'
import type { RootSupplier } from '../../../../../../io/github/douira/glsl_transformer/ast/query/RootSupplier.d.ts'
import type { ASTParser } from '../../../../../../io/github/douira/glsl_transformer/ast/transform/ASTParser.d.ts'
import type { ASTTransformer } from '../../../../../../io/github/douira/glsl_transformer/ast/transform/ASTTransformer.d.ts'
import type { JobParameters } from '../../../../../../io/github/douira/glsl_transformer/ast/transform/JobParameters.d.ts'
import type { BiConsumer } from '../../../../../../java/util/function/BiConsumer.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class GroupedASTTransformer<J extends JobParameters, K extends unknown, M extends JavaMap<K, string>, N extends JavaMap<K, TranslationUnit>> extends ASTTransformer<J, JavaMap<K, string>> {
    static _getInternalInstance(): ASTParser;
    constructor()
    constructor(arg0: (param0: N, param1: J) => void, arg1: () => N, arg2: () => M)
    constructor(arg0: (param0: N) => void)
    constructor(arg0: (param0: N) => void, arg1: () => N, arg2: () => M)
    constructor(arg0: () => N, arg1: () => M)
    readonly resultMapSupplier: () => M;
    readonly transformation: (param0: N) => void;
    readonly tuMapSupplier: () => N;
    setResultMapSupplier(arg0: () => M): void;
    setTransformation(arg0: (param0: N, param1: J) => void): void;
    setTransformation(arg0: (param0: N) => void): void;
    setTuMapSupplier(arg0: () => N): void;
    transform(arg0: RootSupplier, arg1: JavaMap<K, string>): M;
    transform(arg0: JavaMap<K, string>): JavaMap<K, string>;
    transform(arg0: JavaMap<K, string>, arg1: J): JavaMap<K, string>;
}