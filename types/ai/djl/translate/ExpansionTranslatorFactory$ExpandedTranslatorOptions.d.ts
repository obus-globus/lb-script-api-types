import type { Translator } from '../../../ai/djl/translate/Translator.d.ts'
import type { TranslatorOptions } from '../../../ai/djl/translate/TranslatorOptions.d.ts'
import type { Pair } from '../../../ai/djl/util/Pair.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Type } from '../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ExpansionTranslatorFactory$ExpandedTranslatorOptions extends Object implements TranslatorOptions {
    private constructor(null_: ExpansionTranslatorFactory$ExpandedTranslatorOptions)
    // private translator: Translator<IbaseT, ObaseT>;
    getOptions(): Pair<Type, Type>[];
    isSupported(arg0: Class<Object>, arg1: Class<Object>): boolean;
    option(arg0: Class<I>, arg1: Class<O>): Translator<I, O>;
}