import type { IntStream } from '../../../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Cloneable } from '../../../../java/lang/Cloneable.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class UResource$Key extends Object implements CharSequence, Cloneable, Comparable<UResource$Key> {
    static compare(paramarg0: CharSequence, paramarg1: CharSequence): number;
    constructor()
    constructor(arg0: string)
    // private bytes: number[];
    // private length: number;
    /*not mapped: */ length(): number;
    // private offset: number;
    // private s: string;
    chars(): IntStream;
    clone(): UResource$Key;
    codePoints(): IntStream;
    compareTo(arg0: UResource$Key): number;
    compareTo(arg0: CharSequence): number;
    contentEquals(arg0: CharSequence): boolean;
    endsWith(arg0: CharSequence): boolean;
    equals(arg0: Object | null): boolean;
    get(arg0: number): string;
    getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
    hashCode(): number;
    // private internalSubString(arg0: number, arg1: number): string;
    isEmpty(): boolean;
    // private regionMatches(arg0: number[], arg1: number, arg2: number): boolean;
    regionMatches(arg0: number, arg1: CharSequence): boolean;
    // private regionMatches(arg0: number, arg1: CharSequence, arg2: number): boolean;
    setBytes(arg0: number[], arg1: number): UResource$Key;
    setString(arg0: string): UResource$Key;
    setToEmpty(): UResource$Key;
    startsWith(arg0: CharSequence): boolean;
    subSequence(arg0: number, arg1: number): UResource$Key;
    substring(arg0: number): string;
    substring(arg0: number, arg1: number): string;
    toString(): string;
}