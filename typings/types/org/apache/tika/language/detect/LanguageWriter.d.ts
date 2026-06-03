import type { Writer } from '../../../../../java/io/Writer.d.ts'
import type { LanguageDetector } from '../../../../../org/apache/tika/language/detect/LanguageDetector.d.ts'
import type { LanguageResult } from '../../../../../org/apache/tika/language/detect/LanguageResult.d.ts'
export class LanguageWriter extends Writer {
    static nullWriter(): Writer;
    constructor(arg0: LanguageDetector)
    readonly detector: LanguageDetector;
    close(): void;
    flush(): void;
    getDetector(): LanguageDetector;
    getLanguage(): LanguageResult;
    reset(): void;
    write(arg0: string[]): void;
    write(arg0: string[], arg1: number, arg2: number): void;
    write(arg0: number): void;
    write(arg0: string): void;
    write(arg0: string, arg1: number, arg2: number): void;
}