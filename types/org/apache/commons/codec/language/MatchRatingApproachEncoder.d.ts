import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { StringEncoder } from '../../../../../org/apache/commons/codec/StringEncoder.d.ts'
export class MatchRatingApproachEncoder extends Object implements StringEncoder {
    constructor()
    cleanName(arg0: string): string;
    encode(arg0: Object): Object;
    encode(arg0: string): string;
    getFirst3Last3(arg0: string): string;
    getMinRating(arg0: number): number;
    isEncodeEquals(arg0: string, arg1: string): boolean;
    isVowel(arg0: string): boolean;
    leftToRightThenRightToLeftProcessing(arg0: string, arg1: string): number;
    removeAccents(arg0: string): string;
    removeDoubleConsonants(arg0: string): string;
    removeVowels(arg0: string): string;
}