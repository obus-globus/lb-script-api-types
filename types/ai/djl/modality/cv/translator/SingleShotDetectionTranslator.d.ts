import type { DetectedObjects } from '../../../../../ai/djl/modality/cv/output/DetectedObjects.d.ts'
import type { ObjectDetectionTranslator } from '../../../../../ai/djl/modality/cv/translator/ObjectDetectionTranslator.d.ts'
import type { SingleShotDetectionTranslator$Builder } from '../../../../../ai/djl/modality/cv/translator/SingleShotDetectionTranslator$Builder.d.ts'
import type { TranslatorContext } from '../../../../../ai/djl/translate/TranslatorContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SingleShotDetectionTranslator extends ObjectDetectionTranslator {
    static builder(): SingleShotDetectionTranslator$Builder;
    static builder(paramarg0: { [key: string]: Object | null }): SingleShotDetectionTranslator$Builder;
    constructor(arg0: SingleShotDetectionTranslator$Builder)
    processOutput(arg0: TranslatorContext, arg1: (Object | null)[]): DetectedObjects;
}