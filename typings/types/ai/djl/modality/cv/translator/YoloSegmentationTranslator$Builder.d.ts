import type { YoloSegmentationTranslator } from '../../../../../ai/djl/modality/cv/translator/YoloSegmentationTranslator.d.ts'
import type { YoloV5Translator$Builder } from '../../../../../ai/djl/modality/cv/translator/YoloV5Translator$Builder.d.ts'
export class YoloSegmentationTranslator$Builder extends YoloV5Translator$Builder {
    constructor()
    build(): YoloSegmentationTranslator;
    self(): YoloSegmentationTranslator$Builder;
}