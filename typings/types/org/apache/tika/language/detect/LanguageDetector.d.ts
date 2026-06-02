import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
import type { ServiceLoader } from '../../../../../org/apache/tika/config/ServiceLoader.d.ts'
import type { LanguageResult } from '../../../../../org/apache/tika/language/detect/LanguageResult.d.ts'
export abstract class LanguageDetector extends Object {
    static getDefaultLanguageDetector(): LanguageDetector;
    static getLanguageDetectors(): LanguageDetector[];
    static getLanguageDetectors(paramarg0: ServiceLoader): LanguageDetector[];
    constructor()
    mixedLanguages: boolean;
    shortText: boolean;
    addText(arg0: string[], arg1: number, arg2: number): void;
    addText(arg0: CharSequence): void;
    detect(): LanguageResult;
    detect(arg0: CharSequence): LanguageResult;
    detectAll(): LanguageResult[];
    detectAll(arg0: string): LanguageResult[];
    hasEnoughText(): boolean;
    hasModel(arg0: string): boolean;
    isMixedLanguages(): boolean;
    isShortText(): boolean;
    loadModels(): LanguageDetector;
    loadModels(arg0: string[]): LanguageDetector;
    reset(): void;
    setMixedLanguages(arg0: boolean): LanguageDetector;
    setPriors(arg0: { [key: string]: number }): LanguageDetector;
    setShortText(arg0: boolean): LanguageDetector;
}