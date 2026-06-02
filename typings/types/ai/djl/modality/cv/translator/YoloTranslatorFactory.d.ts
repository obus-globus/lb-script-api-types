import type { Model } from '../../../../../ai/djl/Model.d.ts'
import type { Image } from '../../../../../ai/djl/modality/cv/Image.d.ts'
import type { DetectedObjects } from '../../../../../ai/djl/modality/cv/output/DetectedObjects.d.ts'
import type { ObjectDetectionTranslatorFactory } from '../../../../../ai/djl/modality/cv/translator/ObjectDetectionTranslatorFactory.d.ts'
import type { Translator } from '../../../../../ai/djl/translate/Translator.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class YoloTranslatorFactory extends ObjectDetectionTranslatorFactory implements Serializable {
    constructor()
    buildBaseTranslator(arg0: Model, arg1: { [key: string]: Object | null }): Translator<Image, DetectedObjects>;
}