import type { Object } from '../../../../java/lang/Object.d.ts'
export class BaseEncoding$Alphabet extends Object {
    constructor(name: string, chars: string[])
    // private bitsPerChar: number;
    // private bytesPerChunk: number;
    // private chars: string[];
    // private charsPerChunk: number;
    // private decodabet: number[];
    // private ignoreCase: boolean;
    // private mask: number;
    // private name: string;
    // private validPadding: (Object | null)[];
    canDecode(ch: string): boolean;
    decode(ch: string): number;
    encode(bits: number): string;
    equals(other: Object | null): boolean;
    // private hasLowerCase(): boolean;
    // private hasUpperCase(): boolean;
    hashCode(): number;
    ignoreCase(): BaseEncoding$Alphabet;
    isValidPaddingStartPosition(index: number): boolean;
    lowerCase(): BaseEncoding$Alphabet;
    matches(c: string): boolean;
    toString(): string;
    upperCase(): BaseEncoding$Alphabet;
}