import type { DetectedObjects } from '../../../../../ai/djl/modality/cv/output/DetectedObjects.d.ts'
import type { Rectangle } from '../../../../../ai/djl/modality/cv/output/Rectangle.d.ts'
import type { ObjectDetectionTranslator } from '../../../../../ai/djl/modality/cv/translator/ObjectDetectionTranslator.d.ts'
import type { YoloV5Translator$Builder } from '../../../../../ai/djl/modality/cv/translator/YoloV5Translator$Builder.d.ts'
import type { YoloV5Translator$YoloOutputType } from '../../../../../ai/djl/modality/cv/translator/YoloV5Translator$YoloOutputType.d.ts'
import type { TranslatorContext } from '../../../../../ai/djl/translate/TranslatorContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class YoloV5Translator extends ObjectDetectionTranslator {
    static builder(): YoloV5Translator$Builder;
    static builder(paramarg0: { [key: string]: Object | null }): YoloV5Translator$Builder;
    constructor(arg0: YoloV5Translator$Builder)
    // private nmsThreshold: number;
    // private yoloOutputLayerType: YoloV5Translator$YoloOutputType;
    nms(arg0: number, arg1: number, arg2: Rectangle[], arg3: number[], arg4: number[]): DetectedObjects;
    processFromBoxOutput(arg0: number, arg1: number, arg2: (Object | null)[]): DetectedObjects;
    // private processFromDetectOutput(): DetectedObjects;
    processOutput(arg0: TranslatorContext, arg1: (Object | null)[]): DetectedObjects;
}