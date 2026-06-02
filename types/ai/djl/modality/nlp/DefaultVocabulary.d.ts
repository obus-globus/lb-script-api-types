import type { DefaultVocabulary$Builder } from '../../../../ai/djl/modality/nlp/DefaultVocabulary$Builder.d.ts'
import type { DefaultVocabulary$TokenInfo } from '../../../../ai/djl/modality/nlp/DefaultVocabulary$TokenInfo.d.ts'
import type { Vocabulary } from '../../../../ai/djl/modality/nlp/Vocabulary.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultVocabulary extends Object implements Vocabulary {
    static builder(): DefaultVocabulary$Builder;
    constructor(arg0: DefaultVocabulary$Builder)
    constructor(arg0: string[])
    // private indexToToken: string[];
    // private reservedTokens: string[];
    // private tokens: { [key: string]: DefaultVocabulary$TokenInfo };
    // private unknownToken: string;
    // private addToken(arg0: string): void;
    contains(arg0: string): boolean;
    getIndex(arg0: string): number;
    getToken(arg0: number): string;
    // private initializeIndexToTokenKeepingIndices(): void;
    // private initializeIndexToTokenReplacingIndices(): void;
    // private pruneTokens(arg0: number, arg1: number): boolean;
    size(): number;
}