import type { BaseImageTranslator$BaseBuilder } from '../../../../../ai/djl/modality/cv/translator/BaseImageTranslator$BaseBuilder.d.ts'
import type { BaseImageTranslator$SynsetLoader } from '../../../../../ai/djl/modality/cv/translator/BaseImageTranslator$SynsetLoader.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class BaseImageTranslator$ClassificationBuilder<T extends BaseImageTranslator$BaseBuilder<BaseImageTranslator$BaseBuilder<any>>> extends BaseImageTranslator$BaseBuilder<T> {
    constructor()
    // private synsetLoader: BaseImageTranslator$SynsetLoader;
    configPostProcess(arg0: { [key: string]: Object | null }): void;
    optSynset(arg0: string[]): T;
    optSynsetArtifactName(arg0: string): T;
    optSynsetUrl(arg0: string): T;
    validate(): void;
}