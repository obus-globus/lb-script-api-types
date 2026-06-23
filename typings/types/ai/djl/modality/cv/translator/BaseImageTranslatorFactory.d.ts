import type { Image } from '../../../../../ai/djl/modality/cv/Image.d.ts'
import type { ExpansionTranslatorFactory } from '../../../../../ai/djl/translate/ExpansionTranslatorFactory.d.ts'
import type { ExpansionTranslatorFactory$TranslatorExpansion } from '../../../../../ai/djl/translate/ExpansionTranslatorFactory$TranslatorExpansion.d.ts'
import type { PreProcessor } from '../../../../../ai/djl/translate/PreProcessor.d.ts'
import type { Pair } from '../../../../../ai/djl/util/Pair.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Type } from '../../../../../java/lang/reflect/Type.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class BaseImageTranslatorFactory<O extends unknown> extends ExpansionTranslatorFactory<Image, O> {
    constructor()
    getBaseInputType(): Class<Image>;
    getExpansions(): Map<Pair<Type, Type>, (param0: Object | null) => Object | null>;
    getPreprocessorExpansions(): Map<Type, (param0: PreProcessor<Image>) => PreProcessor<Object>>;
}