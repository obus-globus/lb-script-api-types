import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { BaseImageTranslator$BaseBuilder } from '../../../../../ai/djl/modality/cv/translator/BaseImageTranslator$BaseBuilder.d.ts'
import type { SimplePoseTranslator } from '../../../../../ai/djl/modality/cv/translator/SimplePoseTranslator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SimplePoseTranslator$Builder extends BaseImageTranslator$BaseBuilder<SimplePoseTranslator$Builder> {
    constructor()
    // private threshold: number;
    build(): SimplePoseTranslator;
    configPostProcess(arg0: JavaMap<string, Object | null>): void;
    optThreshold(arg0: number): SimplePoseTranslator$Builder;
    self(): SimplePoseTranslator$Builder;
}