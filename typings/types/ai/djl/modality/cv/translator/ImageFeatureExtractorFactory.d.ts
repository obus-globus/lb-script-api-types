import type { Model } from '../../../../../ai/djl/Model.d.ts'
import type { Image } from '../../../../../ai/djl/modality/cv/Image.d.ts'
import type { BaseImageTranslatorFactory } from '../../../../../ai/djl/modality/cv/translator/BaseImageTranslatorFactory.d.ts'
import type { Translator } from '../../../../../ai/djl/translate/Translator.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ImageFeatureExtractorFactory extends BaseImageTranslatorFactory<number[]> implements Serializable {
    constructor()
    buildBaseTranslator(arg0: Model, arg1: { [key: string]: Object | null }): Translator<Image, number[]>;
    getBaseOutputType(): Class<number[]>;
}