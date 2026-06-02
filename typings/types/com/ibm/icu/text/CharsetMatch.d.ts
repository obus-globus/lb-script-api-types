import type { CharsetDetector } from '../../../../com/ibm/icu/text/CharsetDetector.d.ts'
import type { CharsetRecognizer } from '../../../../com/ibm/icu/text/CharsetRecognizer.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class CharsetMatch extends Object implements Comparable<CharsetMatch> {
    constructor(arg0: CharsetDetector, arg1: CharsetRecognizer, arg2: number)
    constructor(arg0: CharsetDetector, arg1: CharsetRecognizer, arg2: number, arg3: string, arg4: string)
    // private fCharsetName: string;
    // private fConfidence: number;
    // private fInputStream: InputStream;
    // private fLang: string;
    // private fRawInput: number[];
    // private fRawLength: number;
    compareTo(arg0: CharsetMatch): number;
    getConfidence(): number;
    getLanguage(): string;
    getName(): string;
    getReader(): Reader;
    getString(): string;
    getString(arg0: number): string;
}