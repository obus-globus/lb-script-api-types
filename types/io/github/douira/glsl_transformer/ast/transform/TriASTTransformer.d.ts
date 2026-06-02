import type { TranslationUnit } from '../../../../../../io/github/douira/glsl_transformer/ast/node/TranslationUnit.d.ts'
import type { Root } from '../../../../../../io/github/douira/glsl_transformer/ast/query/Root.d.ts'
import type { ASTParser } from '../../../../../../io/github/douira/glsl_transformer/ast/transform/ASTParser.d.ts'
import type { EnumASTTransformer } from '../../../../../../io/github/douira/glsl_transformer/ast/transform/EnumASTTransformer.d.ts'
import type { JobParameters } from '../../../../../../io/github/douira/glsl_transformer/ast/transform/JobParameters.d.ts'
import type { TriFullTransformation } from '../../../../../../io/github/douira/glsl_transformer/ast/transform/TriFullTransformation.d.ts'
import type { TriRootOnlyTransformation } from '../../../../../../io/github/douira/glsl_transformer/ast/transform/TriRootOnlyTransformation.d.ts'
import type { TriConsumer } from '../../../../../../io/github/douira/glsl_transformer/util/TriConsumer.d.ts'
import type { Triple } from '../../../../../../io/github/douira/glsl_transformer/util/Triple.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TriASTTransformer<J extends JobParameters, E extends Enum<E>> extends EnumASTTransformer<J, E> {
    static _getInternalInstance(): ASTParser;
    constructor(arg0: (param0: TranslationUnit, param1: J, param2: Object | null, param3: Object | null, param4: Object | null, param5: Root, param6: Root) => void, arg1: Class<E>, arg2: E, arg3: E, arg4: E)
    constructor(arg0: (param0: TranslationUnit, param1: Object | null, param2: Object | null, param3: Object | null, param4: Root, param5: Root) => void, arg1: Class<E>, arg2: E, arg3: E, arg4: E)
    constructor(arg0: (param0: TranslationUnit, param1: TranslationUnit, param2: TranslationUnit) => void, arg1: Class<E>, arg2: E, arg3: E, arg4: E)
    constructor(arg0: Class<E>, arg1: E, arg2: E, arg3: E)
    constructor(arg0: (param0: Map<E, TranslationUnit>) => void, arg1: Class<E>, arg2: E, arg3: E, arg4: E)
    // private aType: E;
    // private bType: E;
    // private cType: E;
    // private enumClass: Class<E>;
    setEnumType(arg0: Class<E>): void;
    setTransformation(arg0: (param0: TranslationUnit, param1: J, param2: Object | null, param3: Object | null, param4: Object | null, param5: Root, param6: Root) => void): void;
    setTransformation(arg0: (param0: TranslationUnit, param1: Object | null, param2: Object | null, param3: Object | null, param4: Root, param5: Root) => void): void;
    setTransformation(arg0: (param0: TranslationUnit, param1: TranslationUnit, param2: TranslationUnit) => void): void;
    transform(arg0: Triple<string>): Triple<string>;
    transform(arg0: Triple<string>, arg1: J): Triple<string>;
    transform(arg0: string, arg1: string, arg2: string): Map<E, string>;
    transform(arg0: string, arg1: string, arg2: string, arg3: J): Map<E, string>;
}