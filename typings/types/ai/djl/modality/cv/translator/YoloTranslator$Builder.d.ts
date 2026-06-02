import type { ObjectDetectionTranslator$ObjectDetectionBuilder } from '../../../../../ai/djl/modality/cv/translator/ObjectDetectionTranslator$ObjectDetectionBuilder.d.ts'
import type { YoloTranslator } from '../../../../../ai/djl/modality/cv/translator/YoloTranslator.d.ts'
export class YoloTranslator$Builder extends ObjectDetectionTranslator$ObjectDetectionBuilder<YoloTranslator$Builder> {
    constructor()
    build(): YoloTranslator;
    self(): YoloTranslator$Builder;
}