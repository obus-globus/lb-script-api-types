import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
export class CharSequences extends Object {
    static codePoints(params: CharSequence): number[];
    static compare(paramcodepoint: number, parama: CharSequence): number;
    static compare(paramstring: CharSequence, paramcodePoint: number): number;
    static compare(parama: CharSequence, paramb: CharSequence): number;
    static equals(parama: Object | null, paramb: Object | null): boolean;
    static equals(paramcodepoint: number, paramother: CharSequence): boolean;
    static equals(paramother: CharSequence, paramcodepoint: number): boolean;
    static equalsChars(parama: CharSequence, paramb: CharSequence): boolean;
    static getSingleCodePoint(params: CharSequence): number;
    static indexOf(params: CharSequence, paramcodePoint: number): number;
    static matchAfter(parama: CharSequence, paramb: CharSequence, paramaIndex: number, parambIndex: number): number;
    static onCharacterBoundary(params: CharSequence, parami: number): boolean;
    private constructor()
    codePointLength(s: CharSequence): number;
}