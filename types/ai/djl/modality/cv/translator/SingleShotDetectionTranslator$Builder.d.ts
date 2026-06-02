import type { ObjectDetectionTranslator$ObjectDetectionBuilder } from '../../../../../ai/djl/modality/cv/translator/ObjectDetectionTranslator$ObjectDetectionBuilder.d.ts'
import type { SingleShotDetectionTranslator } from '../../../../../ai/djl/modality/cv/translator/SingleShotDetectionTranslator.d.ts'
export class SingleShotDetectionTranslator$Builder extends ObjectDetectionTranslator$ObjectDetectionBuilder<SingleShotDetectionTranslator$Builder> {
    constructor()
    build(): SingleShotDetectionTranslator;
    self(): SingleShotDetectionTranslator$Builder;
}