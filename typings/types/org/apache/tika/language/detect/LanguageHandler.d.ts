import type { LanguageDetector } from '../../../../../org/apache/tika/language/detect/LanguageDetector.d.ts'
import type { LanguageResult } from '../../../../../org/apache/tika/language/detect/LanguageResult.d.ts'
import type { LanguageWriter } from '../../../../../org/apache/tika/language/detect/LanguageWriter.d.ts'
import type { WriteOutContentHandler } from '../../../../../org/apache/tika/sax/WriteOutContentHandler.d.ts'
export class LanguageHandler extends WriteOutContentHandler {
    constructor()
    constructor(arg0: LanguageDetector)
    constructor(arg0: LanguageWriter)
    // private writer: LanguageWriter;
    getDetector(): LanguageDetector;
    getLanguage(): LanguageResult;
}