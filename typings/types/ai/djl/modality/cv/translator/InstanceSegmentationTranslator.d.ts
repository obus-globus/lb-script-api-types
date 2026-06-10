import type { DetectedObjects } from '../../../../../ai/djl/modality/cv/output/DetectedObjects.d.ts'
import type { BaseImageTranslator } from '../../../../../ai/djl/modality/cv/translator/BaseImageTranslator.d.ts'
import type { BaseImageTranslator$SynsetLoader } from '../../../../../ai/djl/modality/cv/translator/BaseImageTranslator$SynsetLoader.d.ts'
import type { InstanceSegmentationTranslator$Builder } from '../../../../../ai/djl/modality/cv/translator/InstanceSegmentationTranslator$Builder.d.ts'
import type { TranslatorContext } from '../../../../../ai/djl/translate/TranslatorContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class InstanceSegmentationTranslator extends BaseImageTranslator<DetectedObjects> {
    static builder(): InstanceSegmentationTranslator$Builder;
    static builder(paramarg0: { [key: string]: Object }): InstanceSegmentationTranslator$Builder;
    constructor(arg0: InstanceSegmentationTranslator$Builder)
    // private classes: string[];
    // private synsetLoader: BaseImageTranslator$SynsetLoader;
    // private threshold: number;
    prepare(arg0: TranslatorContext): void;
    processOutput(arg0: TranslatorContext, arg1: (Object | null)[]): DetectedObjects;
}