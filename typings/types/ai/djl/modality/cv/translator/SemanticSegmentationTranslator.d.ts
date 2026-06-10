import type { CategoryMask } from '../../../../../ai/djl/modality/cv/output/CategoryMask.d.ts'
import type { BaseImageTranslator } from '../../../../../ai/djl/modality/cv/translator/BaseImageTranslator.d.ts'
import type { BaseImageTranslator$SynsetLoader } from '../../../../../ai/djl/modality/cv/translator/BaseImageTranslator$SynsetLoader.d.ts'
import type { SemanticSegmentationTranslator$Builder } from '../../../../../ai/djl/modality/cv/translator/SemanticSegmentationTranslator$Builder.d.ts'
import type { TranslatorContext } from '../../../../../ai/djl/translate/TranslatorContext.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SemanticSegmentationTranslator extends BaseImageTranslator<CategoryMask> {
    static builder(): SemanticSegmentationTranslator$Builder;
    static builder(paramarg0: { [key: string]: Object }): SemanticSegmentationTranslator$Builder;
    constructor(arg0: SemanticSegmentationTranslator$Builder)
    // private classes: string[];
    // private synsetLoader: BaseImageTranslator$SynsetLoader;
    prepare(arg0: TranslatorContext): void;
    processOutput(arg0: TranslatorContext, arg1: (Object | null)[]): CategoryMask;
}