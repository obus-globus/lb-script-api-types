import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { BaseImageTranslator$ClassificationBuilder } from '../../../../../ai/djl/modality/cv/translator/BaseImageTranslator$ClassificationBuilder.d.ts'
import type { SemanticSegmentationTranslator } from '../../../../../ai/djl/modality/cv/translator/SemanticSegmentationTranslator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SemanticSegmentationTranslator$Builder extends BaseImageTranslator$ClassificationBuilder<SemanticSegmentationTranslator$Builder> {
    constructor()
    // private maxEdge: number;
    // private shortEdge: number;
    build(): SemanticSegmentationTranslator;
    configPostProcess(arg0: JavaMap<string, Object | null>): void;
    self(): SemanticSegmentationTranslator$Builder;
}