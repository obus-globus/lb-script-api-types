import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { BaseImageTranslator$BaseBuilder } from '../../../../../ai/djl/modality/cv/translator/BaseImageTranslator$BaseBuilder.d.ts'
import type { YoloPoseTranslator } from '../../../../../ai/djl/modality/cv/translator/YoloPoseTranslator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class YoloPoseTranslator$Builder extends BaseImageTranslator$BaseBuilder<YoloPoseTranslator$Builder> {
    constructor()
    // private nmsThreshold: number;
    // private threshold: number;
    build(): YoloPoseTranslator;
    configPostProcess(arg0: JavaMap<string, Object | null>): void;
    optNmsThreshold(arg0: number): YoloPoseTranslator$Builder;
    optThreshold(arg0: number): YoloPoseTranslator$Builder;
    self(): YoloPoseTranslator$Builder;
}