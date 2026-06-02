import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LanguageConfidence } from '../../../../../org/apache/tika/language/detect/LanguageConfidence.d.ts'
export class LanguageResult extends Object {
    static NULL: LanguageResult;
    constructor(arg0: string, arg1: LanguageConfidence, arg2: number)
    readonly confidence: LanguageConfidence;
    readonly language: string;
    readonly rawScore: number;
    getConfidence(): LanguageConfidence;
    getLanguage(): string;
    getRawScore(): number;
    isLanguage(arg0: string): boolean;
    isReasonablyCertain(): boolean;
    isUnknown(): boolean;
    toString(): string;
}