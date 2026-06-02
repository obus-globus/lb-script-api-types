import type { DetectedObjects } from '../../../../../ai/djl/modality/cv/output/DetectedObjects.d.ts'
import type { BaseImageTranslator } from '../../../../../ai/djl/modality/cv/translator/BaseImageTranslator.d.ts'
import type { BaseImageTranslator$SynsetLoader } from '../../../../../ai/djl/modality/cv/translator/BaseImageTranslator$SynsetLoader.d.ts'
import type { ObjectDetectionTranslator$ObjectDetectionBuilder } from '../../../../../ai/djl/modality/cv/translator/ObjectDetectionTranslator$ObjectDetectionBuilder.d.ts'
import type { TranslatorContext } from '../../../../../ai/djl/translate/TranslatorContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ObjectDetectionTranslator extends BaseImageTranslator<DetectedObjects> {
    constructor(arg0: ObjectDetectionTranslator$ObjectDetectionBuilder<Object>)
    // private applyRatio: boolean;
    // private classes: string[];
    // private removePadding: boolean;
    // private synsetLoader: BaseImageTranslator$SynsetLoader;
    // private threshold: number;
    prepare(arg0: TranslatorContext): void;
}