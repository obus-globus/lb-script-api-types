import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Joints } from '../../../../../ai/djl/modality/cv/output/Joints.d.ts'
import type { BaseImageTranslator } from '../../../../../ai/djl/modality/cv/translator/BaseImageTranslator.d.ts'
import type { YoloPoseTranslator$Builder } from '../../../../../ai/djl/modality/cv/translator/YoloPoseTranslator$Builder.d.ts'
import type { TranslatorContext } from '../../../../../ai/djl/translate/TranslatorContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class YoloPoseTranslator extends BaseImageTranslator<Joints[]> {
    static builder(): YoloPoseTranslator$Builder;
    static builder(paramarg0: JavaMap<string, Object>): YoloPoseTranslator$Builder;
    constructor(arg0: YoloPoseTranslator$Builder)
    // private nmsThreshold: number;
    // private threshold: number;
    processOutput(arg0: TranslatorContext, arg1: (Object | null)[]): Joints[];
}