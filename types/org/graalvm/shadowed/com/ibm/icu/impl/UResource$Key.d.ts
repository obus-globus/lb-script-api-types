import type { IntStream } from '../../../../../../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { Cloneable } from '../../../../../../../java/lang/Cloneable.d.ts'
import type { Comparable } from '../../../../../../../java/lang/Comparable.d.ts'
export class UResource$Key extends Object implements CharSequence, Cloneable, Comparable<UResource$Key> {
    static compare(paramarg0: CharSequence, paramarg1: CharSequence): number;
    constructor()
    private constructor(keyBytes: number[], keyOffset: number, keyLength: number)
    constructor(s: string)
    // private bytes: number[];
    // private length: number;
    /*not mapped: */ length(): number;
    // private offset: number;
    // private s: string;
    chars(): IntStream;
    protected clone(): Object;
    clone(): UResource$Key;
    codePoints(): IntStream;
    compareTo(cs: CharSequence): number;
    compareTo(other: UResource$Key): number;
    contentEquals(cs: CharSequence): boolean;
    endsWith(cs: CharSequence): boolean;
    equals(other: Object | null): boolean;
    get(i: number): string;
    getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
    hashCode(): number;
    // private internalSubString(start: number, end: number): string;
    isEmpty(): boolean;
    // private regionMatches(otherBytes: number[], otherOffset: number, n: number): boolean;
    regionMatches(start: number, cs: CharSequence): boolean;
    // private regionMatches(start: number, cs: CharSequence, n: number): boolean;
    setBytes(keyBytes: number[], keyOffset: number): UResource$Key;
    setString(s: string): UResource$Key;
    setToEmpty(): UResource$Key;
    startsWith(cs: CharSequence): boolean;
    subSequence(start: number, end: number): UResource$Key;
    substring(start: number): string;
    substring(start: number, end: number): string;
    toString(): string;
}