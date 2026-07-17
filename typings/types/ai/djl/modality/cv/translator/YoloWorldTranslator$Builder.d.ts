import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { BaseImageTranslator$BaseBuilder } from '../../../../../ai/djl/modality/cv/translator/BaseImageTranslator$BaseBuilder.d.ts'
import type { YoloWorldTranslator } from '../../../../../ai/djl/modality/cv/translator/YoloWorldTranslator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class YoloWorldTranslator$Builder extends BaseImageTranslator$BaseBuilder<YoloWorldTranslator$Builder> {
    constructor()
    // private clipModelPath: string;
    // private nmsThreshold: number;
    // private threshold: number;
    build(): YoloWorldTranslator;
    configPostProcess(arg0: JavaMap<string, Object | null>): void;
    optClipModelPath(arg0: string): YoloWorldTranslator$Builder;
    optNmsThreshold(arg0: number): YoloWorldTranslator$Builder;
    optThreshold(arg0: number): YoloWorldTranslator$Builder;
    self(): YoloWorldTranslator$Builder;
}