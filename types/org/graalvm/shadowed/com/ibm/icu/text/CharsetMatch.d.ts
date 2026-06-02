import type { InputStream } from '../../../../../../../java/io/InputStream.d.ts'
import type { Reader } from '../../../../../../../java/io/Reader.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../java/lang/Comparable.d.ts'
import type { CharsetDetector } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CharsetDetector.d.ts'
import type { CharsetRecognizer } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CharsetRecognizer.d.ts'
export class CharsetMatch extends Object implements Comparable<CharsetMatch> {
    constructor(det: CharsetDetector, rec: CharsetRecognizer, conf: number)
    constructor(det: CharsetDetector, rec: CharsetRecognizer, conf: number, csName: string, lang: string)
    // private fCharsetName: string;
    // private fConfidence: number;
    // private fInputStream: InputStream;
    // private fLang: string;
    // private fRawInput: number[];
    // private fRawLength: number;
    compareTo(other: CharsetMatch): number;
    getConfidence(): number;
    getLanguage(): string;
    getName(): string;
    getReader(): Reader;
    getString(): string;
    getString(maxLength: number): string;
}