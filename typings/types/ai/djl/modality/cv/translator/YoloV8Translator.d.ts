import type { DetectedObjects } from '../../../../../ai/djl/modality/cv/output/DetectedObjects.d.ts'
import type { YoloV5Translator } from '../../../../../ai/djl/modality/cv/translator/YoloV5Translator.d.ts'
import type { YoloV5Translator$Builder } from '../../../../../ai/djl/modality/cv/translator/YoloV5Translator$Builder.d.ts'
import type { YoloV8Translator$Builder } from '../../../../../ai/djl/modality/cv/translator/YoloV8Translator$Builder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class YoloV8Translator extends YoloV5Translator {
    static builder(): YoloV5Translator$Builder;
    static builder(paramarg0: { [key: string]: Object }): YoloV5Translator$Builder;
    static builder(): YoloV8Translator$Builder;
    static builder(paramarg0: { [key: string]: Object }): YoloV8Translator$Builder;
    constructor(arg0: YoloV8Translator$Builder)
    // private maxBoxes: number;
    processFromBoxOutput(arg0: number, arg1: number, arg2: (Object | null)[]): DetectedObjects;
}