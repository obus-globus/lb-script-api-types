import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { DetectedObjects } from '../../../../../ai/djl/modality/cv/output/DetectedObjects.d.ts'
import type { YoloSegmentationTranslator$Builder } from '../../../../../ai/djl/modality/cv/translator/YoloSegmentationTranslator$Builder.d.ts'
import type { YoloV5Translator } from '../../../../../ai/djl/modality/cv/translator/YoloV5Translator.d.ts'
import type { YoloV5Translator$Builder } from '../../../../../ai/djl/modality/cv/translator/YoloV5Translator$Builder.d.ts'
import type { TranslatorContext } from '../../../../../ai/djl/translate/TranslatorContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class YoloSegmentationTranslator extends YoloV5Translator {
    static builder(): YoloSegmentationTranslator$Builder;
    static builder(paramarg0: JavaMap<string, Object>): YoloSegmentationTranslator$Builder;
    static builder(): YoloV5Translator$Builder;
    static builder(paramarg0: JavaMap<string, Object>): YoloV5Translator$Builder;
    constructor(arg0: YoloSegmentationTranslator$Builder)
    // private nmsThreshold: number;
    // private threshold: number;
    processOutput(arg0: TranslatorContext, arg1: (Object | null)[]): DetectedObjects;
}