import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StringEncoder } from '../../../../../org/apache/commons/codec/StringEncoder.d.ts'
export class Metaphone extends Object implements StringEncoder {
    constructor()
    readonly maxCodeLen: number;
    encode(arg0: Object): Object;
    encode(arg0: string): string;
    getMaxCodeLen(): number;
    // private isLastChar(arg0: number, arg1: number): boolean;
    isMetaphoneEqual(arg0: string, arg1: string): boolean;
    // private isNextChar(arg0: StringBuilder, arg1: number, arg2: string): boolean;
    // private isPreviousChar(arg0: StringBuilder, arg1: number, arg2: string): boolean;
    // private isVowel(arg0: StringBuilder, arg1: number): boolean;
    metaphone(arg0: string): string;
    // private regionMatch(arg0: StringBuilder, arg1: number, arg2: string): boolean;
    setMaxCodeLen(arg0: number): void;
}