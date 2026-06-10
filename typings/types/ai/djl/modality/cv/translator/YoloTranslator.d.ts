import type { DetectedObjects } from '../../../../../ai/djl/modality/cv/output/DetectedObjects.d.ts'
import type { ObjectDetectionTranslator } from '../../../../../ai/djl/modality/cv/translator/ObjectDetectionTranslator.d.ts'
import type { YoloTranslator$Builder } from '../../../../../ai/djl/modality/cv/translator/YoloTranslator$Builder.d.ts'
import type { TranslatorContext } from '../../../../../ai/djl/translate/TranslatorContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class YoloTranslator extends ObjectDetectionTranslator {
    static builder(): YoloTranslator$Builder;
    static builder(paramarg0: { [key: string]: Object }): YoloTranslator$Builder;
    constructor(arg0: YoloTranslator$Builder)
    processOutput(arg0: TranslatorContext, arg1: (Object | null)[]): DetectedObjects;
}