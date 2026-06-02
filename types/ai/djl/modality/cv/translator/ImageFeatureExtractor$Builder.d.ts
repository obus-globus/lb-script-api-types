import type { BaseImageTranslator$BaseBuilder } from '../../../../../ai/djl/modality/cv/translator/BaseImageTranslator$BaseBuilder.d.ts'
import type { ImageFeatureExtractor } from '../../../../../ai/djl/modality/cv/translator/ImageFeatureExtractor.d.ts'
export class ImageFeatureExtractor$Builder extends BaseImageTranslator$BaseBuilder<ImageFeatureExtractor$Builder> {
    constructor()
    build(): ImageFeatureExtractor;
    self(): ImageFeatureExtractor$Builder;
}