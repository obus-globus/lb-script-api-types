import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { TranslationUnit } from '../../../../../../io/github/douira/glsl_transformer/ast/node/TranslationUnit.d.ts'
import type { ASTParser } from '../../../../../../io/github/douira/glsl_transformer/ast/transform/ASTParser.d.ts'
import type { GroupedASTTransformer } from '../../../../../../io/github/douira/glsl_transformer/ast/transform/GroupedASTTransformer.d.ts'
import type { JobParameters } from '../../../../../../io/github/douira/glsl_transformer/ast/transform/JobParameters.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Supplier } from '../../../../../../java/util/function/Supplier.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class EnumASTTransformer<J extends JobParameters, E extends Enum<E>> extends GroupedASTTransformer<J, E, JavaMap<E, string>, JavaMap<E, TranslationUnit>> {
    static _getInternalInstance(): ASTParser;
    constructor(arg0: Class<E>)
    constructor(arg0: (param0: JavaMap<E, TranslationUnit>) => void, arg1: Class<E>)
    setEnumType(arg0: Class<E>): void;
    setResultMapSupplier(arg0: () => JavaMap<E, string>): void;
    setTuMapSupplier(arg0: () => JavaMap<E, TranslationUnit>): void;
}