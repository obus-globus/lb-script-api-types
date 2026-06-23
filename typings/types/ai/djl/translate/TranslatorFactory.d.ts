import type { Model } from '../../../ai/djl/Model.d.ts'
import type { Translator } from '../../../ai/djl/translate/Translator.d.ts'
import type { Pair } from '../../../ai/djl/util/Pair.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Type } from '../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface TranslatorFactory extends Object{
    getSupportedTypes(): Pair<Type, Type>[];
    isSupported(arg0: Class<Object>, arg1: Class<Object>): boolean;
    newInstance<I extends unknown, O extends unknown>(arg0: Class<I>, arg1: Class<O>, arg2: Model, arg3: { [key: string]: Object | null }): Translator<I, O>;
}