import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { Comparable } from '../../../../../../../java/lang/Comparable.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
import type { UnicodeSet$ComparisonStyle } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UnicodeSet$ComparisonStyle.d.ts'
import type { UnicodeSet$XSymbolTable } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/UnicodeSet$XSymbolTable.d.ts'
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
    static addAllTo<T extends unknown, U extends T[]>(paramsource: T[], paramtarget: U): U;
    static addAllTo<T extends unknown>(paramsource: T[], paramtarget: T[]): T[];
    static compare<T extends Comparable<T>>(paramcollection1: T[], paramcollection2: T[]): number;
    static compare<T extends Comparable<T>>(paramcollection1: T[], paramcollection2: T[], paramstyle: UnicodeSet$ComparisonStyle): number;
    static compare<T extends Comparable<T>>(paramfirst: Iterator<T>, paramother: Iterator<T>): number;
    static compare(paramcodePoint: number, paramstring: CharSequence): number;
    static compare(paramstring: CharSequence, paramcodePoint: number): number;
    static from(params: CharSequence): string[];
    static fromAll(params: CharSequence): string[];
    static getDefaultXSymbolTable(): UnicodeSet$XSymbolTable;
    static getSingleCodePoint(params: CharSequence): number;
    static resemblesPattern(parampattern: string, parampos: number): boolean;
    static setDefaultXSymbolTable(paramxSymbolTable: UnicodeSet$XSymbolTable): void;
    static toArray(paramset: string[]): string[];
}