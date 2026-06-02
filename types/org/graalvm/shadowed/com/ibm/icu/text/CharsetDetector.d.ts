import type { InputStream } from '../../../../../../../java/io/InputStream.d.ts'
import type { Reader } from '../../../../../../../java/io/Reader.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharsetMatch } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CharsetMatch.d.ts'
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
    enableInputFilter(filter: boolean): boolean;
    getDetectableCharsets(): string[];
    getReader(in_: InputStream, declaredEncoding: string): Reader;
    getString(in_: number[], declaredEncoding: string): string;
    inputFilterEnabled(): boolean;
    setDeclaredEncoding(encoding: string): CharsetDetector;
    setDetectableCharset(encoding: string, enabled: boolean): CharsetDetector;
    setText(in_: InputStream): CharsetDetector;
    setText(in_: number[]): CharsetDetector;
}