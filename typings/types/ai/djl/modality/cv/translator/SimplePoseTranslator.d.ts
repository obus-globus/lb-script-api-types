import type { Joints } from '../../../../../ai/djl/modality/cv/output/Joints.d.ts'
import type { BaseImageTranslator } from '../../../../../ai/djl/modality/cv/translator/BaseImageTranslator.d.ts'
import type { SimplePoseTranslator$Builder } from '../../../../../ai/djl/modality/cv/translator/SimplePoseTranslator$Builder.d.ts'
import type { TranslatorContext } from '../../../../../ai/djl/translate/TranslatorContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SimplePoseTranslator extends BaseImageTranslator<Joints> {
    static builder(): SimplePoseTranslator$Builder;
    static builder(paramarg0: { [key: string]: Object }): SimplePoseTranslator$Builder;
    constructor(arg0: SimplePoseTranslator$Builder)
    // private threshold: number;
    processOutput(arg0: TranslatorContext, arg1: (Object | null)[]): Joints;
}