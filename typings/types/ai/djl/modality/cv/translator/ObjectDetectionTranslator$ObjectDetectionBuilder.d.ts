import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { BaseImageTranslator$ClassificationBuilder } from '../../../../../ai/djl/modality/cv/translator/BaseImageTranslator$ClassificationBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ObjectDetectionTranslator$ObjectDetectionBuilder<T extends ObjectDetectionTranslator$ObjectDetectionBuilder<ObjectDetectionTranslator$ObjectDetectionBuilder<any>>> extends BaseImageTranslator$ClassificationBuilder<T> {
    constructor()
    // private applyRatio: boolean;
    // private removePadding: boolean;
    // private threshold: number;
    configPostProcess(arg0: JavaMap<string, Object | null>): void;
    optApplyRatio(arg0: boolean): T;
    optThreshold(arg0: number): T;
}