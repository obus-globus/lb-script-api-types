import type { Model } from '../../../ai/djl/Model.d.ts'
import type { Input } from '../../../ai/djl/modality/Input.d.ts'
import type { Output } from '../../../ai/djl/modality/Output.d.ts'
import type { ServingTranslator } from '../../../ai/djl/translate/ServingTranslator.d.ts'
import type { Translator } from '../../../ai/djl/translate/Translator.d.ts'
import type { TranslatorFactory } from '../../../ai/djl/translate/TranslatorFactory.d.ts'
import type { Pair } from '../../../ai/djl/util/Pair.d.ts'
import type { Class } from '../../../java/lang/Class.d.ts'
import type { Type } from '../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ServingTranslatorFactory extends Object implements TranslatorFactory {
    constructor()
    // private detectTranslatorFactory(arg0: { [key: string]: Object | null }): string;
    // private findTranslator(arg0: Path[], arg1: string): ServingTranslator;
    // private getServingTranslator(arg0: string, arg1: Model, arg2: { [key: string]: Object | null }): Translator<Input, Output>;
    getSupportedTypes(): Pair<Type, Type>[];
    isSupported(arg0: Class<Object>, arg1: Class<Object>): boolean;
    // private loadDefaultTranslator(arg0: Model, arg1: { [key: string]: Object | null }): Translator<Input, Output>;
    // private loadTranslatorFactory(arg0: string): TranslatorFactory;
    newInstance(arg0: Class<I>, arg1: Class<O>, arg2: Model, arg3: { [key: string]: Object | null }): Translator<I, O>;
}