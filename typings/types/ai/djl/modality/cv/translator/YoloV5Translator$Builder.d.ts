import type { ObjectDetectionTranslator$ObjectDetectionBuilder } from '../../../../../ai/djl/modality/cv/translator/ObjectDetectionTranslator$ObjectDetectionBuilder.d.ts'
import type { YoloV5Translator } from '../../../../../ai/djl/modality/cv/translator/YoloV5Translator.d.ts'
import type { YoloV5Translator$YoloOutputType } from '../../../../../ai/djl/modality/cv/translator/YoloV5Translator$YoloOutputType.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class YoloV5Translator$Builder extends ObjectDetectionTranslator$ObjectDetectionBuilder<YoloV5Translator$Builder> {
    constructor()
    // private nmsThreshold: number;
    // private outputType: YoloV5Translator$YoloOutputType;
    build(): YoloV5Translator;
    configPostProcess(arg0: { [key: string]: Object | null }): void;
    optNmsThreshold(arg0: number): YoloV5Translator$Builder;
    optOutputType(arg0: YoloV5Translator$YoloOutputType): YoloV5Translator$Builder;
    self(): YoloV5Translator$Builder;
}