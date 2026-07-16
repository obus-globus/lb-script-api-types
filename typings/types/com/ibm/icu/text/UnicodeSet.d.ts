import type { UnicodeSet$ComparisonStyle } from '../../../../com/ibm/icu/text/UnicodeSet$ComparisonStyle.d.ts'
import type { UnicodeSet$XSymbolTable } from '../../../../com/ibm/icu/text/UnicodeSet$XSymbolTable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class UnicodeSet {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static ADD_CASE_MAPPINGS: number;
    static ALL_CODE_POINTS: string[];
    static CASE: number;
    static CASE_INSENSITIVE: number;
    static EMPTY: string[];
    static ETHER: string;
    static IGNORE_SPACE: number;
    static MAX_VALUE: number;
    static MIN_VALUE: number;
    static SIMPLE_CASE_INSENSITIVE: number;
    static U_MATCH: number;
    static U_MISMATCH: number;
    static U_PARTIAL_MATCH: number;
    static addAllTo<T extends unknown, U extends T[]>(paramarg0: T[], paramarg1: U): U;
    static addAllTo<T extends unknown>(paramarg0: T[], paramarg1: T[]): T[];
    static compare<T extends Comparable<T>>(paramarg0: T[], paramarg1: T[]): number;
    static compare<T extends Comparable<T>>(paramarg0: T[], paramarg1: T[], paramarg2: UnicodeSet$ComparisonStyle): number;
    static compare<T extends Comparable<T>>(paramarg0: Iterator<T>, paramarg1: Iterator<T>): number;
    static compare(paramarg0: number, paramarg1: CharSequence): number;
    static compare(paramarg0: CharSequence, paramarg1: number): number;
    static from(paramarg0: CharSequence): string[];
    static fromAll(paramarg0: CharSequence): string[];
    static getDefaultXSymbolTable(): UnicodeSet$XSymbolTable;
    static getSingleCodePoint(paramarg0: CharSequence): number;
    static resemblesPattern(paramarg0: string, paramarg1: number): boolean;
    static setDefaultXSymbolTable(paramarg0: UnicodeSet$XSymbolTable): void;
    static toArray(paramarg0: string[]): string[];
}