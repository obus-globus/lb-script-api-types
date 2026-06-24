import type { ExpansionTranslatorFactory$1 } from '../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { ExpansionTranslatorFactory } from '../../../ai/djl/translate/ExpansionTranslatorFactory.d.ts'
import type { Translator } from '../../../ai/djl/translate/Translator.d.ts'
import type { TranslatorOptions } from '../../../ai/djl/translate/TranslatorOptions.d.ts'
import type { Pair } from '../../../ai/djl/util/Pair.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Type } from '../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ExpansionTranslatorFactory$ExpandedTranslatorOptions extends Object implements TranslatorOptions {
    constructor(null_: ExpansionTranslatorFactory<IbaseT, ObaseT>, arg1: Translator<Object, Object>, arg2: ExpansionTranslatorFactory$1)
    private constructor(null_: ExpansionTranslatorFactory<IbaseT, ObaseT>, arg1: Translator<IbaseT, ObaseT>)
    // private translator: Translator<IbaseT, ObaseT>;
    getOptions(): Pair<Type, Type>[];
    isSupported(arg0: Class<Object>, arg1: Class<Object>): boolean;
    option<I extends unknown, O extends unknown>(arg0: Class<I>, arg1: Class<O>): Translator<I, O>;
}