import type { CharsetMatch } from '../../../../com/ibm/icu/text/CharsetMatch.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CharsetDetector extends Object {
    static getAllDetectableCharsets(): (Object | null)[];
    constructor()
    // private fByteStats: number[];
    // private fC1Bytes: boolean;
    // private fDeclaredEncoding: string;
    // private fEnabledRecognizers: (Object | null)[];
    // private fInputBytes: number[];
    // private fInputLen: number;
    // private fInputStream: InputStream;
    // private fRawInput: number[];
    // private fRawLength: number;
    // private fStripTags: boolean;
    // private MungeInput(): void;
    detect(): CharsetMatch;
    detectAll(): CharsetMatch[];
    enableInputFilter(arg0: boolean): boolean;
    getDetectableCharsets(): string[];
    getReader(arg0: InputStream, arg1: string): Reader;
    getString(arg0: number[], arg1: string): string;
    inputFilterEnabled(): boolean;
    setDeclaredEncoding(arg0: string): CharsetDetector;
    setDetectableCharset(arg0: string, arg1: boolean): CharsetDetector;
    setText(arg0: InputStream): CharsetDetector;
    setText(arg0: number[]): CharsetDetector;
}