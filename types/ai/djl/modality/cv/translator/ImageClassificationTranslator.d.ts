import type { Classifications } from '../../../../../ai/djl/modality/Classifications.d.ts'
import type { BaseImageTranslator } from '../../../../../ai/djl/modality/cv/translator/BaseImageTranslator.d.ts'
import type { BaseImageTranslator$SynsetLoader } from '../../../../../ai/djl/modality/cv/translator/BaseImageTranslator$SynsetLoader.d.ts'
import type { ImageClassificationTranslator$Builder } from '../../../../../ai/djl/modality/cv/translator/ImageClassificationTranslator$Builder.d.ts'
import type { TranslatorContext } from '../../../../../ai/djl/translate/TranslatorContext.d.ts'
import type { TranslatorOptions } from '../../../../../ai/djl/translate/TranslatorOptions.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ImageClassificationTranslator extends BaseImageTranslator<Classifications> {
    static builder(): ImageClassificationTranslator$Builder;
    static builder(paramarg0: { [key: string]: Object | null }): ImageClassificationTranslator$Builder;
    constructor(arg0: ImageClassificationTranslator$Builder)
    // private applySoftmax: boolean;
    // private classes: string[];
    // private synsetLoader: BaseImageTranslator$SynsetLoader;
    // private topK: number;
    getExpansions(): TranslatorOptions;
    prepare(arg0: TranslatorContext): void;
    processOutput(arg0: TranslatorContext, arg1: (Object | null)[]): Classifications;
}