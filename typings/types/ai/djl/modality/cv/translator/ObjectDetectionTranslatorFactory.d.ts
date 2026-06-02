import type { DetectedObjects } from '../../../../../ai/djl/modality/cv/output/DetectedObjects.d.ts'
import type { BaseImageTranslatorFactory } from '../../../../../ai/djl/modality/cv/translator/BaseImageTranslatorFactory.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
export abstract class ObjectDetectionTranslatorFactory extends BaseImageTranslatorFactory<DetectedObjects> {
    constructor()
    getBaseOutputType(): Class<DetectedObjects>;
}