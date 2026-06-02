import type { BaseImageTranslator$ClassificationBuilder } from '../../../../../ai/djl/modality/cv/translator/BaseImageTranslator$ClassificationBuilder.d.ts'
import type { ImageClassificationTranslator } from '../../../../../ai/djl/modality/cv/translator/ImageClassificationTranslator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ImageClassificationTranslator$Builder extends BaseImageTranslator$ClassificationBuilder<ImageClassificationTranslator$Builder> {
    constructor()
    // private applySoftmax: boolean;
    // private topK: number;
    build(): ImageClassificationTranslator;
    configPostProcess(arg0: { [key: string]: Object | null }): void;
    optApplySoftmax(arg0: boolean): ImageClassificationTranslator$Builder;
    optTopK(arg0: number): ImageClassificationTranslator$Builder;
    self(): ImageClassificationTranslator$Builder;
}