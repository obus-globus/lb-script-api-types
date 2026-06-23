import type { BaseImageTranslator } from '../../../../../ai/djl/modality/cv/translator/BaseImageTranslator.d.ts'
import type { BaseImageTranslator$BaseBuilder } from '../../../../../ai/djl/modality/cv/translator/BaseImageTranslator$BaseBuilder.d.ts'
import type { TranslatorContext } from '../../../../../ai/djl/translate/TranslatorContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BaseImagePreProcessor extends BaseImageTranslator<void> {
    constructor(arg0: BaseImageTranslator$BaseBuilder<any>)
    processOutput(arg0: TranslatorContext, arg1: (Object | null)[]): void;
}