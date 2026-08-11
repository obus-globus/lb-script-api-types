import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TranslationCacheKey extends Object {
    constructor(sourceLanguage: string, targetLanguage: string, text: string)
    readonly sourceLanguage: string;
    readonly targetLanguage: string;
    readonly text: string;
    component1(): string;
    component2(): string;
    component3(): string;
    copy(sourceLanguage: string, targetLanguage: string, text: string): TranslationCacheKey;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}