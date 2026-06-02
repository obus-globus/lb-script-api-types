import type { BaseImageTranslator } from '../../../../../ai/djl/modality/cv/translator/BaseImageTranslator.d.ts'
import type { ImageFeatureExtractor$Builder } from '../../../../../ai/djl/modality/cv/translator/ImageFeatureExtractor$Builder.d.ts'
import type { TranslatorContext } from '../../../../../ai/djl/translate/TranslatorContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ImageFeatureExtractor extends BaseImageTranslator<number[]> {
    static builder(): ImageFeatureExtractor$Builder;
    static builder(paramarg0: { [key: string]: Object | null }): ImageFeatureExtractor$Builder;
    constructor(arg0: ImageFeatureExtractor$Builder)
    processOutput(arg0: TranslatorContext, arg1: (Object | null)[]): number[];
}