import type { DefaultVocabulary } from '../../../../ai/djl/modality/nlp/DefaultVocabulary.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultVocabulary$Builder extends Object {
    constructor(arg0: any)
    // private maxTokens: number;
    // private minFrequency: number;
    // private reservedTokens: string[];
    // private sentences: string[][];
    // private unknownToken: string;
    add(arg0: string[]): DefaultVocabulary$Builder;
    addAll(arg0: string[][]): DefaultVocabulary$Builder;
    addFromCustomizedFile(arg0: URL, arg1: (param0: URL) => string[]): DefaultVocabulary$Builder;
    addFromTextFile(arg0: URL): DefaultVocabulary$Builder;
    addFromTextFile(arg0: Path[]): DefaultVocabulary$Builder;
    build(): DefaultVocabulary;
    optMaxTokens(arg0: number): DefaultVocabulary$Builder;
    optMinFrequency(arg0: number): DefaultVocabulary$Builder;
    optReservedTokens(arg0: string[]): DefaultVocabulary$Builder;
    optUnknownToken(): DefaultVocabulary$Builder;
    optUnknownToken(arg0: string): DefaultVocabulary$Builder;
}