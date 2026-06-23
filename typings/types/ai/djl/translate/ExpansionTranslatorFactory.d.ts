import type { Model } from '../../../ai/djl/Model.d.ts'
import type { ExpansionTranslatorFactory$ExpandedTranslatorOptions } from '../../../ai/djl/translate/ExpansionTranslatorFactory$ExpandedTranslatorOptions.d.ts'
import type { ExpansionTranslatorFactory$TranslatorExpansion } from '../../../ai/djl/translate/ExpansionTranslatorFactory$TranslatorExpansion.d.ts'
import type { PostProcessor } from '../../../ai/djl/translate/PostProcessor.d.ts'
import type { PreProcessor } from '../../../ai/djl/translate/PreProcessor.d.ts'
import type { Translator } from '../../../ai/djl/translate/Translator.d.ts'
import type { TranslatorFactory } from '../../../ai/djl/translate/TranslatorFactory.d.ts'
import type { Pair } from '../../../ai/djl/util/Pair.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Type } from '../../../java/lang/reflect/Type.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class ExpansionTranslatorFactory<IbaseT extends unknown, ObaseT extends unknown> extends Object implements TranslatorFactory {
    constructor()
    buildBaseTranslator(arg0: Model, arg1: { [key: string]: Object | null }): Translator<IbaseT, ObaseT>;
    getBaseInputType(): Class<IbaseT>;
    getBaseOutputType(): Class<ObaseT>;
    getExpansions(): Map<Pair<Type, Type>, (param0: Object | null) => Object | null>;
    getPostprocessorExpansions(): Map<Type, (param0: PostProcessor<ObaseT>) => PostProcessor<Object>>;
    getPreprocessorExpansions(): Map<Type, (param0: PreProcessor<IbaseT>) => PreProcessor<Object>>;
    getSupportedTypes(): Pair<Type, Type>[];
    isSupported(arg0: Class<Object>, arg1: Class<Object>): boolean;
    newInstance<I extends unknown, O extends unknown>(arg0: Class<I>, arg1: Class<O>, arg2: Model, arg3: { [key: string]: Object | null }): Translator<I, O>;
    newInstance<I extends unknown, O extends unknown>(arg0: Class<I>, arg1: Class<O>, arg2: Translator<IbaseT, ObaseT>): Translator<I, O>;
    withTranslator(arg0: Translator<IbaseT, ObaseT>): ExpansionTranslatorFactory$ExpandedTranslatorOptions;
}