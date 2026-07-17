import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { BaseImageTranslator$ClassificationBuilder } from '../../../../../ai/djl/modality/cv/translator/BaseImageTranslator$ClassificationBuilder.d.ts'
import type { InstanceSegmentationTranslator } from '../../../../../ai/djl/modality/cv/translator/InstanceSegmentationTranslator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class InstanceSegmentationTranslator$Builder extends BaseImageTranslator$ClassificationBuilder<InstanceSegmentationTranslator$Builder> {
    constructor()
    // private maxEdge: number;
    // private shortEdge: number;
    // private threshold: number;
    build(): InstanceSegmentationTranslator;
    configPostProcess(arg0: JavaMap<string, Object | null>): void;
    optMaxEdge(arg0: number): InstanceSegmentationTranslator$Builder;
    optShortEdge(arg0: number): InstanceSegmentationTranslator$Builder;
    optThreshold(arg0: number): InstanceSegmentationTranslator$Builder;
    self(): InstanceSegmentationTranslator$Builder;
}